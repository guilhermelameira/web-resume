import {AbstractParser} from "./AbstractParser";
import Tokenizer from "../tokenizer/Tokenizer";
import {SpecialText, Text} from "../types/Text";
import Tokens from "../tokenizer/Tokens";
import PlaintextParser from "./PlaintextParser";

export class TextParser extends AbstractParser {
    parse(context: Tokenizer): SpecialText {

        let specialText = [] as SpecialText

        // check next token and evaluate based on the type of the text
        while (context.peek() !== Tokens.NEW_LINE) {
            let text = {} as Text
            let nextToken = context.peek()
            switch (nextToken) {
                case Tokens.EMPHASIS_DECORATOR_START:
                    // emphasis text **text**
                    context.getNext() // consume "**"
                    let plaintextParser = new PlaintextParser(Tokens.EMPHASIS_DECORATOR_END)
                    let plainText = plaintextParser.parse(context)
                    text.value = plainText.value
                    text.decorator = 'EMPHASIS'
                    break;
                case Tokens.TOKEN_DECORATOR_START:
                    // tokened text(skill)
                    context.getNext() // consume "(("
                    let pTextParser = new PlaintextParser(Tokens.TOKEN_DECORATOR_END)
                    let pText = pTextParser.parse(context)
                    text.value = pText.value
                    text.decorator = 'TOKEN'
                    break;
                default:
                    // raw text(normal string: no emphasis, no token)
                    // todo: maybe modify the plaintextparser?
                    let plaintextParser = new PlaintextParser(Tokens.NEW_LINE)
                    let plainText = plaintextParser.parse(context)
                    text.value = plainText.value
                    text.decorator = 'EMPHASIS'
                    break;
            }
        }
        return specialText
    }

}