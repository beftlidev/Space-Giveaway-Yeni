const Discord = require('discord.js');

const {MessageButton} = require('discord-buttons');

exports.run = async(client, message, args) => {

const embed = new Discord.MessageEmbed() 

.setAuthor(`Merhaba, ${message.author.username}!`, message.author.avatarURL())

.setDescription("Aşağıdaki butonlar tıklayarak yardım menüsünün gönderiliceği yeri seçebilir sin.") 

.setColor("BLURPLE") 

.setFooter("Space Giveaway", client.user.displayAvatarURL())

.setImage("https://cdn.discordapp.com/attachments/843458021040455740/879340898385821736/PicsArt_08-23-02.40.37.jpg")

const b1 = new MessageButton() 

.setStyle("gray")

.setLabel("DM")

.setEmoji("888414495423225866")

.setID("dmyardım")

const b2 = new MessageButton() 

.setStyle("gray")

.setLabel("Kanal")

.setEmoji("888415406937755688")

.setID("kanalyardım")

message.channel.send({embed: embed, 

buttons: [b1, b2] 

}) 

}

exports.conf = {

  aliases: []

}; 

exports.help = {

  name: 'yardım',

};