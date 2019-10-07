import {AbstractParser} from "./AbstractParser";
import Tokenizer from "../tokenizer/Tokenizer";
import {SectionText} from "../types/Text";

export class SummaryParser extends AbstractParser {
    parse(context: Tokenizer): SectionText {
        // TODO implement
        return {} as SectionText
    }
}
