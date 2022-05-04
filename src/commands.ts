import { ApplicationCommand, InteractionResponse } from "../@types/index.d.ts"

export function onApplicationCommand(data:ApplicationCommand){
  // 実行されたコマンド名
  // コマンドが増えた場合はこれで分岐すれば良い
  const commandName = data.name;

  // オプションを取得
  const value = data.options?.shift()?.value;
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