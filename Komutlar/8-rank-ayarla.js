const Discord = require('discord.js');

const data = require('croxydb')

const db = require("croxydb") 

exports.run = async (client, message, args) => {

  let blue = new Discord.MessageEmbed().setColor("BLUE");

  let red = new Discord.MessageEmbed().setColor("RED");

  

if(!args[0]) {

    return message.channel.send(

      red.setDescription("<:carpi:855750448711467058> Girebileceğin argümentler: `kırmızı` **|** `sarı` **|** `altın` **|** `yeşil` **|** `mavi` **|** `arka-plan` **|** `sıfırla`")

    );

  } 

if(args[0] == "kırmızı") {

db.set(`rrenk_${message.author.id}`, 'RED')

return message.inlineReply('<:tik:804253394326913085> Rank rengi kırmızı olarak ayarlandı!')

};

if(args[0] == "sarı") {

db.set(`rrenk_${message.author.id}`, 'YELLOW')

return message.inlineReply('<:tik:804253394326913085> Rank rengi sarı olarak ayarlandı!')

};

if(args[0] == "altın") {

db.set(`rrenk_${message.author.id}`, 'GOLD')

return message.inlineReply('<:tik:804253394326913085> Rank rengi altın olarak ayarlandı!')

};

if(args[0] == "yeşil") {

db.set(`rrenk_${message.author.id}`, 'GREEN')

return message.inlineReply('<:tik:804253394326913085> Rank rengi yeşil olarak ayarlandı!')

};

if(args[0] == "mavi") {

db.set(`rrenk_${message.author.id}`, 'BLUE')

return message.inlineReply('<:tik:804253394326913085> Rank rengi mavi olarak ayarlandı!')

};
  if(args[0] == "arka-plan") {

db.set(`rarkaplan_${message.author.id}`, args[1])

return message.inlineReply('<:tik:804253394326913085> Rank arka plan ayarlandı!')

};
  
   if(args[0] == "sıfırla") {
db.delete(`rrenk_${message.author.id}`)
db.delete(`rarkaplan_${message.author.id}`)

return message.inlineReply('<:tik:804253394326913085> Rank ayarların sıfırlandı!')

};

} 



exports.conf = {

aliases: [] 

}

exports.help = {

  name: "rank-ayarla"

};