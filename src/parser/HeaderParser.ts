import {AbstractParser} from "./AbstractParser";
import Tokenizer from "../tokenizer/Tokenizer";
import ParserError from "./ParserError";
import Tokens from "../tokenizer/Tokens";
import {Header} from "../types/Header";
import {PlainText, SpecialText} from "../types/Text";
import {TextParser} from "./TextParser";

export default class HeaderParser extends AbstractParser {
    parse(context: Tokenizer): Header {
        // Get NAME
        let headerStart = context.getNext()
        if (headerStart.charAt(0) !== Tokens.USER_NAME) {
            throw new ParserError(`Expected ${Tokens.USER_NAME} but got ${headerStart.charAt(0)} ` +
                `at line: ${context.getCurrentLine()}`)
        }
        let nameParsed = new TextParser().parse(context);
        context.getNext() // consume NEW_LINE

        // Get Links
        let links = [] as Array<SpecialText>
        while (context.peek() !== Tokens.HEADER_BODY_DIV) {
            links.push(this.parseLink(context))
        }

        return {
            name: nameParsed,
            links: links
        }
    }

    parseLink(context: Tokenizer): SpecialText {
        let linkParsed = new TextParser().parse(context);
        context.getNext() // consume NEW_LINE
        return linkParsed
    }

}