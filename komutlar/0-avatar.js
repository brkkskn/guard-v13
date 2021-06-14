const Discord = require('discord.js')

exports.run = function(client, message, args) {  
const reverskullanıcı = message.mentions.users.first()
let reversuser;
if (message.mentions.users.first())  {reversuser = message.mentions.users.first();}
else {reversuser = message.author;}
return message.channel.send(new Discord.MessageEmbed()
.setColor("RANDOM")
.setDescription(`**${reversuser.tag}** Avatar;`)
.setImage(reversuser.avatarURL()))
};

exports.conf = {
enabled: false,
guildOnly: false,
aliases: ["pp","avatar","profil-fotoğrafı"],
permLevel: 0 
};  
exports.help = {
name: 'avatar'
};

