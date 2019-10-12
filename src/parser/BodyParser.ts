import {AbstractParser} from "./AbstractParser";
import Tokenizer from "../tokenizer/Tokenizer";
import SectionParser from "./SectionParser";
import {Body} from "../types/Body"
import {Section} from "../types/Section";
import Tokens from "../tokenizer/Tokens";

export default class BodyParser extends AbstractParser {
    parse(context: Tokenizer): Body {
        let body = [] as Array<Section>
        // let body = [] as Section[]
        do {
            let section = new SectionParser();
            body.push(section.parse(context))
        } while (context.hasNext() && context.peek() !== Tokens.VAR_DEC_START)
        return body
    }
}