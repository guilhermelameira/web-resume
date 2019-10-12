import {AbstractParser} from "./AbstractParser";
import Tokenizer from "../tokenizer/Tokenizer";
import {VarUse} from "../types/Variables";
import Tokens from "../tokenizer/Tokens";
import ParserError from "./ParserError";

export class VarUseParser extends AbstractParser {
    parse(context: Tokenizer): VarUse {
        if (context.peek() !== Tokens.VAR_USE) {
            throw new ParserError(Tokens.VAR_USE, context.peek()!, context.getCurrentLine())
        }
        return {
            name: context.getNext()
        }
    }
}