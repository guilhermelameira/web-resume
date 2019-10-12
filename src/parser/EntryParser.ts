import {AbstractParser} from "./AbstractParser";
import Tokenizer from "../tokenizer/Tokenizer";
import {Entry} from "../types/Section";
import {PlainText, SectionText} from "../types/Text";
import Tokens from "../tokenizer/Tokens";
import PlaintextParser from "./PlaintextParser";
import {SummaryParser} from "./SummaryParser";

export class EntryParser extends AbstractParser {
    private entryEndArray = [Tokens.SECTION_TITLE_KEY, Tokens.ENTRY_SUBTITLE_KEY, Tokens.ENTRY_TITLE_KEY]

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
            context.getNext() // consume NEW_LINE token
            // get the next token in case the above is ##
            next = context.getNext()
        }

        if (next === Tokens.ENTRY_SUBTITLE_KEY) {
            subtitle = new PlaintextParser(Tokens.NEW_LINE).parse(context);
            next = context.getNext() // consume NEW_LINE token
        }

        let summary = [] as Array<SectionText>
        let peek = context.peek()

        while (peek !== null && !(this.entryEndArray.includes(peek))) {
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
