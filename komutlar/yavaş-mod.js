const Discord = require('discord.js');

exports.run = async(client, message, args) => {
if (message.channel.type !== "text") return;
const limit = args[0] ? args[0] : 0;
  if(!limit) {
              var embed = new Discord.MessageEmbed()
                .setDescription(`Doğru kullanım: \`-slowmode [0/150]\``)
                .setColor('#000001')
                .setTimestamp()
            message.channel.send({embed})
            return
          }
if (limit > 90000) {
    return message.channel.send(new Discord.MessageEmbed().setDescription("Süre limiti maksimum **100** saniye olabilir.").setColor('#000001'));
}
    message.channel.send(new Discord.MessageEmbed().setDescription(`Yazma süre limiti **${limit}** saniye olarak ayarlanmıştır.`).setColor('#000001'));
var request = require('request');
request({
    url: `https://discordapp.com/api/v7/channels/${message.channel.id}`,
    method: "PATCH",
    json: {
        rate_limit_per_user: limit
    },
    headers: {
        "Authorization": `Bot ${client.token}`
    },
})};
  exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["yavaşmod" , "slowmode"],
  permLevel: 3,
};

exports.help = {
  name: 'slowmode',
  description: 'Sohbete yazma sınır (süre) ekler.',
  usage: 'yavaş-mod [1/10]',
};