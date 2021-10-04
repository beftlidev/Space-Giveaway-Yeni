const Discord = require('discord.js');
const {MessageButton} = require("discord-buttons") 
exports.run = async(client, message, args) => {

     if(!message.member.permissions.has('MANAGE_MESSAGES')) {
    const embed = new Discord.MessageEmbed()
      .setDescription(`<:carpi:855750448711467058> **Ne yazık ki bu komutu kullanmaya yetkin yok.**`)
      .setColor("RED") 
    message.channel.send(embed);
    return;
  }

let oylama = args.join(' ');
const embed = new Discord.MessageEmbed() 
.setTitle("Oylama Başladı! :tada:")
.setDescription(oylama) 
.setColor("BLURPLE") 
.setTimestamp() 
const evet = new MessageButton() 
.setStyle("green")
.setLabel("(0) Evet") 
.setEmoji("881423053245009990") 
.setID("oylamaevet") 
const hayır = new MessageButton() 
.setStyle("red")
.setLabel("(0) Hayır") 
.setEmoji("881423084651962439") 
.setID("oylamahayır") 
message.channel.send({embed: embed, 
buttons: [evet, hayır]}) 

};
exports.conf = {
aliases: []
};
exports.help = {
name: "pre-oylama"
};



if(button.id == "oylamaevet") {
await button.defer()
        if (db.fetch(`oylama_katildi_evet_${button.clicker.user.id}_${button.guild.id}_${button.message.id})) {
            await db.delete(`oylama_katildi_evet_${button.clicker.user.id}_${button.guild.id}_${button.message.id}) 
            await db.subtract(`oylama_katilim_evet_${button.guild.id}_${button.message.id}`, 1)
            let evetdb = db.fetch(`oylama_katilim_evet_${button.guild.id}_${button.message.id}`)
            let hayırdb = db.fetch(`oylama_katilim_hayır_${button.guild.id}_${button.message.id}`)

const evet = new MessageButton() 
.setStyle("green")
.setLabel(`(${evetdb || 0}) Evet`) 
.setEmoji("881423053245009990") 
.setID("oylamaevet") 
const hayır = new MessageButton() 
.setStyle("red")
.setLabel(`(${hayırdb || 0}) Hayır`) 
.setEmoji("881423084651962439") 
.setID("oylamahayır") 

const user = new Discord.MessageEmbed() 
.setDescription("<:blurplecheck:881423053245009990> Oylamadan Evet tepkini geri çektin!") 
.setColor("GREEN") 

button.message.edit({buttons: [evet, hayır]}) 
button.clicker.user.send(user) 
        } else {
            await db.set(`oylama_katildi_evet_${button.clicker.user.id}_${button.guild.id}_${button.message.id}) 
            await db.add(`oylama_katilim_evet_${button.guild.id}_${button.message.id}`, 1)
            let evetdb1 = db.fetch(`oylama_katilim_evet_${button.guild.id}_${button.message.id}`)
            let hayırdb1 = db.fetch(`oylama_katilim_hayır_${button.guild.id}_${button.message.id}`)

const evet1 = new MessageButton() 
.setStyle("green")
.setLabel(`(${evetdb1 || 0}) Evet`) 
.setEmoji("881423053245009990") 
.setID("oylamaevet") 
const hayır1 = new MessageButton() 
.setStyle("red")
.setLabel(`(${hayırdb1 || 0}) Hayır`) 
.setEmoji("881423084651962439") 
.setID("oylamahayır") 

const user1 = new Discord.MessageEmbed() 
.setDescription("<:blurplecheck:881423053245009990> Oylamaya Evet tepkisi verdin!") 
.setColor("GREEN") 

button.message.edit({buttons: [evet1, hayır1]}) 
button.clicker.user.send(user1)
        }
}

if(button.id == "oylamahayır") {
await button.defer()
        if (db.fetch(`oylama_katildi_hayır_${button.clicker.user.id}_${button.guild.id}_${button.message.id})) {
            await db.delete(`oylama_katildi_hayır_${button.clicker.user.id}_${button.guild.id}_${button.message.id}) 
            await db.subtract(`oylama_katilim_hayır_${button.guild.id}_${button.message.id}`, 1)
            let evetdb = db.fetch(`oylama_katilim_evet_${button.guild.id}_${button.message.id}`)
            let hayırdb = db.fetch(`oylama_katilim_hayır_${button.guild.id}_${button.message.id}`)

const evet = new MessageButton() 
.setStyle("green")
.setLabel(`(${evetdb || 0}) Evet`) 
.setEmoji("881423053245009990") 
.setID("oylamaevet") 
const hayır = new MessageButton() 
.setStyle("red")
.setLabel(`(${hayırdb || 0}) Hayır`) 
.setEmoji("881423084651962439") 
.setID("oylamahayır") 

const user = new Discord.MessageEmbed() 
.setDescription("<:blurplecheck:881423053245009990> Oylamadan Hayır tepkini geri çektin!") 
.setColor("RED") 

button.message.edit({buttons: [evet, hayır]}) 
button.clicker.user.send(user) 
        } else {
            await db.set(`oylama_katildi_hayır_${button.clicker.user.id}_${button.guild.id}_${button.message.id}) 
            await db.add(`oylama_katilim_hayır_${button.guild.id}_${button.message.id}`, 1)
            let evetdb1 = db.fetch(`oylama_katilim_evet_${button.guild.id}_${button.message.id}`)
            let hayırdb1 = db.fetch(`oylama_katilim_hayır_${button.guild.id}_${button.message.id}`)

const evet1 = new MessageButton() 
.setStyle("green")
.setLabel(`(${evetdb1 || 0}) Evet`) 
.setEmoji("881423053245009990") 
.setID("oylamaevet") 
const hayır1 = new MessageButton() 
.setStyle("red")
.setLabel(`(${hayırdb1 || 0}) Hayır`) 
.setEmoji("881423084651962439") 
.setID("oylamahayır") 

const user = new Discord.MessageEmbed() 
.setDescription("<:blurplecheck:881423053245009990> Oylamaya Hayır tepkisini verdin!") 
.setColor("RED") 

button.message.edit({buttons: [evet1, hayır1]}) 
        }
} 
