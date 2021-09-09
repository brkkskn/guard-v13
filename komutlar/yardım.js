const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = `**${ayarlar.prefix}`

exports.run = async(client, message, args) => {

        const jkood = new Discord.MessageEmbed()
             .setColor('#fff000')
             .setAuthor(`Yardım Komutları`, client.user.avatarURL())         
             .addField(``,`
             ${prefix}antiraid aç** Spam ve DDOS saldırılarını önler.
             ${prefix}capsengel aç** Sunucuda Capslock ile Yazılmasını önler.
             ${prefix}emojikoruma aç** Başka bir sunucunun emojileri kullanmasına engel olur
             ${prefix}everengel aç** Yetkili dışında @everyone kullanılamaz.
             ${prefix}kanalkoruma aç** Kanalların silinmesini önler.
             ${prefix}küfürengel aç** Sunucuda küfürlü kelimelerini kullanılmasına engel olur.
             ${prefix}modlog #kanal** Gelen - Giden kanalı belirler.
             ${prefix}reklamengel aç** Reklam atılmasına engel olur.
             ${prefix}rolkoruma aç** Rollerin silinmesini önler.
             ${prefix}sohbet-aç** Belirlediğiniz kanalın sohbetini açar.
             ${prefix}sohbet-kapat** Belirledğiniz kanalın sohbetini kapatır.
             ${prefix}sil-üye @üye miktar** Belirli miktarda üyenin mesajlarını siler.
             ${prefix}sil miktar** Sohbetteki mesajları siler.
             ${prefix}yavaşmod süre** Yavaşmod.
             ${prefix}ban @üye sebep** Üyeyi banlar.
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