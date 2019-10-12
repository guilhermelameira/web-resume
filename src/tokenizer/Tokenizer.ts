// Tokenizer is a read-only stack-like structure that has basic operations like
// getNext(), peek(), hasNext()
// Best practice to call peek() and then getNext()
import Tokens from "./Tokens";

export default class Tokenizer {
    private program: string
    private tokens: string[]
    private currentIdx: number
    private lineNumber: number

    constructor(programString: string) {
        this.program = programString
        this.tokens = []
        this.currentIdx = 0
        this.lineNumber = 1
        this.tokenize()
    }

    private tokenize(): void {
        this.program = this.program.charAt(0) + " " + this.program.substring(1) // Add a space between @ and name for header

        // add space between literal for tokenizing
        for (let literal of Tokens.literals) {
            let regex = new RegExp(this.escapeRegex(literal), 'g');
            this.program = this.program.replace(regex, ' ' + literal + ' ')
        }
        this.program = this.program.replace(/\n+/g, '\n')
        let enhanced = this.program.split('\n').join(' NEW_LINE ')

        this.tokens = enhanced.match(/\S+/g) as string[]
        console.log('TOKENS:', this.tokens) // fixme remove
    }

    // getNext returns the next token of the program, and advances the token list
    public getNext(): string {
        if (this.peek() != null) {
            let token = this.tokens[this.currentIdx]
            this.currentIdx++
            if (token === Tokens.NEW_LINE) {
                this.lineNumber++
            }
            return token;
        }
        throw new Error("No more tokens to consume")
    }

    // peek returns the next token
    public peek(): string | null {
        if (this.currentIdx < this.tokens.length) {
            return this.tokens[this.currentIdx]
        }
        return null
    }

    // returns true if there are more tokens left, else returns false
    public hasNext(): boolean {
        return this.peek() !== null
    }

    public getCurrentLine(): number {
        return this.lineNumber
    }

    // returns a string after escaping regular expression characters in given string
    private escapeRegex(str: string): string {
        return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
    }
}
