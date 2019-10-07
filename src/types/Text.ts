export type PlainText = {
    value: string;
};

export type Text = {
    value: string;
    decorator: 'RAW'|'EMPHASIS'|'TOKEN'
};

export type SectionText = {
    value: Array<Text>
    is_bullet: boolean
}