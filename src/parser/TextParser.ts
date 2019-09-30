import {AbstractParser} from "./AbstractParser";
import Tokenizer from "../tokenizer/Tokenizer";
import ParserError from "./ParserError";

export default class TextParser extends AbstractParser {
    parse(context: Tokenizer): void {
        throw new ParserError("NOT IMPLEMENTED")
    }
}
