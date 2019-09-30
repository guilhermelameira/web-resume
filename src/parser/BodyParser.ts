import {AbstractParser} from "./AbstractParser";
import Tokenizer from "../tokenizer/Tokenizer";
import SectionParser from "./SectionParser";

export default class BodyParser extends AbstractParser {
    parse(context: Tokenizer): void {
        do {
            let section = new SectionParser();
            section.parse(context)
        } while(!context.hasNext())
    }
}