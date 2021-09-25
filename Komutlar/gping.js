const Discord = require('discord.js');

const db = require("croxydb")

exports.run = async(client, message, args) => {

let pingmesaj;

let pingdurum;

let mesaj;

  let mesajdurum;

if(Date.now() - message.createdAt < 100){

mesaj = "<:net1:856407924415266826>"

mesajdurum = "#ff0000"

}

if(Date.now() - message.createdAt < 60){

mesaj = "<:net2:856407961177423872>"

mesajdurum = "#ffff00"

}

if(Date.now() - message.createdAt < 30){

mesaj = "<:net3:856407941682167829>"

mesajdurum = "#66ff00"

}

if(Date.now() - message.createdAt > 100){

mesaj = "<:net1:856407924415266826>"

mesajdurum = "#ff0000"

}

if(Date.now() - message.createdAt > 60){

mesaj = "<:net2:856407961177423872>"

mesajdurum = "#ffff00"

}//ottamancode

if(Date.now() - message.createdAt > 150){

mesaj = "<:net1:856407924415266826>"

mesajdurum = "#ff0000"

}

if(Date.now() - message.createdAt > 250){

mesaj = "<:net1:856407924415266826>"

mesajdurum = "#ff0000"

}

if(Date.now() - message.createdAt > 500){

mesaj = "<:unlem:856407823436087336>"

mesajdurum = "#66ff00"

}

if(Date.now() - message.createdAt > 1000){

mesaj = "<:unlem:856407823436087336>"

mesajdurum = "#66ff00"

}

if(client.ws.ping < 100){

pingmesaj = "<:net1:856407924415266826>"

pingdurum = "#ff0000"

}

if(client.ws.ping < 60){

pingmesaj = "<:net3:856407941682167829>"

pingdurum = "#ffff00"

}

if(client.ws.ping < 30){

pingmesaj = "<:net3:856407941682167829>"

pingdurum = "#66ff00"

}

if(client.ws.ping > 100){

pingmesaj = "<:net1:856407924415266826>"

pingdurum = "#ff0000"

}

if(client.ws.ping > 60){

pingmesaj = "<:net2:856407961177423872>"

pingdurum = "#ffff00"

}

if(client.ws.ping > 150){

pingmesaj = "<:net1:856407924415266826>"

pingdurum = "#ff0000"

}

if(client.ws.ping > 250){

pingmesaj = "<:net1:856407924415266826>"

pingdurum = "#ff0000"

}

if(client.ws.ping > 500){

pingmesaj = "<:unlem:856407823436087336>"

pingdurum = "#66ff00"

}

if(client.ws.ping > 1000){

pingmesaj = "<:unlem:856407823436087336>"

pingdurum = "#66ff00"

}

const embed = new Discord.MessageEmbed()

.setTitle('Ping')

.setDescription(`Gecikme: ${client.ws.ping+ "ms"} ${pingmesaj}\n\nMesaj Gecikmesi: ${(Date.now() - message.createdAt)+ "ms"} ${mesaj}`)

.setColor(pingdurum)

.setFooter("Space Giveaway", client.user.displayAvatarURL())

.setImage("https://cdn.discordapp.com/attachments/843458021040455740/879340898385821736/PicsArt_08-23-02.40.37.jpg")

message.channel.send(embed)

}
  

exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: ['botping','bot-ping'],

  permLevel: 0

};

exports.help = {

  name: 'ping',

};
