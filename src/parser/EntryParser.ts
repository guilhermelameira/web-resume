import {AbstractParser} from "./AbstractParser";
import Tokenizer from "../tokenizer/Tokenizer";
import {Entry} from "../types/Section";
import {SectionText, SpecialText} from "../types/Text";
import Tokens from "../tokenizer/Tokens";
import {SummaryParser} from "./SummaryParser";
import {TextParser} from "./TextParser";

export class EntryParser extends AbstractParser {
    parse(context: Tokenizer): Entry {
        let next = context.peek();
        let title = [] as SpecialText
        let subtitle = [] as SpecialText
        if (next === Tokens.ENTRY_TITLE_KEY) {
            context.getNext()
            title = new TextParser().parse(context);
        } else if (next === Tokens.ENTRY_SUBTITLE_KEY) {
            context.getNext()
            subtitle = new TextParser().parse(context);
        }

        let summary = [] as Array<SectionText>
        let peek = context.peek()
        while (peek !== null && !(peek in [Tokens.ENTRY_SUBTITLE_KEY, Tokens.ENTRY_TITLE_KEY, Tokens.SECTION_TITLE_KEY])) {
            summary.push(new SummaryParser().parse(context))
        }

        return {
            title: title,
            subtitle: subtitle,
            summary: summary
        }
    }

}