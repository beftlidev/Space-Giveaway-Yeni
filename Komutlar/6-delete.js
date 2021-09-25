const Discord = require("discord.js")
const ms = require("ms")

const path = require("path")

exports.run = async (client, message, args) => {

           if(!message.member.permissions.has('MANAGE_MESSAGES')) {

    const embed = new Discord.MessageEmbed()

      .setDescription(`<:carpi:855750448711467058> **Ne yazık ki bu komutu kullanmaya yetkin yok.**`)

    message.channel.send(embed);

    return;

  }

    if (!args[0]) {

      return message.channel.send(

        new Discord.MessageEmbed()



          .setColor("RED")

          .setDescription(

            "<:codesty_support:844468556430704640> Lütfen silmemi istediğiniz bir çekiliş ID belirtin!" 

           ) 

          .setTimestamp()

      );

    }

        client.giveawaysManager.delete(args[0]).then(() => {

            message.channel.send(':tada: Başarılı! Çekiliş silindi!');

        }).catch((err) => {

            message.channel.send('<:carpi:855750448711467058> ' + args[0] + ', ID sinde bir çekiliş bulunamadı!');

        });

    }


exports.conf = {

aliases: [] 

}

exports.help = {

name: "çekiliş-sil" 

} 