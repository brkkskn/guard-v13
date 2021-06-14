const Discord = require("discord.js")
exports.run = async(client, message, args, ayar, emoji) => {
	let uye = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
  if (!uye) return message.channel.send(new Discord.MessageEmbed().setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true})).setColor(0x00bfff).setDescription("Ses Kanalına Çekilecek Kullanıcıyı Belirtin")).then(x => x.delete({timeout: 5000}));
  if (!message.member.voice.channel || !uye.voice.channel || message.member.voice.channelID == uye.voice.channelID) return message.channel.send(new Discord.MessageEmbed().setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true})).setColor(0x00bfff).setDescription("Belirtilen Kullanıcının ve Kendinin Ses Kanalında Olduğundan Emin Ol")).then(x => x.delete({timeout: 5000}));
  if (message.member.hasPermission("ADMINISTRATOR")) {
    await uye.voice.setChannel(message.member.voice.channelID);
    message.react(client.emojiler.onay).catch();
  } else {
    const reactionFilter = (reaction, user) => {
      return ['✅'].includes(reaction.emoji.name) && user.id === uye.id;
    };
    message.channel.send(new Discord.MessageEmbed().setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true})).setColor(0x00bfff).setDescription(`${message.author} Seni Ses Kanalına Çekmek İstiyor, Kabul Ediyormusun?`)).then(async msj => {
      await msj.react('✅');
      msj.awaitReactions(reactionFilter, {max: 1, time: 15000, error: ['time']}).then(c => {
        let cevap = c.first();
	if (cevap) {
	  uye.voice.setChannel(message.member.voice.channelID);
          msj.delete();
          message.react(client.emojiler.onay).catch();
	};
      });
    });
  };
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    permLevel: 0,
    aliases: ["çek","cek"]
    }
    
    exports.help = {
    name: 'Çek'
    }
