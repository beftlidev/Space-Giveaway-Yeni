const Discord = require("discord.js")

const {MessageButton} = require("discord-buttons") 

exports.run = async (client, message, args) => {

const embed = new Discord.MessageEmbed() 
.setTitle("NACSSHOST İnternet ve Bilişim Hizmetleri") 
.setDescription(`Yönetim Paneli ile sunucu yönetimi tamamen sizin kontrolünüzde! Otomatik kurulum panelimiz ile vakit kaybı olmadan istediğiniz işlemi yapabilirsiniz.
Oyun Sunucularınızda kesintisiz hizmet ve ping'siz oyun keyfinin tadını çıkartın. Sunucularımız Türkiye Lokasyon olduğu için liste sırasında en yuları çıkarsınız.
`) 

.setColor("PURPLE") 

const b1 = new MessageButton() 

.setStyle("url")

.setLabel("Discord")

.setURL("https://discord.gg/JcRKyykST6")

const b2 = new MessageButton() 

.setStyle("url")

.setLabel("Site")

.setURL("https://www.nacsshost.com")

message.channel.send({ embed: embed, 

buttons: [b1, b2] 

}) 

} 

exports.conf = {

aliases: [] 

}

exports.help = {

name: "sponsor" 

}