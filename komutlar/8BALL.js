const db = require("quick.db");
const Discord = require("discord.js");
const client = new Discord.Client();
const DBL = require("dblapi.js");
const dbl = new DBL(
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MjQzNjIyMzMxNDU1ODk3NiIsImJvdCI6dHJ1ZSwiaWF0IjoxNTc2MzIwMDMxfQ.fbbZYB4SuE42yGFuvSASSbiYt6XTYi_VcmmyghLo7Fw",
  client
);
exports.run = async (client, message, args) => {
  dbl.hasVoted(message.author.id).then(async voted => {
    if (voted) {
      const cevaplar = [
        "Evet",
        "Hayır",
        "Belki",
        "Olabilir",
        "Daha sonra tekrar sor",
        "İmkansız"
      ];
      let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "!";

      var soru = args.join(" ");

      var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)];

      if (!soru) {
        const embed = new Discord.RichEmbed()
          .setColor("BLACK")
          .setDescription(
            `Lütfen bir soru belirtiniz!\nÖrnek: ${prefix}8ball Yakışıklı mıyım?`
          );
        message.channel.send(embed);
      } else {
        const embed = new Discord.RichEmbed()
          .setColor("BLACK")
          .addField(`Soru:`, soru)
          .addField(`Cevap:`, cevap);

        message.channel.send(embed);
      }
    } else {
      const embed = new Discord.RichEmbed()
        .setColor("BLACK")
        .setDescription(
          `Bu komutu kullanabilmeniz için bota oy vermeniz gerekmektedir!\nBota Oy Ver: [Tıkla](https://top.gg/bot/642436223314558976/vote)`
        );
      message.channel.send(embed);
      return;
    }
  });
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: "8ball",
  description: "8ball",
  usage: "8ball"
};