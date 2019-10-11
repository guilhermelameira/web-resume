import {PlainText, RichText, SectionText} from "./Text";

export type Entry = {
    title: RichText
    subtitle?: RichText
    summary: Array<SectionText>
}

export type Section = {
    title: RichText
    entries: Array<Entry>
}
