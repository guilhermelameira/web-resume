import {AbstractParser} from "./AbstractParser";
import Tokenizer from "../tokenizer/Tokenizer";
import {Text} from "../types/Text";
import Tokens from "../tokenizer/Tokens";
import PlaintextParser from "./PlaintextParser";

export class TextParser extends AbstractParser {
    parse(context: Tokenizer): Text {
        
        let text = {} as Text

        // check next token and evaluate based on the type of the text
        let nextToken = context.peek()
        switch(nextToken){
            case Tokens.EMPHASIS_DECORATOR_START:
                // emphasis text
                context.getNext()   // consume emphasis start token
                let plaintextParser = new PlaintextParser(Tokens.EMPHASIS_DECORATOR_END)
                let plainText = plaintextParser.parse(context)
                text.value = plainText.value
                text.decorator = 'EMPHASIS'
                break;
            case Tokens.TOKEN_DECORATOR_START:
                // tokened text(skill)
                context.getNext()  // consume token(skill) start token
                let pTextParser = new PlaintextParser(Tokens.TOKEN_DECORATOR_END)
                let pText = pTextParser.parse(context)
                text.value = pText.value
                text.decorator = 'TOKEN'
                break;
            default:
                // raw text(normal string: no emphasis, no token)

                // todo: maybe modify the plaintextparser?
                break;
                

        }
        return text
    }

}