const Discord = require("discord.js")

exports.run = async (client, message, args) => {

const embed = new Discord.MessageEmbed() 

.setTitle("Sunucu Bilgi") 

.addField("<:codesty_join:844468549417697350> Sunucu İsim", message.guild.name) 

.addField("<:codesty_join:844468549417697350> Sunucu Açıklama", `${message.guild.description || "Yok"}`) 

.addField("<:codesty_join:844468549417697350> Sunucu bölge", message.guild.region) 

.addField("<:codesty_join:844468549417697350> Sunucu toplam üye", message.guild.memberCount) 

.addField("<:codesty_join:844468549417697350> Sunucu ID", message.guild.id) 

.addField("<:codesty_join:844468549417697350> Afk zaman aşımı", message.guild.afkTimeout) 

.addField("<:codesty_join:844468549417697350> Afk kanalı", message.guild.afkChannelID) 

.addField("<:codesty_join:844468549417697350> Sistem kanalı", message.guild.systemChannelID) 

.addField("<:codesty_join:844468549417697350> Doğrulama düzeyi", message.guild.verificationLevel) 

.addField("<:codesty_join:844468549417697350> Kurallar kanalı", `${message.guild.rulesChannelID || "Yok"}`) 
.addField("<:codesty_join:844468549417697350> Toplam kanal", message.guild.channels.cache.size) 
.addField("<:codesty_join:844468549417697350> Toplam kategori", message.guild.channels.cache.filter(a => a.type == "category").size) 
.addField("<:codesty_join:844468549417697350> Toplam Rol", message.guild.roles.cache.size) 
.addField("<:codesty_join:844468549417697350> Sunucu kurucu", `<@${message.guild.ownerID}>`) 
.addField("<:codesty_join:844468549417697350> Toplam boost", message.guild.premiumSubscriptionCount) 
.addField("<:codesty_join:844468549417697350> Boost level", message.guild.premiumTier) 
.addField("<:codesty_join:844468549417697350> Sunucu özel url", `${message.guild.vanityURLCode || "Yok"}`) 

.setThumbnail(`https://cdn.discordapp.com/icons/${message.guild.id}/${message.guild.icon}.webp`) 
.setColor("GREEN") 

message.channel.send(embed) 

}

exports.conf = {

aliases: [] 

}

exports.help = {

name: "sunucu-bilgi" 

}