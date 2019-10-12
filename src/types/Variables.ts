import {RichText} from "./Text";
import {Entry, Section} from "./Section";

export type VarUse = {
    name: string
}

export enum VarType {
    SECTION,
    ENTRY,
    RICHTEXT
}

export type VarDec = {
    name: string
    type: VarType
    value: Section | Entry | RichText
}