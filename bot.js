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
		message.reply('http://gifimage.net/wp-content/uploads/2017/10/bye-have-a-beautiful-time-gif-3.gif');
	}


});

client.on("guildCreate", (guild) => {

    console.log(client.user.username + " was invited to and joined " + guild.name);
});
client.on("guildMemberAdd", (guild, member) => {

    console.log(member.user.username + " joined " + guild.name);
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
