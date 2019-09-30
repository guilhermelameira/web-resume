import {AbstractParser} from "./AbstractParser";
import Tokenizer from "../tokenizer/Tokenizer";
import HeaderParser from "./HeaderParser";
import BodyParser from "./BodyParser";
import Tokens from "../tokenizer/Tokens";
import ParserError from "./ParserError";

export class ProgramParser extends AbstractParser {
    public parse(context: Tokenizer): void {
        let header = new HeaderParser()
        header.parse(context)
        let divHB = context.getNext()
        if (divHB !== Tokens.HEADER_BODY_DIV) {
            throw new ParserError(`Expected ${Tokens.HEADER_BODY_DIV} but got ${divHB} ` +
                `at line: ${context.getCurrentLine()}`)
        }
        let body = new BodyParser()
        body.parse(context)
    }
}