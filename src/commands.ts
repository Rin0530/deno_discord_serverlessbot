import { ApplicationCommand, InteractionResponse } from "../@types/index.d.ts"

export function onApplicationCommand(data:ApplicationCommand){
    const  value = data.options?.name;
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