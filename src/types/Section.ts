import {SectionText, SpecialText} from "./Text";

export type Entry = {
    title: SpecialText
    subtitle: SpecialText
    summary: Array<SectionText>
}

export type Section = {
    title: SpecialText
    entries: Array<Entry>
}