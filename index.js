const { Client, GatewayIntentBits, Events } = require('discord.js');
const { channelId } = require('./config.json'); 
require('dotenv').config();

const client = new Client({ 
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent 
  ]
});

client.once(Events.ClientReady, () => {
  console.log(`${client.user.tag} is online`);
});

client.on(Events.MessageCreate, async (message) => {
  if (message.author.bot) return;

  if (message.channel.id === channelId) {
    try {
      await message.startThread({
        name: `Thread for ${message.author.username}`,
        reason: 'thread自動作成',
      });
    } catch (error) {
      console.error('スレッドの作成中にエラーが発生しました:', error);
    }
  }
});

client.login(process.env.token); 
