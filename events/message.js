const ayarlar = require("../ayarlar.json");
const talkedRecently = new Set();
const Discord = require("discord.js") 
const client = new Discord.Client() 
const db = require("croxydb") 

module.exports = async (client, message) => {
  const embed = new Discord.MessageEmbed() 
 .setDescription(`<:carpi:855750448711467058> **|** Lütfen komutları **5** saniye aralıkla kullan!`) 
.setImage("https://s6.gifyu.com/images/giphy-1d09d09a6f479d543.gif") 
 .setColor("RED")
  let prefix;

  

  if (db.has(`prefix_${message.guild.id}`) === true) {

    prefix = db.fetch(`prefix_${message.guild.id}`)

  }

  if (db.has(`prefix_${message.guild.id}`) === false) {

    prefix = ayarlar.prefix

  }


    if (message.author.bot) return;

  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0].slice(prefix.length);

  let params = message.content.split(" ").slice(1);

  let cmd;
  
    if (client.commands.has(command)) {
    cmd = client.commands.get(command);

  } else if (client.aliases.has(command)) {

    cmd = client.commands.get(client.aliases.get(command));

  }
     

    if (talkedRecently.has(message.author.id)) {

    return message.inlineReply(embed) 
           }
 
    if (cmd) {
      
      
      let bakım =  db.fetch('bakım');
  if(message.author.id !== ayarlar.sahip){
  if(bakım){
    const embed = new Discord.MessageEmbed() 
   .setColor("RED") 
   .setTitle("Space Giveaway") 
 .setDescription(`<:codesty_cross:844468546930606100> **Botumuz bakıma alınmıştır!** \n<:codesty_support:844468556430704640> **Bakım Sebebi:** \`${bakım}\``)
    return message.channel.send(embed) 
     }
    } 
      
    talkedRecently.add(message.author.id);
      setTimeout(() => {

      talkedRecently.delete(message.author.id);

    }, 5000);

    cmd.run(client, message, params)

  }
} 