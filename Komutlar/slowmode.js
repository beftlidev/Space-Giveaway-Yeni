const Discord = require('discord.js');

exports.run = async(client, message, args) => {
  
     if(!message.member.permissions.has('MANAGE_MESSAGES')) {
    const embed = new Discord.MessageEmbed()
      .setDescription(`**Ne yazık ki bu komutu kullanmaya yetkin yok. <:bakimda:798582408642560110>**`)
    message.channel.send(embed);
    return;
  }

if (message.channel.type !== "text") return;

const limit = args[0] ? args[0] : 0;

  if(!limit) {

              var embed = new Discord.MessageEmbed()

                .setDescription(`<:bakimda:798582408642560110> Doğru kullanım: \** g.yavaş-mod [0/120]\**`)

                .setColor("RANDOM")

                .setTimestamp()

            message.channel.send({embed})

            return

          }

if (limit > 120) {

    return message.channel.send(new Discord.MessageEmbed().setDescription("<:bakimda:798582408642560110> Yavaş mod maksimum **120** saniye olarak ayarlayabilirsin").setColor("#36393F"));

}

    message.channel.send(new Discord.MessageEmbed().setDescription(`Yazma süre limiti **${limit}** saniye olarak ayarlandı <:calisiyor:798582407393312808>`).setColor("RANDOM"));

var request = require('request');

request({

    url: `https://discordapp.com/api/v7/channels/${message.channel.id}`,

    method: "PATCH",

    json: {

        rate_limit_per_user: limit

    },

    headers: {

        "Authorization": `Bot ${client.token}`

    },

})};

  exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: ["slow-mode", "slowmode", "yavas-mod", 'yavasmod', 'yavaşmod'],

  permLevel: 3,

};

exports.help = {

  name: 'yavaş-mod',

  description: 'Sohbete yazma sınır (süre) ekler.',

  usage: 'yavaş-mod [1/120]',

};