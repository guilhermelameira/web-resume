import Tokenizer from "../tokenizer/Tokenizer";
import {DataParser} from "./DataParser";
import {Variable} from "../types/Variable";
import Tokens from "../tokenizer/Tokens";
import {ProgramParser} from "./ProgramParser";
import {Program} from "../types/Program";

export class ResumeParser {
    static parse(program: string): Program {
        let t = new Tokenizer(program)
        let varMap = new DataParser().parse(t);
        let subProgram = program
        varMap.forEach((varName: Variable) => {
            subProgram = subProgram.replace(`$${varName.name}`, varName.value)
        })
        const dataStartIdx = subProgram.indexOf(Tokens.DATA_START)
        subProgram = subProgram.substring(0, dataStartIdx)
        console.log(subProgram)
        let p = new ProgramParser();

        t = new Tokenizer(subProgram)
        return p.parse(t);
    }
}