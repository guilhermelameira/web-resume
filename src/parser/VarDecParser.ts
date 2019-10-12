import {AbstractParser} from "./AbstractParser";
import Tokenizer from "../tokenizer/Tokenizer";
import {VarDec, VarType} from "../types/Variables";
import Tokens from "../tokenizer/Tokens";
import ParserError from "./ParserError";
import {EntryParser} from "./EntryParser";
import {RichTextParser} from "./RichTextParser";
import SectionParser from "./SectionParser";
import {Entry, Section} from "../types/Section";
import {RichText} from "../types/Text";

export class VarDecParser extends AbstractParser {
    parse(context: Tokenizer): VarDec {
        if (context.peek() !== Tokens.VAR_DEC) {
            throw new ParserError(Tokens.VAR_DEC, context.peek()!, context.getCurrentLine())
        }
        context.getNext() // consume VAR_DEC
        const name = context.getNext()
        let regExp = RegExp('^[A-Za-z0-9_]+$');
        if (!regExp.test(name)) {
            throw new ParserError("variable name", name, context.getCurrentLine())
        }
        if (context.peek() !== Tokens.VAR_START) {
            throw new ParserError(Tokens.VAR_START, context.peek()!, context.getCurrentLine())
        }
        context.getNext() // consume var start
        while (context.peek() === Tokens.NEW_LINE) {
            context.getNext() // Consume NEW_LINE
        }

        const peek = context.peek()
        let val: Section | Entry | RichText
        let type: VarType
        switch (peek) {
            case Tokens.SECTION_TITLE_KEY:
                val = new SectionParser(true).parse(context)
                type = VarType.SECTION
                break
            case Tokens.ENTRY_TITLE_KEY:
            case Tokens.ENTRY_SUBTITLE_KEY:
                val = new EntryParser(true).parse(context)
                type = VarType.ENTRY
                break
            default:
                val = new RichTextParser().parse(context)
                type = VarType.RICHTEXT
        }
        if (context.peek() !== Tokens.VAR_END) {
            throw new ParserError(Tokens.VAR_END, context.peek()!, context.getCurrentLine())
        }
        context.getNext() // Consume VAR_END
        return {
            name,
            value: val,
            type
        }
    }
}