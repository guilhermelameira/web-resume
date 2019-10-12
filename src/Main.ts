import Tokenizer from "./tokenizer/Tokenizer";
import * as fs from "fs";
import * as path from "path";
import {ProgramParser} from "./parser/ProgramParser";

export default class Main {
    public main() {
        let program: string = ""
        try {
            program = fs.readFileSync(path.join(__dirname, "../resources", "example_resume_var.rmd")).toString('utf-8')
        } catch (err) {
            console.log("Failed to open file")
            return
        }
        let t = new Tokenizer(program)
        let p = new ProgramParser();
        let str = ""
        console.log(str)
        console.log("done showing tokens")
        let programParsed = p.parse(t);
        // Substitute variables TODO
        console.log("program=", JSON.stringify(programParsed))
        console.log("varDecs=", Array.from(programParsed.varDecs.entries()))
    }
}
