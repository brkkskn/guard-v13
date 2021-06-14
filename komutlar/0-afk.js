const Discord = require("discord.js");
const db = require("quick.db");
const ayarlar = require('../ayarlar.json')
let prefix = ayarlar.prefix
 
exports.run = function(client, message, args) { 
  var reverskullanıcı = message.author;
  var reverssebep = args.slice(0).join("  ");
  const embed = new Discord.MessageEmbed()
  .setColor('RED')
  .setAuthor(message.author.username, message.author.avatarURL)
  .setDescription(`Afk Olmak İçin Bir Sebep Belirtin.\n\n Örnek Kullanım : ${prefix}afk <sebep>`)
  if(!reverssebep) return message.channel.send(embed)
  db.set(`afk_${reverskullanıcı.id}`, reverssebep);
  db.set(`afk_süre_${reverskullanıcı.id}`, Date.now());
  const afk = new Discord.MessageEmbed()
  .setColor('GREEN')
  .setAuthor(message.author.username, message.author.avatarURL)
  .setDescription(`Afk Moduna Başarıyla Girildi. Afk Olma Sebebi : **${reverssebep}**`)
  message.channel.send(afk) 
};
 
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["afk","afkol","afk-ol"],
  permLevel: 0
};
 
exports.help = {
  name: 'afk',
  description: 'Afk Olmanızı Sağlar',
  usage: '.afk <sebep>'
};

