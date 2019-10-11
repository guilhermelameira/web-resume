export type PlainText = {
    value: string;
};

export type SpecialText = Array<Text>

export type Text = {
    value: string;
    decorator: 'RAW'|'EMPHASIS'|'TOKEN'
};

export type SectionText = {
    value: SpecialText
    is_bullet: boolean
}