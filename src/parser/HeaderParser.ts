import {AbstractParser} from "./AbstractParser";
import Tokenizer from "../tokenizer/Tokenizer";
import ParserError from "./ParserError";
import Tokens from "../tokenizer/Tokens";
import {Header} from "../types/Header";
import PlaintextParser from "./PlaintextParser";
import {PlainText} from "../types/Text";

export default class HeaderParser extends AbstractParser {
    parse(context: Tokenizer): Header {
        // Get NAME
        let headerStart = context.getNext()
        if (headerStart !== Tokens.USER_NAME) {
            throw new ParserError(Tokens.USER_NAME, headerStart, context.getCurrentLine())
        }
        let nameParsed = new PlaintextParser(Tokens.NEW_LINE).parse(context);
        context.getNext() // consume NEW_LINE

        // Get Links
        let links = [] as Array<PlainText>
        while (context.peek() !== Tokens.HEADER_BODY_DIV) {
            links.push(this.parseLink(context))
        }

        return {
            name: nameParsed,
            links: links
        }
    }

    parseLink(context: Tokenizer): PlainText {
        let linkParsed = new PlaintextParser(Tokens.NEW_LINE).parse(context);
        context.getNext() // consume NEW_LINE
        return linkParsed
    }

}