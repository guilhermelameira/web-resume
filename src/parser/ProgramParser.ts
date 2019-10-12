import {AbstractParser} from "./AbstractParser";
import Tokenizer from "../tokenizer/Tokenizer";
import HeaderParser from "./HeaderParser";
import BodyParser from "./BodyParser";
import Tokens from "../tokenizer/Tokens";
import ParserError from "./ParserError";
import {Program} from "../types/Program";
import {VarDecParser} from "./VarDecParser";
import {VarDec} from "../types/Variables";

export class ProgramParser extends AbstractParser {
    public parse(context: Tokenizer): Program {
        let headerParser = new HeaderParser()
        let header = headerParser.parse(context);
        let divHB = context.getNext()
        if (divHB !== Tokens.HEADER_BODY_DIV) {
            throw new ParserError(Tokens.HEADER_BODY_DIV, divHB, context.getCurrentLine())
        }
        context.getNext() // consume the NEXT_LINE token after header-body division

        let bodyParser = new BodyParser()
        let parsedBody = bodyParser.parse(context)
        let varDecs: Map<string, VarDec> = new Map<string, VarDec>()
        if (context.hasNext() && context.peek() === Tokens.VAR_DEC_START) {
            context.getNext()// CONSUME VAR_DEC_START
        }
        while (context.hasNext()) {
            while (context.peek() === Tokens.NEW_LINE) {
                context.getNext()
            }
            if (context.peek() === Tokens.VAR_DEC) {
                let varDec = new VarDecParser().parse(context);
                varDecs.set(varDec.name, varDec)
            }
            while (context.peek() === Tokens.NEW_LINE) {
                context.getNext()
            }
        }
        return {
            header,
            body: parsedBody,
            varDecs
        }
    }
}