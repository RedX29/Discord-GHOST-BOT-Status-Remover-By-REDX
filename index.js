/**
██████╗░███████╗██████╗░██╗░░██╗
██╔══██╗██╔════╝██╔══██╗╚██╗██╔╝
██████╔╝█████╗░░██║░░██║░╚███╔╝░
██╔══██╗██╔══╝░░██║░░██║░██╔██╗░
██║░░██║███████╗██████╔╝██╔╝╚██╗
╚═╝░░╚═╝╚══════╝╚═════╝░╚═╝░░╚═╝        
  GIT : https://github.com/RedX29/Discord-GHOST-BOT-Status-Remover-REDX
 * **********************************************
 *   Code by RedX29
 * **********************************************
 */



const { Client, GatewayIntentBits, ActivityType, TextChannel } = require('discord.js');
require('dotenv').config();
const express = require('express');
const fs = require('fs');
const path = require('path');
const client = new Client({
  intents: Object.keys(GatewayIntentBits).map((a) => {
    return GatewayIntentBits[a];
  }),
});
const app = express();
const port = 3000;
app.get('/', (req, res) => {
  res.send('Congrats!!! Your Bots Status Has Been Changed🎉');
});
app.listen(port, () => {
  console.log(`🔗 Powered By RedX29`);
});


const statusMessages = ["Created", "By", "RedX29",];


let currentIndex = 0;
const channelId = '';

async function login() {
  try {
    await client.login(process.env.TOKEN);
    console.log(`\x1b[36m%s\x1b[0m`, `|    successfully logged in as ${client.user.tag}`);
  } catch (error) {
    console.error('Failed to log in:', error);
    process.exit(1);
  }
}

/**
██████╗░███████╗██████╗░██╗░░██╗
██╔══██╗██╔════╝██╔══██╗╚██╗██╔╝
██████╔╝█████╗░░██║░░██║░╚███╔╝░
██╔══██╗██╔══╝░░██║░░██║░██╔██╗░
██║░░██║███████╗██████╔╝██╔╝╚██╗
╚═╝░░╚═╝╚══════╝╚═════╝░╚═╝░░╚═╝        
  GIT : https://github.com/RedX29/Discord-GHOST-BOT-Status-Remover-REDX
 * **********************************************
 *   Code by RedX29
 * **********************************************
 */


function updateStatusAndSendMessages() {
  const currentStatus = statusMessages[currentIndex];
  const nextStatus = statusMessages[(currentIndex + 1) % statusMessages.length];

  client.user.setPresence({
    activities: [{ name: currentStatus, type: ActivityType.Custom}],
    status: 'dnd',
  });

  
  const textChannel = client.channels.cache.get(channelId);

  if (textChannel instanceof TextChannel) {
   
    textChannel.send(`Bot status is: ${currentStatus}`);
  } else {

  }

  currentIndex = (currentIndex + 1) % statusMessages.length;
}

client.once('ready', () => {
  console.log(`\x1b[36m%s\x1b[0m`, `|    🎉Bot Is Now Ready As ${client.user.tag}`);
  console.log(`\x1b[36m%s\x1b[0m`, `|    ✅Eatwell, Staysafe, And May Godbless you.`);
  console.log(`\x1b[36m%s\x1b[0m`, `|    🎉Hope You Nice Life!!!`);
  updateStatusAndSendMessages();

  setInterval(() => {
    updateStatusAndSendMessages();
  }, 10000);
});

login();

/**
██████╗░███████╗██████╗░██╗░░██╗
██╔══██╗██╔════╝██╔══██╗╚██╗██╔╝
██████╔╝█████╗░░██║░░██║░╚███╔╝░
██╔══██╗██╔══╝░░██║░░██║░██╔██╗░
██║░░██║███████╗██████╔╝██╔╝╚██╗
╚═╝░░╚═╝╚══════╝╚═════╝░╚═╝░░╚═╝        
  GIT : https://github.com/RedX29/Discord-GHOST-BOT-Status-Remover-REDX
 * **********************************************
 *   Code by RedX29
 * **********************************************
 */
