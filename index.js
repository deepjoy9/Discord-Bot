const { Client, GatewayIntentBits } = require("discord.js");
require('dotenv').config()

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.on("messageCreate", (message) => {
  console.log(message);
  if (message.author.bot) return;
  message.reply({
    content: "Hi I am Dev Bot",
  });
});

client.login(process.env.TOKEN);

client.on("interactionCreate", (interaction) => {
  console.log(interaction);
  interaction.reply("Pong!!");
});
