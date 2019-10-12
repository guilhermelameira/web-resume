import {AbstractParser} from "./AbstractParser";
import Tokenizer from "../tokenizer/Tokenizer";
import {Entry} from "../types/Section";
import {RichText, SectionText} from "../types/Text";
import Tokens from "../tokenizer/Tokens";
import {SummaryParser} from "./SummaryParser";
import {RichTextParser} from "./RichTextParser";

export class EntryParser extends AbstractParser {
    private entryEndArray = [Tokens.SECTION_TITLE_KEY, Tokens.ENTRY_SUBTITLE_KEY, Tokens.ENTRY_TITLE_KEY, Tokens.VAR_DEC_START]
    private varCtx: boolean;

    constructor(varCtx?: boolean) {
        super()
        this.varCtx = !!varCtx
    }

    parse(context: Tokenizer): Entry {
        let title: RichText = []
        let subtitle: RichText = []

        if (context.peek() === Tokens.ENTRY_TITLE_KEY) {
            context.getNext()
            title = new RichTextParser().parse(context);
        }

        if (context.peek() === Tokens.ENTRY_SUBTITLE_KEY) {
            context.getNext()
            subtitle = new RichTextParser().parse(context);
        }

        let summary = [] as Array<SectionText>
        let peek = context.peek()

        while (peek !== null && !(this.entryEndArray.includes(peek))) {
            if (this.varCtx && context.peek() === Tokens.VAR_END) {
                break
            }
            summary.push(new SummaryParser().parse(context))
            peek = context.peek()
        }

        return {
            title: title,
            subtitle: subtitle,
            summary: summary
        }
    }

}
