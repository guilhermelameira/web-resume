import * as fs from "fs";
import * as path from "path";
import {ResumeParser} from "./parser/ResumeParser";

export default class Main {
    public main() {
        let program: string = ""
        try {
            program = fs.readFileSync(path.join(__dirname, "../resources", "example_resume_var.rmd")).toString('utf-8')
        } catch (err) {
            console.log("Failed to open file")
            return
        }
        const programParsed = ResumeParser.parse(program)
        console.log(JSON.stringify(programParsed))
    }
}
