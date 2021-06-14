const Discord = require('discord.js');

exports.run = async (client, message, args) => {
const emoji1 = client.emojis.cache.get("722641897419571260");
const kayityetkili = message.guild.roles.cache.find(r => r.id === "818149322700750879") // Kayıt Yetkili
const verbuse = message.guild.roles.cache.find(r => r.id === "818149328622845994") //VERİLECEK ROL ID
const verbusem = message.guild.roles.cache.find(r => r.id === "825176344392237076") //VERİLECEK ROL ID
const albuse = message.guild.roles.cache.find(r => r.id === "818149352001896491") //ALINACAK ROL ID
//let albusem = '740959861520597073' //ALINACAK ROL ID l Kullanmicaksanız silin
let isimön = args[1] //DEĞİŞTİRİLECEK İSMİN ÖNÜNE GELEN
let yas = args[2] 
//if (!isim) return message.channel.send(`*İsmini girmelisin!**`)
//TİK İSMİNDE BİR EMOJİNİZ OLMASI LAZIM (Hareketli Olsa Daha Güzel Gözükür)

 // if(!message.member.roles.has(kayityetkili)) 
  if(!message.member.hasPermission("ADMINISTRATOR"))
  return message.channel.send(`Bu komutu kullanabilmek için \`Kayıt\` yetkisine sahip olmasınız.`);
  let member = message.mentions.members.first()
  let isim = args.slice(1).join(" ")
  if (!member) return message.channel.send('**.erkek <KullanıcıAdı> <Isim> <Yaş> Şeklinde Olmalıdır!**')
  if (!isim) return message.channel.send('**.erkek <KullanıcıAdı> <Isim> <Yaş> Şeklinde Olmalıdır!**')
  if (!yas) return message.channel.send('**.erkek <KullanıcıAdı> <Isim> <Yaş> Şeklinde Olmalıdır!**')
  if(yas<15) return message.reply("**En az 15 yaşını doldurmuş olması gerekli.**")
  if(yas>50) return message.reply("**Emekli olcak yaştasın ne işin var burda orospu evladı.**")

  setTimeout(function(){
  member.setNickname(`⊀ ${isimön} | ${yas} `)
  },2000)
  setTimeout(function(){
  member.roles.add(verbuse)
  member.roles.add(verbusem)
  },3000)
  setTimeout(function(){
  member.roles.remove(albuse)
  //member.addRole(albusem)
  },4000)
 //const sonsuz = client.emojis.get (`741987392856260678`) 
// const emoji = client.emojis.find(emoji => emoji.name === "eyes");
 let embed = new Discord.MessageEmbed()  

  .setColor('RANDOM')
  .setThumbnail(member.user.avatarURL())
  .setDescription(`${emoji1} ‍  ‍  ‍ **Revers Kayıt Sistemi** ‍  ‍  ‍ ${emoji1} ‍ 

**Kayıt edilen kullanıcı :** ${isimön} ${yas}      

**Kayıt işleminde verilen rol :** ${verbuse} **-** ${verbusem}

**Kayıt işleminde alınan rol :** ${albuse}
`)
  .setFooter(`Komutu kullanan yetkili : ${message.author.username}`)
  .setImage("https://cdn.discordapp.com/attachments/522576410083328010/838854838074474497/a.gif")
message.channel.send(embed)
//message.react(emoji)
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['erkek','bay','e'],
  permLevel: 0
}
exports.help = {
  name: 'erkek',
  description: "Erkek kullanıcıları kayıt etme komutu.",
  usage: '!erkek <önisim> <isim> <yaş>'
}