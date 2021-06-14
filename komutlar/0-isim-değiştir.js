const Discord = require('discord.js')

exports.run = async(client, message, args) => {
if (!message.member.hasPermission('MANAGE_NICKNAMES')) return message.channel.send(new Discord.MessageEmbed().setColor("RANDOM").setDescription(`Bu Komutu Kullanabilmek İçin **Kullanıcı Adlarını Yönet** Yetkisine Sahip Olmalısın.`));
let reverskullanıcı = message.mentions.members.first()
if (!reverskullanıcı) return message.channel.send(new Discord.MessageEmbed().setColor("RANDOM").addField("Hatalı Kullanım",`Lütfen Bir Kullanıcı Etiketleyiniz`))
let reversisim = args.slice(1).join(' ')
if (!reverskullanıcı) return message.channel.send(new Discord.MessageEmbed().setColor("RANDOM").addField("Hatalı Kullanım",`Lütfen Bir İsim Yazınız`))
reverskullanıcı.setNickname(reversisim)
message.channel.send(new Discord.MessageEmbed().setColor("RANDOM").addField("İşlem Başarılı",`${reverskullanıcı} İsimli Kullanıcının Yeni İsmi **${reversisim}\** Olarak Ayarlandı!`))
}

exports.conf = {
  name: true,
  guildonly: false,
  aliases: ['isim', 'i-değiştir', 'isimdeğiştir', 'değiştir-isim'],
  permlevel: 0
}
exports.help = {
  name: 'İsim',
  usage: 'isim @kullanıcı <İsim>',
  description: 'Kullanıcının İsmini Düzenler'
}
