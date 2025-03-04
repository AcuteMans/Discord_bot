// Require the necessary discord.js classes
import { Client, Events, GatewayIntentBits , Partials} from "discord.js";
import "dotenv/config";

// Create a new client instance
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.DirectMessages,
  ],
  partials: [Partials.Channel, Partials.Message],
});

client.login(process.env.DISCORD_TOKEN);

client.on("ready", () => {
  console.log(`${client.user.tag} has logged in`);
});

client.on("messageCreate", (message) => {
  if (message.content === "hello") {
    message.reply("hello buddy");
  }
});
