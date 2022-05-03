import { ENV, KY } from "../deps.ts"
import { GlobalApplicationCommand } from "../@types/index.d.ts"

const BOT_TOKEN = ENV.require("BOT_TOKEN")
const CLIENT_ID = ENV.require("CLIENT_ID")

const url = `https://discord.com/api/v8/applications/${CLIENT_ID}/commands`;

const headers = {
    Authorization: `Bot ${BOT_TOKEN}`
}

const body:GlobalApplicationCommand = {
    name: "hello",
    description: "Greet a person",
    options: [
        {
            name: "name",
            description: "The name of the person",
            type: 3,
            required: true
        }
    ]
}

const parsed = await KY.post(url, {headers:headers, json: body }).json()

console.log(JSON.stringify(parsed,null,2));
