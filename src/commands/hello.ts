import { ApplicationCommand, InteractionResponse } from "../../@types/index.d.ts"

export function hello(data:ApplicationCommand):InteractionResponse {
    // オプションを取得
    const value = data.options?.find(predicate => predicate.name == "name")?.value;
    const res: InteractionResponse = {
        // Type 4 reponds with the below message retaining the user's
        // input at the top.
        type: 4,
        data: {
          content: `Hello, ${value}!`,
        },
      }
    return res;
}