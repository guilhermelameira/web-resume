import {AbstractParser} from "./AbstractParser";
import Tokenizer from "../tokenizer/Tokenizer";
import {RichText} from "../types/Text";
import {TextParser} from "./TextParser";
import Tokens from "../tokenizer/Tokens";

export class RichTextParser extends AbstractParser {
    parse(context: Tokenizer): RichText {
        let value = [] as RichText
        let nextToken = context.peek()
        while (nextToken !== null) {
            const t = new TextParser().parse(context)
            value.push(t)
            nextToken = context.peek()

            // if NEW_LINE then we just read the whole sentence; break;
            if (nextToken === Tokens.NEW_LINE) {
                context.getNext()   // consume NEW_LINE
                break
            }
        }
        return value
    }
}