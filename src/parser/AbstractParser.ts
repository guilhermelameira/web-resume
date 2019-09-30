import Tokenizer from "../tokenizer/Tokenizer";

export abstract class AbstractParser {
    abstract parse(context: Tokenizer): void
}