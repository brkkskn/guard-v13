const Discord = require("discord.js"),
  db = require("quick.db");

module.exports.run = async (client, message, args) => {
  let kontrol = await db.fetch(`dil_${message.guild.id}`);
  if (kontrol == "TR_tr") {
    const DBL = require("dblapi.js");
    const dbl = new DBL(
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NTIzMjYzMzUyOTM2ODU3NiIsImJvdCI6dHJ1ZSwiaWF0IjoxNTgxMDA5ODg0fQ.ZrLr1fZZ6m6iBmD_66N4rqeQ9fmtrV7pnLoc8IfVe_c",
      client
    );
    dbl.hasVoted(message.author.id).then(voted => {
      if (voted) {
        var embed = new Discord.RichEmbed()
          .setTitle("**Merhaba Sahibim,**")
          .setDescription("Onaylamak için emojiye bas!")
          .setColor("BLACK");
        message.channel.send(embed).then(async function(sentEmbed) {
          const emojiArray = ["✅"];
          const filter = (reaction, user) =>
            emojiArray.includes(reaction.emoji.name) &&
            user.id === message.author.id;
          await sentEmbed.react(emojiArray[0]).catch(function() {});
          var reactions = sentEmbed.createReactionCollector(filter, {
            time: 30000
          });
          reactions.on("end", () => sentEmbed.edit("İşlemi iptal ettim!"));
          reactions.on("collect", async function(reaction) {
            if (reaction.emoji.name === "✅") {
              sentEmbed.delete();
              var embed = new Discord.RichEmbed()
                .setTitle("Al bak şuan yaptın")
                .setImage(
                  "https://media.giphy.com/media/WTjnWYENpLxS8JQ5rz/giphy.gif"
                )
                .setColor("RED");
              message.channel.send(embed);
            }
          });
        });
      } else {
        var embed = new Discord.RichEmbed()
          .setTitle("**Merhaba Sahibim,**")
          .setDescription(
            
          )
          .setColor("BLACK");
        message.channel.send(embed);
      }
    });
  } else {
    const DBL = require("dblapi.js");
    const dbl = new DBL(
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NTIzMjYzMzUyOTM2ODU3NiIsImJvdCI6dHJ1ZSwiaWF0IjoxNTgxMDA5ODg0fQ.ZrLr1fZZ6m6iBmD_66N4rqeQ9fmtrV7pnLoc8IfVe_c",
      client
    );
    dbl.hasVoted(message.author.id).then(voted => {
      if (voted) {
        var embed = new Discord.RichEmbed()
          .setTitle("**Hello My Owner,**")
          .setDescription("Hit the emoji to confirm!")
          .setColor("BLACK");
        message.channel.send(embed).then(async function(sentEmbed) {
          const emojiArray = ["✅"];
          const filter = (reaction, user) =>
            emojiArray.includes(reaction.emoji.name) &&
            user.id === message.author.id;
          await sentEmbed.react(emojiArray[0]).catch(function() {});
          var reactions = sentEmbed.createReactionCollector(filter, {
            time: 30000
          });
          reactions.on("end", () => sentEmbed.edit("I canceled the transaction!"));
          reactions.on("collect", async function(reaction) {
            if (reaction.emoji.name === "✅") {
              sentEmbed.delete();
              var embed = new Discord.RichEmbed()
                .setTitle("Take it, you did it now")
                .setImage(
                  "https://media.giphy.com/media/WTjnWYENpLxS8JQ5rz/giphy.gif"
                )
                .setColor("RED");
              message.channel.send(embed);
            }
          });
        });
      } else {
        var embed = new Discord.RichEmbed()
          .setTitle("**Hello My Owner,**")
          .setDescription(
            "Ready to restart me, can you give me a [vote](https://top.gg/bot/665232633529368576/vote)?"
          )
          .setColor("BLACK");
        message.channel.send(embed);
      }
    });
  }
};
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["rb"],
  permLevel: 0
};

module.exports.help = {
  name: "Reboot",
  description: "reboot",
  usage: "reboot"
};
