import {AbstractParser} from "./AbstractParser";
import Tokenizer from "../tokenizer/Tokenizer";
import {SectionText, Text} from "../types/Text";
import Tokens from "../tokenizer/Tokens"
import { TextParser } from "./TextParser";
import { existsTypeAnnotation } from "@babel/types";

export class SummaryParser extends AbstractParser {
    parse(context: Tokenizer): SectionText {

        let sectionText = {} as SectionText
        let value = [] as Text[]

        // first check if its bullet pointed entry
        let nextToken = context.peek()
        if(nextToken === Tokens.BULLET_KEY){
            sectionText.is_bullet = true
            context.getNext()   // consume the bullet token
            nextToken = context.peek()   // point to the next token
        } else {
            sectionText.is_bullet = false
        }
        // if not null and not NEW_LINE then there is a text to parse in same line
        while (nextToken !== null) {
            value.push(new TextParser().parse(context))
            nextToken = context.peek()

            // if NEW_LINE then we just read the whole sentence; break;
            if(nextToken === Tokens.NEW_LINE){
                context.getNext()   // consume NEW_LINE
               break
            }
        }
        sectionText.value = value
        return sectionText
    }
}
