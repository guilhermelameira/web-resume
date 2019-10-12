import {Header} from "./Header";
import {Body} from "./Body"
import {VarDec} from "./Variables";

export type Program = {
    header: Header
    body: Body
    varDecs: Map<string, VarDec>
}