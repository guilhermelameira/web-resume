import {AbstractParser} from "./AbstractParser";
import Tokenizer from "../tokenizer/Tokenizer";
import {PlainText} from "../types/Text";

// Consumes all tokens upto delimiter and returns them as a space-seperated concatenated string, it does not consume the delimiter
export default class PlaintextParser extends AbstractParser {
    private readonly delimiter: string

    constructor(delimiter: string) {
        super()
        this.delimiter = delimiter
    }

    parse(context: Tokenizer): PlainText {
        let text = ""
        while (context.peek() !== this.delimiter) {
            text += context.getNext() + ' '
        }
        return {
            value: text
        }
    }
}