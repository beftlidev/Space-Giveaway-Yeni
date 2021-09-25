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


          .setColor("RANDOM")

          .setDescription(

            "<:codesty_support:844468556430704640> Lütfen bir çekiliş ID belirtin!" 

            ) 

          .setTimestamp()

      );

    }

        if (!args[1]) {

      return message.channel.send(

        new Discord.MessageEmbed()


          .setColor("RANDOM")

          .setDescription(

            "<:codesty_support:844468556430704640> Lütfen çekilişin süresini girin.\n\n<:kalem:857937104323215360> **Saniye: s \n<:kalem:857937104323215360> Dakika: m \n<:kalem:857937104323215360> Saat: h \n<:kalem:857937104323215360> Gün: d**"

          )

          .setTimestamp()

      );

    }

    if (!args[2]) {

      return message.channel.send(

        new Discord.MessageEmbed()


          .setColor("RANDOM")

          .setDescription(

            "<:codesty_support:844468556430704640> Lütfen yeni kazanacak sayısını belirtin!" 

           )

          .setTimestamp()

      );

    }

    if (!args[3]) {

      return message.channel.send(

        new Discord.MessageEmbed()


          .setColor("RANDOM")

          .setDescription(

            "<:codesty_support:844468556430704640> Lütfen yeni çekiliş ismi belirtin!"

          )

          .setTimestamp()

      );

    }

        client.giveawaysManager.edit(args[0], {

            addTime: ms(args[1]),

            newWinnerCount: parseInt(args[2]),

            newPrize: args.slice(3).join(" ")

        }).then(() => {

            // Here, we can calculate the time after which we are sure that the lib will update the giveaway

            const numberOfSecondsMax = client.giveawaysManager.options.updateCountdownEvery / 1000;

            message.channel.send(':tada: Başarılı! Çekiliş düzenlendi!');

        }).catch((err) => {

            message.channel.send('<:bakimda:798582408642560110> ' + args[0] + ', ID sinde bir çekiliş bulunamadı!');

        });

}

exports.conf = {

aliases: [] 

}

exports.help = {

name: "çekiliş-düzenle" 

} 