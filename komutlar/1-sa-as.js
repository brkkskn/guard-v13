const Discord = require('discord.js');
const db = require('quick.db');
const ayarlar = require('../ayarlar.json')
let prefix = ayarlar.prefix

exports.run = (client, message, args) => {
if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(new Discord.MessageEmbed().setColor('RANDOM').setDescription("Bu Komutu Kullanmak İçin `Mesajları Yönet` Yetkisine Sahip Omalısınız!"))
const revers = args.join(` `);
  if(!revers) message.channel.send(new Discord.MessageEmbed()
  .addField("Hatalı Kullanım",`Örnek Kullanım: **${prefix}sa-as aç & kapat**`)
  .setColor("RED"))
if(revers === "aç") {
db.set(`sa-as_${message.guild.id}`, `acik`);
message.channel.send(new Discord.MessageEmbed()
  .addField("İşlem Başarılı",`Sa-As Sistemi Başarılı Bir Şekilde Açıldı`)
  .setColor("GREEN"))
}
else if(revers === "kapat") {
db.set(`sa-as_${message.guild.id}`, `kapali`);
message.channel.send(new Discord.MessageEmbed()
  .addField("İşlem Başarılı",`Sa-As Sistemi Başarılı Bir Şekilde Kapatıldı`)
  .setColor("GREEN"))
}
};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["sa-as","saas"]
  };
  
  exports.help = {
  name: "sa-as",
  description: "Selam Sistemi",
  usage: "sa-as"
  };

