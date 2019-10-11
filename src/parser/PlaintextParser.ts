import {AbstractParser} from "./AbstractParser";
import Tokenizer from "../tokenizer/Tokenizer";
import {PlainText} from "../types/Text";

// Consumes all tokens upto delimiter and returns them as a space-seperated concatenated string, it does not consume the delimiter
export default class PlaintextParser extends AbstractParser {
    private readonly delimiters: string[]

    constructor(delimiters: string[]) {
        super()
        this.delimiters = delimiters
    }

    parse(context: Tokenizer): PlainText {
        let text = ""
        while (context.peek() !== null && !(context.peek()! in this.delimiters)) {
            text += context.getNext() + ' '
        }
        return {
            value: text
        }
    }
}