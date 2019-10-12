import {AbstractParser} from "./AbstractParser";
import Tokenizer from "../tokenizer/Tokenizer";
import Tokens from "../tokenizer/Tokens";
import {Entry, Section} from "../types/Section";
import {EntryParser} from "./EntryParser";
import ParserError from "./ParserError";
import {RichTextParser} from "./RichTextParser";
import {RichText} from "../types/Text";

export default class SectionParser extends AbstractParser {
    private readonly varCtx: boolean

    constructor(varCtx?: boolean) {
        super()
        this.varCtx = !!varCtx
    }

    parse(context: Tokenizer): Section {
        // Look for Section.ts Title
        let sectionTitleKey = context.getNext()
        let sectionTitle: RichText
        if (sectionTitleKey === Tokens.SECTION_TITLE_KEY) {
            sectionTitle = new RichTextParser().parse(context);
        } else {
            throw new ParserError(Tokens.SECTION_TITLE_KEY, sectionTitleKey, context.getCurrentLine())
        }
        // Parse Entries
        let entries = [] as Array<Entry>
        while (context.hasNext() && !([Tokens.SECTION_TITLE_KEY, Tokens.VAR_DEC_START].includes(context.peek()!))) {
            if (this.varCtx && context.peek() === Tokens.VAR_END) {
                break
            }
            let entry = new EntryParser(this.varCtx).parse(context);
            entries.push(entry)
        }

        return {
            title: sectionTitle,
            entries: entries
        }
    }
}
