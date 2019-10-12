import {AbstractParser} from "./AbstractParser";
import Tokenizer from "../tokenizer/Tokenizer";
import Tokens from "../tokenizer/Tokens";
import PlaintextParser from "./PlaintextParser";
import {Entry, Section} from "../types/Section";
import {EntryParser} from "./EntryParser";
import ParserError from "./ParserError";


export default class SectionParser extends AbstractParser {
    parse(context: Tokenizer): Section {
        // Look for Section.ts Title
        let sectionTitleKey = context.getNext()
        let sectionTitle = {
            value: ""
        }
        if (sectionTitleKey === Tokens.SECTION_TITLE_KEY) {
            sectionTitle = new PlaintextParser(Tokens.NEW_LINE).parse(context);
            context.getNext() // consume NEW_LINE
        }
        else {
             throw new ParserError(`Expected ${Tokens.SECTION_TITLE_KEY} but got ${sectionTitleKey} ` +
                `at line: ${context.getCurrentLine()}`)
        }
        // Parse Entries
        let entries = [] as Array<Entry>
        while (context.peek() !== Tokens.SECTION_TITLE_KEY && context.hasNext()) {
            let entry = new EntryParser().parse(context);
            entries.push(entry)
        }

        return {
            title: sectionTitle,
            entries: entries
        }
    }
}
