import {AbstractParser} from "./AbstractParser";
import Tokenizer from "../tokenizer/Tokenizer";
import ParserError from "./ParserError";
import Tokens from "../tokenizer/Tokens";
import {Variable} from "../types/Variable";

export class VarDecParser extends AbstractParser {
    parse(context: Tokenizer): Variable {
        if (context.peek() !== Tokens.VAR_KEYWORD) {
            throw new ParserError(Tokens.VAR_KEYWORD, context.peek()!, context.getCurrentLine())
        }
        context.getNext() // consume VAR_DEC
        const name = context.getNext()
        let regExp = RegExp('^[A-Za-z0-9_]+$');
        if (!regExp.test(name)) {
            throw new ParserError("variable name", name, context.getCurrentLine())
        }
        if (context.peek() !== Tokens.VAR_DEC_START) {
            throw new ParserError(Tokens.VAR_DEC_START, context.peek()!, context.getCurrentLine())
        }
        context.getNext() // consume var start
        let str = ""
        while (context.peek() !== Tokens.VAR_DEC_END) {
            const t = context.getNext()
            if (t === Tokens.NEW_LINE) {
                str += "\n"
            } else {
                str += `${t} `
            }
        }
        context.getNext() // consume VAR_DEC_END
        return {
            name,
            value: str
        }
    }
}