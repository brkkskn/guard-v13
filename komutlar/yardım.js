const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = `**${ayarlar.prefix}`

exports.run = async(client, message, args) => {

        const jkood = new Discord.MessageEmbed()
             .setColor('#fff000')
             .addField(`İşte Komutlarım!`, `
             ${prefix}antiraid aç** Spam ve DDOS saldırılarını önler.
             ${prefix}capsengel aç** Sunucuda Capslock ile Yazılmasını önler.
             ${prefix}emojikoruma aç** Başka bir sunucunun emojileri kullanmasına engel olur
             ${prefix}everengel aç** Yetkili dışında @everyone kullanılamaz.
             ${prefix}kanalkoruma aç** Kanalların silinmesini önler.
             ${prefix}küfürengel aç** Sunucuda küfürlü kelimelerini kullanılmasına engel olur.
             ${prefix}modlog #kanal** Gelen - Giden kanalı belirler.
             ${prefix}reklamengel aç** Reklam atılmasına engel olur.
             ${prefix}rolkoruma aç** Rollerin silinmesini önler.
             ${prefix}sohbet-aç**
             ${prefix}sohbet-kapat**
             ${prefix}sil-üye @üye miktar**
             ${prefix}sil miktar**
             ${prefix}yavaşmod süre**
             ${prefix}ban @üye sebep**
             ${prefix}kick @üye sebep**         
             `)
             .setFooter(`${message.author.username} Tarafından istendi.`, message.author.avatarURL())
            
        return message.channel.send(jkood);
}

exports.conf = {
	enabled : true,
	guildOnly : false,
	aliases : ['help'],
	permLevel : 0
}
exports.help = {
	name : 'yardım',
	description : 'Komut kategorilerini atar',
	usage : '!yardım'
}
//DÜZENLENECEK