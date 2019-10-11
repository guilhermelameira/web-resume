import {AbstractParser} from "./AbstractParser";
import Tokenizer from "../tokenizer/Tokenizer";
import HeaderParser from "./HeaderParser";
import BodyParser from "./BodyParser";
import Tokens from "../tokenizer/Tokens";
import ParserError from "./ParserError";
import {Program} from "../types/Program";

export class ProgramParser extends AbstractParser {
    public parse(context: Tokenizer): Program {
        let headerParser = new HeaderParser()
        let header = headerParser.parse(context);
        let divHB = context.getNext()
        if (divHB !== Tokens.HEADER_BODY_DIV) {
            throw new ParserError(`Expected ${Tokens.HEADER_BODY_DIV} but got ${divHB} ` +
                `at line: ${context.getCurrentLine()}`)
        }

        let bodyParser = new BodyParser()
        let parsedBody = bodyParser.parse(context)
        return {
            header: header,
            body: parsedBody
        }
    }
}