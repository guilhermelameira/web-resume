import {AbstractParser} from "./AbstractParser";
import Tokenizer from "../tokenizer/Tokenizer";
import {Entry} from "../types/Section";
import {PlainText, SectionText} from "../types/Text";
import Tokens from "../tokenizer/Tokens";
import PlaintextParser from "./PlaintextParser";
import {SummaryParser} from "./SummaryParser";

export class EntryParser extends AbstractParser {
    parse(context: Tokenizer): Entry {
        let next = context.getNext();
        let title = {
            value: ""
        }
        let subtitle = {
            value: ""
        }
        if (next === Tokens.ENTRY_TITLE_KEY) {
            title = new PlaintextParser(Tokens.NEW_LINE).parse(context);
        }
        if (next === Tokens.ENTRY_SUBTITLE_KEY) {
            subtitle = new PlaintextParser(Tokens.NEW_LINE).parse(context);
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