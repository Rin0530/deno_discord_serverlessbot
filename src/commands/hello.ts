import { ApplicationCommand, InteractionResponse } from "../../@types/index.d.ts"
import { InteractionCallbackType } from "../../@types/types.ts"

export function hello(data:ApplicationCommand):InteractionResponse {
    throw Error()
    // オプションを取得
    const value = data.options?.find(predicate => predicate.name == "name")?.value;
    const res: InteractionResponse = {
        // Type 4 reponds with the below message retaining the user's
        // input at the top.
        type: InteractionCallbackType.CHANNEL_MESSAGE_WITH_SOURCE,
        data: {
          content: `Hello, ${value}!`,
        },
      }
    return res;
}