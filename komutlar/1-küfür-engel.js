const Discord = require('discord.js')
const db = require('quick.db')
const ayarlar = require('../ayarlar.json')
let prefix = ayarlar.prefix

exports.run = async (client ,message, args) => {
if(args[0] === 'aç') {
db.set(`${message.guild.id}.kufur`, true)
const revers = new Discord.MessageEmbed()  
  .addField("İşlem Başarılı",`Küfür Engel Başarılı Bir Şekilde Akif Edildi`)
  .setColor("GREEN")
return message.channel.send(revers)
}
if (args[0] === 'kapat') {
db.delete(`${message.guild.id}.kufur`)
const revers = new Discord.MessageEmbed() 
  .addField("İşlem Başarılı",`Küfür Engel Başarılı Bir Şekilde Kapatıldı`)
  .setColor("GREEN")
return message.channel.send(revers)
}
{
const revers = new Discord.MessageEmbed() 
  .addField("Hatalı Kullanım",`Örnek Kullanım: **${prefix}küfür-engel aç/kapat**`)
  .setColor("RED")
return message.channel.send(revers)
}
};

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['küfürengel','küfür-engel'], 
 permLevel: 0
};

exports.help = {
 name: 'küfür-engel',
 description: 'Küfürleri Engeller',
 usage: 'küfür-engel'
};
