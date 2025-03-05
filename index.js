import DiscordBot from "./classes/discordbot.js";
import "dotenv/config";

const TEST_CHANNEL_ID = "1346905381435080805";

const DISCORD_TOKEN = process.env.DISCORD_TOKEN;

const discordBot = new DiscordBot(DISCORD_TOKEN);


