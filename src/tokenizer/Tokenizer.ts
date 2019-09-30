// Tokenizer is a read-only stack-like structure that has basic operations like
// getNext(), peek(), hasNext()
// Best practice to call peek() and then getNext()
export default class Tokenizer {
    private program: string
    private tokens: string[]
    private currentIdx: number
    private lineNumber: number

    constructor(programString: string) {
        this.program = programString
        this.tokens = []
        this.currentIdx = 0
        this.lineNumber = 0
        this.tokenize()
    }

    private tokenize(): void {
        let enhanced = this.program.split('\n').join(' NEW_LINE ')
        // TODO maybe do more formatting for easier tokenizing
        enhanced = enhanced.split('{{').join(' {{ ').split('}}').join(' }} ')
        this.tokens = enhanced.match(/\S+/g) as string[]
        console.log('TOKENS:', this.tokens)
    }

    // getNext returns the next token of the program, and advances the token list
    public getNext(): string | null {
        if (this.peek() != null) {
            let token = this.tokens[this.currentIdx]
            this.currentIdx++
            return token;
        }
        return null
    }

    // peek returns the next token, advancing tokens only for blank lines
    public peek(): string | null {
        if (this.currentIdx < this.tokens.length) {
            // ignore blank lines
            while ("NEW_LINE" === this.tokens[this.currentIdx]) {
                this.currentIdx++
                this.lineNumber++
            }
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
}