import { ApplicationCommandInteraction, InteractionResponse } from "../../@types/index.d.ts"
import { hello } from "./hello.ts"

export function onApplicationCommand(interaction:ApplicationCommandInteraction){
  const data = interaction.data
  // 実行されたコマンド名
  // コマンドが増えた場合はこれで分岐すれば良い
  const commandName = data.name;
  let res:InteractionResponse;
  
  switch(commandName){
    case "hello":
      res = hello(interaction);
      break;
      
    default:
      res = {
        type:4,
        data: {
          content:"This command is unimplemented"
        }
      }
  }
  
  return res;
}