import { ApplicationCommandInteraction, InteractionResponse } from "../../@types/index.d.ts"
import { InteractionCallbackType } from "../../@types/types.ts"

export function omikuji(interaction:ApplicationCommandInteraction):InteractionResponse {
  // コマンドの情報を取得
  const data = interaction.data
  // コマンドの送信者の情報を取得
  const member = interaction.member

  // 5以下の自然数をランダムに取得
  const num = Math.floor(Math.random() * 5);
  const fortunes = ["大凶","凶","小吉","吉","中吉","大吉"]
  const unsei = fortunes[num]

  // レスポンス本体
  const res: InteractionResponse = {
      // Type 4 reponds with the below message retaining the user's
      // input at the top.
      type: InteractionCallbackType.CHANNEL_MESSAGE_WITH_SOURCE,
      data: {
        content: `あなたの運勢は${unsei}です`,
      }
    }
    //"あなたの運勢は"+unsei+"です"
  return res;
}