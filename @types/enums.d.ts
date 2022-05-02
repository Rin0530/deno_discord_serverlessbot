export enum ApplicationCommandType{
    CHAT_INPUT = 1,
    USER = 2,
    MESSAGE = 3
}

export enum ApplicationCommandOptionType{
    SUB_COMMAND=1,
    SUB_COMMAND_GROUP=2,
    STRING=3,
    INTEGER=4,
    BOOLEAN=5,
    USER=6,
    CHANNEL=7,
    ROLE=8,
    MENTIONABLE=9,
    NUMBER=10,
    ATTACHMENT=11
}

export enum ChannelType{
    GUILD_TEXT = 0,
    DM = 1,
    GUILD_VOICE = 2,
    GROUP_DM = 3,
    GUILD_CATEGORY = 4,
    GUILD_NEWS = 5,
    GUILD_NEWS_THREAD = 10,
    GUILD_PUBLIC_THREAD = 11,
    GUILD_PRIVATE_THREAD = 12,
    GUILD_STAGE_VOICE = 13,
    GUILD_DIRECTORY = 14,
    GUILD_FORUM = 15,
    
    GUILD_STORE = 16,
    UNKNOWN = 17
}

export enum InteractionType{
    PING = 1,
    APPLICATION_COMMAND = 2,
    MESSAGE_COMPONENT = 3,
    APPLICATION_COMMAND_AUTOCOMPLETE = 4,
    MODAL_SUBMIT = 5
}

export enum InteractionCallbackType{
    PONG = 1,
    CHANNEL_MESSAGE_WITH_SOURCE = 4,
    DEFERRED_CHANNEL_MESSAGE_WITH_SOURCE = 5,
    DEFERRED_UPDATE_MESSAGE = 6,
    UPDATE_MESSAGE = 7,
    APPLICATION_COMMAND_AUTOCOMPLETE_RESULT = 8,
    MODAL = 9
}

export enum ComponentTypes{
    "Action Row" = 1,
    "Button" = 2,
    "Select Menu" = 3,
    "Text Input" = 4
}

export enum ButtonStyles{
    Primary = 1,
    Secondary = 2,
    Success = 3,
    Danger = 4,
    Link = 5
}

export enum TextInputStyle{
    Short = 1,
    Paragraph = 2
}

export enum AllowedMentionTypes{
    "Role Mentions" = "roles",
    "User Mentions" = "users",
    "Everyone Mentions" = "everyone"
}

export enum EmbedTypes{
    rich,
    image,
    video,
    gifv,
    article,
    link
}

export enum MessageActivityTypes{
    JOIN = 1,
    SPECTATE = 2,
    LISTEN = 3,
    JOIN_REQUEST = 5
}

export enum MessageTypes{
    DEFAULT = 0,
    RECIPIENT_ADD = 1,
    RECIPIENT_REMOVE = 2,
    CALL = 3,
    CHANNEL_NAME_CHANGE = 4,
    CHANNEL_ICON_CHANGE = 5,
    CHANNEL_PINNED_MESSAGE = 6,
    GUILD_MEMBER_JOIN = 7,
    USER_PREMIUM_GUILD_SUBSCRIPTION = 8,
    USER_PREMIUM_GUILD_SUBSCRIPTION_TIER_1 = 9,
    USER_PREMIUM_GUILD_SUBSCRIPTION_TIER_2 = 10,
    USER_PREMIUM_GUILD_SUBSCRIPTION_TIER_3 = 11,
    CHANNEL_FOLLOW_ADD = 12,
    GUILD_DISCOVERY_DISQUALIFIED = 14,
    GUILD_DISCOVERY_REQUALIFIED = 15,
    GUILD_DISCOVERY_GRACE_PERIOD_INITIAL_WARNING = 16,
    GUILD_DISCOVERY_GRACE_PERIOD_FINAL_WARNING = 17,
    THREAD_CREATED = 18,
    REPLY = 19,
    CHAT_INPUT_COMMAND = 20,
    THREAD_STARTER_MESSAGE = 21,
    GUILD_INVITE_REMINDER = 22,
    CONTEXT_MENU_COMMAND = 23
}

export enum StickerType{
    STANDARD = 1,
    GUILD = 2
}

export enum Locales{
    "da" = "Danish",
    "de" = "German",
    "en-GB" = "English, UK",
    "en-US" = "English, US",
    "es-ES" = "Spanish",
    "fr" = "French",
    "hr" = "Croatian",
    "it" = "Italian",
    "lt" = "Lithuanian",
    "hu" = "Hungarian",
    "nl" = "Dutch",
    "no" = "Norwegian",
    "pl" = "Polish",
    "pt-BR" = "Portuguese, Brazilian",
    "ro" = "Romanian, Romania",
    "fi" = "Finnish",
    "sv-SE" = "Swedish",
    "vi" = "Vietnamese",
    "tr" = "Turkish",
    "cs" = "Czech",
    "el" = "Greek",
    "bg" = "Bulgarian",
    "ru" = "Russian",
    "uk" = "Ukrainian",
    "hi" = "Hindi",
    "th" = "Thai",
    "zh-CN" = "Chinese, China",
    "ja" = "Japanese",
    "zh-TW" = "Chinese, Taiwan",
    "ko" = "Korean"
}