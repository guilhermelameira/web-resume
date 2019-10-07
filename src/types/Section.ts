import {PlainText, SectionText} from "./Text";

export type Entry = {
    title: PlainText
    subtitle: PlainText
    summary: Array<SectionText>
}

export type Section = {
    title: PlainText
    entries: Array<Entry>
}