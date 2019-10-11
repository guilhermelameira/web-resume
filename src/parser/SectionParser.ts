import {AbstractParser} from "./AbstractParser";
import Tokenizer from "../tokenizer/Tokenizer";
import Tokens from "../tokenizer/Tokens";
import {Entry, Section} from "../types/Section";
import {EntryParser} from "./EntryParser";
import {TextParser} from "./TextParser";
import ParserError from "./ParserError";
import {SpecialText} from "../types/Text";

export default class SectionParser extends AbstractParser {
    parse(context: Tokenizer): Section {
        // Look for Section.ts Title
        let sectionTitleKey = context.getNext()
        let sectionTitle = [] as SpecialText
        if (sectionTitleKey === Tokens.SECTION_TITLE_KEY) {
            sectionTitle = new TextParser().parse(context);
            context.getNext() // consume NEW_LINE
        } else {
            throw new ParserError(`Parsing Section: Expected ${Tokens.SECTION_TITLE_KEY} but got ${sectionTitleKey}`)
        }
        // Parse Entries
        let entries = [] as Array<Entry>
        while (context.peek() !== Tokens.SECTION_TITLE_KEY || !context.hasNext()) {
            let entry = new EntryParser().parse(context);
            entries.push(entry)
        }

        return {
            title: sectionTitle,
            entries: entries
        }
    }
}