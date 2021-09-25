const Discord = require("discord.js")

const db = require("croxydb") 

const talkedRecently = new Set();

const cevaplar = [

"0", 

"1", 

"0", 

"0", 

"0", 

"1", 

"0", 

"1",

"0", 

"2",

"0",

];

exports.run = async (client, message, args) => {

var soru = args.join(' ');

var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)];

    if (talkedRecently.has(message.author.id)) {

        const embed = new Discord.MessageEmbed()

        .setColor("RED")

        .setDescription(`<:carpi:855750448711467058>  Bu komutu günde bir kere kullanabilirsin!`)

        message.channel.send(embed);

} else {

db.add(`coin_${message.author.id}`, cevap)

const coin = new Discord.MessageEmbed() 

.setDescription(`<:tik:804253394326913085> ${cevap} Coin kazandın Tebrikler!`) 

.setColor("BLURPLE") 

message.channel.send(coin) 

talkedRecently.add(message.author.id);

setTimeout(() => {

  talkedRecently.delete(message.author.id);

}, 86400000);

}

} 

exports.conf = {

aliases: [] 

}

exports.help = {

name: "günlük-coin" 

} 