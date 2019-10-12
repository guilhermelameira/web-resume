// List of Tokens (in regex) in our language
export default class Tokens {
    public static HEADER_BODY_DIV = "=="
    public static EMPHASIS_DECORATOR_START = "**"
    public static EMPHASIS_DECORATOR_END = "**"
    public static NEW_LINE = "NEW_LINE"
    public static USER_NAME = "@"
    public static SECTION_TITLE_KEY = "#"
    public static ENTRY_TITLE_KEY = "##"
    public static ENTRY_SUBTITLE_KEY = "###"
    public static TOKEN_DECORATOR_START = "(("
    public static TOKEN_DECORATOR_END = "))"
    public static BULLET_KEY = "-"
    public static LINE_BREAK = "++"
    public static ICON_START = "[["
    public static ICON_END = "]]"
    public static VAR_USE = "$"
    public static VAR_START = "{"
    public static VAR_END = "}"
    public static VAR_DEC = "var"
    public static literals = [
        Tokens.EMPHASIS_DECORATOR_END,
        Tokens.EMPHASIS_DECORATOR_START,
        Tokens.TOKEN_DECORATOR_END,
        Tokens.TOKEN_DECORATOR_START,
        Tokens.BULLET_KEY,
        Tokens.LINE_BREAK,
        Tokens.ICON_START,
        Tokens.ICON_END,
        Tokens.VAR_USE
    ]
    public static VAR_DEC_START = "DATA:"
}

