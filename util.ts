import { InteractionType } from "./@types/enums.d.ts"
import { Interaction, ApplicationCommandInteraction, MessageComponentInteraction } from "./@types/index.d.ts"

export function isCommand(value:Interaction): value is ApplicationCommandInteraction {
    return value.type == InteractionType.APPLICATION_COMMAND && 'data' in value
}

export function isMessage(value:Interaction): value is MessageComponentInteraction {
    return value.type == InteractionType.MESSAGE_COMPONENT && 'message' in value
}