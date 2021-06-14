const Discord = require("discord.js");

exports.run = async(client, message, args) => {
 if (!message.member.roles.cache.has("MUTE YETKİLİSİ ROL İD") && !message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(new Discord.MessageEmbed().setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true})).setColor(0x00bfff).addField("Yetersiz Yetki",`Bu Komutu Kullanmak içi Yeterli Yetkiniz Yok`)).then(m => m.delete({timeout: 7000}));
  
  let uye = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
  let reason = args.splice(1).join(" ");
  if(!uye || !reason) return message.channel.send(new Discord.MessageEmbed().setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true})).setColor(0x00bfff).setDescription("Geçerli bir üye ve sebep belirtmelisin!")).then(x => x.delete({timeout: 5000}));
  if (message.member.roles.highest.position <= uye.roles.highest.position) return message.channel.send(new Discord.MessageEmbed().setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true})).setColor(0x00bfff).setDescription(`Belirttiğin kişi senden üstün veya onunla aynı yetkidesin!`)).then(x => x.delete({timeout: 5000}));
  await uye.roles.add("CHAT MUTE ROL İD").catch();
  message.channel.send(new Discord.MessageEmbed().setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true})).setColor(0x00bfff).setDescription(`${uye} üyesi, ${message.author} tarafından **${reason}** nedeniyle mutelendi!`)).catch();
  client.channels.cache.get("LOG KANALI ROL İD").send(new Discord.MessageEmbed().setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true})).setColor(0x00bfff).setDescription(`${uye} İsimli Kullanıcı Metin Kanallarında Susturuldu.\n\n• Yetkili: <@!${message.author.id}> \`${message.author.id}\` \n• Mutelenen Üye: <@!${uye.id}> \`${uye.id}\` \n\n• Sebep: **${reason}**`)).catch();
};
exports.conf = {
    enabled: true,
    guildOnly: false,
    permLevel: 0,
    aliases: ["mute","cmute","chatmute","chat-mute"]
    }
    
    exports.help = {
  name: "mute",
  aliases: ["mute","chatmute","chat-mute","cmute"],
  usage: "mute [üye] [sebep]",
  description: "Belirtilen üyeyi muteler."
    }
