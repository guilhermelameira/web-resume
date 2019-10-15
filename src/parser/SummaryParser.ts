import {AbstractParser} from "./AbstractParser";
import Tokenizer from "../tokenizer/Tokenizer";
import {SectionText} from "../types/Text";
import Tokens from "../tokenizer/Tokens"
import {RichTextParser} from "./RichTextParser";

export class SummaryParser extends AbstractParser {
    parse(context: Tokenizer): SectionText {
        let sectionText = {} as SectionText
        // first check if its bullet pointed entry
        let nextToken = context.peek()
        if (nextToken === Tokens.BULLET_KEY) {
            sectionText.is_bullet = true
            context.getNext()   // consume the bullet token
            nextToken = context.peek()   // point to the next token
        } else {
            sectionText.is_bullet = false
        }
        // if not null and not NEW_LINE then there is a text to parse in same line
        sectionText.value = []
        if (nextToken !== null) {
            sectionText.value = new RichTextParser().parse(context)
        }
        return sectionText
    }
}
