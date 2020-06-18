const Discord = require("discord.js"),
  db = require("quick.db");

module.exports.run = async (client, message, args) => {
  let kontrol = await db.fetch(`dil_${message.guild.id}`);
  if (kontrol == null) {
    kontrol = "EN_us";
  }
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "g!";
  if (kontrol == "TR_tr") {
    const embed = new Discord.RichEmbed()
      .setDescription(
        `Bot sürümü; **v0.1**, Prefix: **${prefix}**, Dil: **${kontrol}**\nOy vermek için; [Tıkla!](https://top.gg/bot/665232633529368576/vote)`
      )
      .addField(
        `Bot`,
        `\`yardım\`, \`dil\`, \`bot-bilgi\`, \`ayarlar\`, \`reboot\`, \`prefix\`, \`prefix-sıfırla\``
      )
      .addField(
        `Güvenlik Sistemi`,
        `\`güvenlik\`, \`güvenlik-sıfırla\`, \`güvenlik-verilecek-rol\`, \`güvenlik-verilecek-rol-sıfırla\`, \`güvenlik-alınacak-rol\`, \`güvenlik-alınacak-rol-sıfırla\`, \`güvenlik-sahte-rol\`, \`güvenlik-sahte-rol-sıfırla\``
      )
      .addField(
        `Ototag Sistemi`,
        `\`ototag\`, \`ototag-sıfırla\`, \`ototag-isim\`, \`ototag-isim-sıfırla\``
      )
      .addField(
        `Rol Koruma`,
        `\`rol-koruma\`, \`rol-koruma-sıfırla\`, \`rol-koruma-rol\`, \`rol-koruma-rol-sıfırla\`, \`rol-limit\`, \`rol-limit-sıfırla\``
      )
      .addField(`Kanal Koruma`, `\`kanal-koruma\`, \`kanal-koruma-sıfırla\``)

      .addField(
        `Ban Koruma`,
        `\`ban-koruma\`, \`ban-koruma-sıfırla\`, \`ban-limit\`, \`ban-limit-rol\`, \`ban-limit-sıfırla\`, \`ban-limit-rol-sıfırla\``
      )
      .addField(
        `Yedekleme`,
        `\`yedek\`, \`yedek al\`, \`yedek sil\`, \`yedek bilgi\`, \`yedek yükle\`, \`yedek temizle\``
      )
      .setColor("BLACK")
      .setFooter(client.user.username, client.user.avatarURL);
    message.channel.send(embed);
  } else {
    const embed = new Discord.RichEmbed()
      .setDescription(
        `Bot Version; **v0.1**, Prefix: **${prefix}**, Language: **${kontrol}**\nVote to bot; [Click!](Https://top.gg/bot/665232633529368576/vote)`
      )
      .addField(
        `Bot`,
        `\`help\`, \`language\`, \`bot-bilgi\`, \`settings\`, \`reboot\`, \`prefix\`, \`prefix-reset\``
      )
      .addField(
        `Güvenlik Sistemi`,
        `\`Güvenlik\`, \`Güvenlik-reset\`, \`Güvenlik-add-role\`, \`Güvenlik-add-role-reset\`, \`Güvenlik-sil-rolü\`, \`Güvenlik-add-role-reset\`, \`security-fake-role\`, \`security-fake-role-reset\``
      )
      .addField(
        `Autotag System`,
        `\`autotag\`, \`autotag-reset\`, \`autotag-name\`, \`autotag-name-reset\``
      )
      .addField(
        `Role Protection`,
        `\`role-Koruması\`, \`role-Koruması-reset\`, \`role-Koruması-role\`, \`role-Koruması-role-reset\`, \`role-limit\`, \`role-limit-reset\``
      )
      .addField(
        `Channel Koruması`,
        `\`channel-Koruması\`, \`channel-Koruması-reset\``
      )
      .addField(
        `Ban Koruması`,
        `\`ban-Koruması\`, \`ban-koruma-sıfırla\`, \`ban-limit\`, \`ban-limit-rol\`, \`ban-limit-sıfırla\`, \`ban-limit-rol-sıfırla\``
      )
      .addField(
        `Backups`,
        `\`backup\`, \`backup create\`, \`backup delete\`, \`backup info\`, \`backup load\`, \`backup purge\``
      )
      .setColor("BLACK")
      .setFooter(client.user.username, client.user.avatarURL);
    message.channel.send(embed);
    return;
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["y", "help", "h"],
  permLevel: 0
};

exports.help = {
  name: "yardım",
  description: "yardım",
  usage: "yardım"
};
