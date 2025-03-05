import { Client, Events, GatewayIntentBits, Partials } from "discord.js";

const TEST_CHANNEL_ID = "1346905381435080805";

export default class DiscordBot {
  constructor(discordToken) {
    this.discord_token = discordToken;
    this.client = new Client({
      intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.DirectMessages,
      ],
      partials: [Partials.Channel, Partials.Message],
    });
    this.startClient();
  }

  async startClient() {
    await this.client.login(process.env.DISCORD_TOKEN);
    this.client.on("ready", () => {
      console.log(`${this.client.user.tag} has logged in`);
    });
    this.client.on("messageCreate", (message) => {
      this.handleMessage(message);
    });
  }

  handleMessage(message) {
    switch (message.content) {
      case "hello":
        this.sendChannelMessage("hi", TEST_CHANNEL_ID);
        break;
    }
  }

  sendChannelMessage(message, channel) {
    const CHANNEL = this.client.channels.cache.get(channel);
    CHANNEL.send(message);
  }
}
