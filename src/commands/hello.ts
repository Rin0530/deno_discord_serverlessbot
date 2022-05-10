import { ApplicationCommand, InteractionResponse } from "../../@types/index.d.ts"
import { InteractionCallbackType } from "../../@types/types.ts"

export function hello(data:ApplicationCommand):InteractionResponse {
    // オプションを取得
    const name = data.options?.find(val => val.name == "name")?.value;
    const res: InteractionResponse = {
        // Type 4 reponds with the below message retaining the user's
        // input at the top.
        type: InteractionCallbackType.CHANNEL_MESSAGE_WITH_SOURCE,
        data: {
          content: `Hello, ${name}!`,
        },
      }
    return res;
}