import {AbstractParser} from "./AbstractParser";
import Tokenizer from "../tokenizer/Tokenizer";
import {PlainText} from "../types/Text";
import Tokens from  "../tokenizer/Tokens";

// Consumes all tokens upto delimiter and returns them as a space-seperated concatenated string, it does not consume the delimiter
export default class PlaintextParser extends AbstractParser {
    private readonly delimiter: string
    private readonly delimiterList = [Tokens.TOKEN_DECORATOR_START,
        Tokens.EMPHASIS_DECORATOR_START,
        Tokens.ICON_START,
        Tokens.NEW_LINE]

    constructor(delimiter: string) {
        super()
        this.delimiter = delimiter
    }

    parse(context: Tokenizer): PlainText {
        let text = ""
        switch (this.delimiter) {
            case "":
                let peek = context.peek()
                while (peek !== null) {
                    if (this.delimiterList.includes(peek)) {
                        break; // do not consume the next token because it will be used
                    }
                    text += context.getNext() + ' '
                    peek = context.peek()
                }
                break;

            default:
                while (context.peek() !== this.delimiter) {
                    text += context.getNext() + ' '
                }
                break;

        }
        return {
            value: text
        }
    }
}
