const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "..";
const snekfetch = require("snekfetch");

client.on('ready', () => {
    console.log('I am ready!');
});


const devs1 = ["378575138444017665"];

client.on('message', message => {
    let argresult = message.content.split(` `).slice(1).join(' ');
    if (message.content.startsWith(prefix + 'st')) {
      if (!devs1.includes(message.author.id)) return message.channel.send("<@378575138444017665> only this guy can do restart the bot so don't try again :wink:.");
      message.delete();
      client.user.setGame(argresult, 'https://twitch.tv/YATO');
          message.react(":white_check_mark:")

    } else if(message.content.startsWith(prefix + 'w')) {
        client.user.setActivity(argresult,{type: 'WATCHING'});
          message.react(":white_check_mark:")

      } else if(message.content.startsWith(prefix + 'L')) {
        client.user.setActivity(argresult,{type: 'LISTENING'});

      } else if(message.content.startsWith(prefix + 'p')) {
        client.user.setActivity(argresult,{type: 'PLAYING'});
          message.react(":white_check_mark:")

      } else if(message.content.startsWith(prefix + 'sn')) {
        client.user.setUsername(argresult);
	
      } else if(message.content.startsWith(prefix + 'sv')) {
        client.user.setAvatar(argresult);

      } else if(message.content.startsWith(prefix + 'ss')) {
        if(!argresult) return message.channel.send('`online`, `DND(Do not Distrub),` `idle`, `invisible(Offline)` :notes: أختر أحد الحالات');
        client.user.setStatus(argresult);


    }

  })
 
  client.login(process.env.TOKEN);
