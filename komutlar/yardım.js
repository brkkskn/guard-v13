const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = async(client, message, args) => {

        const yardim = new Discord.MessageEmbed()

             .setColor('#fff000')
             .setAuthor(`Yardım Komutları`, client.user.avatarURL()) 
             .setThumbnail(client.user.avatarURL())
             .addField(`Komutlar`, `**${ayarlar.prefix}ban** İstediğiniz Kullanıcıyı Banlamanızı Sağlar.\n**${ayarlar.prefix}kick** Kullanıcıyı Kicklemenizi Sağlar.\n**${ayarlar.prefix}ever-engel "aç-kapat"** Everyone Ve Here Açar/kapatır.\n**${ayarlar.prefix}jail-kanal** Jail Kanalı Ayarlar.\n**${ayarlar.prefix}jail-rol** Jail Rolü Ayarlar.\n**${ayarlar.prefix}jail-yetkilisi** Jail Yetkilisi Ayarlar.\n**${ayarlar.prefix}jail** Kullanıcıyı Jaile Atmayı Sağlar.\n**${ayarlar.prefix}link-engel** Link Engellemeyi Açar.\n**${ayarlar.prefix}mod-log-ayarla** Mod Log Kanalı Belirler.\n**${ayarlar.prefix}reklam-engel** Reklam Engellemeyi Açar.\n**${ayarlar.prefix}reklamtaraması** Reklam Taraması Yapar.\n**${ayarlar.prefix}koruma** Rol Korumayı Ayarlar.\n**${ayarlar.prefix}yavaş-mod** Yazı Yazma Süresini Ayarlar.\n**${ayarlar.prefix}temizle** Belirtilen Sayı Kadar Mesaj Siler.\n**${ayarlar.prefix}uyar** İstediğiniz Kişiyi Uyarır.\n**${ayarlar.prefix}uyarı-kaldır** Kişinin Uyarısını Kaldırır.\n**${ayarlar.prefix}kanal-koruma** Kanal Korumayı Aktif Hale Getirir.\n**${ayarlar.prefix}kanal-koruma-sıfırla** Kanal Korumayı Kapatır.\n**${ayarlar.prefix}mute** belirttiğiniz kişiyi süreli olarak susturur.  `) // bunlar boş kalırsa hata verir
             .addField(`Linkler ->`, `[Revers Discord](https://discord.gg/KnkJ26Fg)`) // bunlar boş kalırsa hata verir
             .setFooter(`Menüyü ${message.author.username} tarafından istendi.`, message.author.avatarURL())
            
        return message.channel.send(yardim);
}

exports.conf = {
	enabled : true,
	guildOnly : false,
	aliases : ['help','yardim'],
	permLevel : 0
}

exports.help = {
	name : 'yardım',
	description : 'Komut kategorilerini atar',
	usage : 'yardım'
}