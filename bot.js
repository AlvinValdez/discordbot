const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '?holdup') {
    	message.reply('https://media.giphy.com/media/CNJZ5EYc5pPK8/giphy.gif');
  	}else if(message.content === '?jail'){
		message.reply('https://media.giphy.com/media/26BRqr52AQWxuUkda/giphy.gif');
	}else if(message.content === '?byebye'){
		message.reply(https://media1.tenor.com/images/1e54feb672f69e25892fb3cf3b1bb2d5/tenor.gif?itemid=5705428);
	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
