export default class ParserError extends Error {
    constructor(expected: string, actual: string, lineNumber: number) {
        super(`Expected ${expected} but got ${actual} at line: ${lineNumber}`);
    }
}