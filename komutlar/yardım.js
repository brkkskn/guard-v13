const Discord = require("discord.js"),
  db = require("quick.db");

module.exports.run = async (client, message, args) => {
  let kontrol = await db.fetch(`dil_${message.guild.id}`);
if(kontrol == null){
  kontrol = "EN_us"
}
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "!";
  if (kontrol == "TR_tr") {
    const embed = new Discord.RichEmbed()
      .setDescription(
        `Bot sürümü; **v0.1**, Prefix: **${prefix}**, Dil: **${kontrol}**`
      )
      .addField(`Bot`, `\`yardım\`, \`dil\`, \`bot-bilgi\``)
      .addField(`Koruma Sistemleri`, `\`rol-koruma\`, \`rol-koruma-sıfırla\`, \`kanal-koruma\`, \`kanal-koruma-sıfırla\`, \`ban-koruma\`, \`ban-koruma-sıfırla\``)
      .setColor("BLACK")
      .setFooter(client.user.username, client.user.avatarURL);
    message.channel.send(embed);
  } else {
    const embed = new Discord.RichEmbed()
      .setDescription(
        `Bot Version; **v0.1**, Prefix: **${prefix}**, Language: **${kontrol}**`
      )
      .addField(`Bot`, `\`help\`, \`language\`, \`bot-info\``)
      .addField(
        `Protection Systems`,
        `\`role-protection\`, \`role-protection-reset\`, \`channel-protection\`, \`channel-protection-reset\`, \`ban-protection\`, \`ban-protection-reset\``
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
