import {AbstractParser} from "./AbstractParser";
import Tokenizer from "../tokenizer/Tokenizer";
import Tokens from "../tokenizer/Tokens";
import {Variable, VarMap} from "../types/Variable";
import {VarDecParser} from "./VarDecParser";

export class DataParser extends AbstractParser {
    parse(context: Tokenizer): VarMap {
        while (context.hasNext() && context.peek() !== Tokens.DATA_START) {
            context.getNext()
        }
        if (context.hasNext()) {
            context.getNext()// CONSUME DATA_START
        }
        let varMap: VarMap = new Map<string, Variable>()
        while (context.hasNext()) {
            while (context.peek() === Tokens.NEW_LINE) {
                context.getNext()
            }
            if (context.peek() === Tokens.VAR_KEYWORD) {
                let varDec = new VarDecParser().parse(context);
                varMap.set(varDec.name, varDec)
            }
            while (context.peek() === Tokens.NEW_LINE) {
                context.getNext()
            }
        }
        return varMap
    }
}