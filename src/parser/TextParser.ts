import {AbstractParser} from "./AbstractParser";
import Tokenizer from "../tokenizer/Tokenizer";
import {Text, PlainText} from "../types/Text";
import Tokens from "../tokenizer/Tokens";
import PlaintextParser from "./PlaintextParser";

export class TextParser extends AbstractParser {
    parse(context: Tokenizer): Text {

        let text = {} as Text
        let plainTextParser = {} as PlaintextParser
        let initialText = {} as PlainText

        // check next token and evaluate based on the type of the text
        switch (context.peek()) {
            case Tokens.EMPHASIS_DECORATOR_START:
                // emphasis text
                context.getNext()   // consume the emphasis start token
                plainTextParser = new PlaintextParser(Tokens.EMPHASIS_DECORATOR_END)
                initialText = plainTextParser.parse(context)
                text.value = initialText.value
                text.decorator = 'EMPHASIS'
                context.getNext()   // consume the emphasis end token
                break;
            case Tokens.TOKEN_DECORATOR_START:
                // tokened text(skill)
                context.getNext()  // consume the token(skill) start token
                plainTextParser = new PlaintextParser(Tokens.TOKEN_DECORATOR_END)
                initialText = plainTextParser.parse(context)
                text.value = initialText.value
                text.decorator = 'TOKEN'
                context.getNext()   // consume the token end token
                break;
            case Tokens.LINE_BREAK:
                // Line break
                context.getNext()// consume LINE_BREAK token
                if (context.peek() === Tokens.NEW_LINE) {
                    context.getNext() // Consume the next line and continue on
                }
                text.value = ""
                text.decorator = "BREAK"
                break
            case Tokens.ICON_START:
                // icon
                context.getNext()  // consume the icon start token
                plainTextParser = new PlaintextParser(Tokens.ICON_END)
                initialText = plainTextParser.parse(context)
                text.value = initialText.value
                text.decorator = 'ICON'
                context.getNext()   // consume the token end token
                break;
            default:
                // raw text(normal string: no emphasis, no token)
                plainTextParser = new PlaintextParser("")
                initialText = plainTextParser.parse(context)
                text.value = initialText.value
                text.decorator = 'RAW'
                break;
        }

        return text
    }

}
