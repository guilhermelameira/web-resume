import {AbstractParser} from "./AbstractParser";
import Tokenizer from "../tokenizer/Tokenizer";
import HeaderParser from "./HeaderParser";
import BodyParser from "./BodyParser";
import Tokens from "../tokenizer/Tokens";
import ParserError from "./ParserError";
import {Program} from "../types/Program";

export class ProgramParser extends AbstractParser {
    public parse(context: Tokenizer): Program {
        let header;
        let body;

        let headerParser = new HeaderParser()
        header = headerParser.parse(context);
        if (context.hasNext()) {
            let divHB = context.getNext()
            if (divHB !== Tokens.HEADER_BODY_DIV) {
                throw new ParserError(Tokens.HEADER_BODY_DIV, divHB, context.getCurrentLine())
            }
            context.getNext() // consume the NEXT_LINE token after header-body division

            let bodyParser = new BodyParser()
            body = bodyParser.parse(context)
        }
        return {
            header,
            body
        }
    }
}