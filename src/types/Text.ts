export type PlainText = {
    value: string;
};

export type RichText = Array<Text>;

export type Text = {
    value: string;
    decorator: string;
};

export type SectionText = {
    value: RichText
    is_bullet: boolean
}
