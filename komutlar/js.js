const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = (client, message, params) => {
  const DBL = require("dblapi.js");
  const dbl = new DBL(
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOTk3MDUyMjc1NDU4MDQ4MiIsImJvdCI6dHJ1ZSwiaWF0IjoxNTcwMjY4MjIwfQ.C7_N2M5vy1-sc5htQRclYr8IBDR8K_xSgZ-eBlNFms4",
    client
  );

  dbl.hasVoted(message.author.id).then(voted => {
    if (voted) {
      var role = message.guild.roles.find(
        role => role.name === "JavaScript"
      ); //role.id bölümünü role.name yazarak id yerine ad girebilirsiniz
      if (message.member.roles.has(role.name))
        return message.channel.send("Zaten rolü almışsın!"); //role.name yaparsanız burada ki role.id yazısınıda düzeltin
      message.member.addRole(role);
      message.channel.send(`JavaScript rolü başarıyla verildi!`);
      return;
    } else {
      message.channel.send(
        "Bu komutu kullanabilmek için 12 saatte bir oy vermelisiniz!\nSite: https://top.gg/bot/619970522754580482/vote\nNot: Eğer oy verdiyseniz sisteme düşmesini bekleyiniz."
      );
    }
  });
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["discord.js", "javascript"],
  permLevel: 0
};

exports.help = {
  name: "js",
  description: "JS",
  usage: "js"
};
