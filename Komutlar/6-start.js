const Discord = require("discord.js");
const ms = require("ms");
const path = require("path");

module.exports.run = async (client, message, args) => {
  
  let hasPerm = message.member.hasPermission("MANAGE_MESSAGES");
  let hasRole = message.member.roles.cache.find(r => r.name === "Giveaways");

    if (hasPerm === false || !hasRole == null) {
      return message.channel.send(
        new Discord.MessageEmbed()
   
          .setColor("RED")
          .setDescription(
            "<:carpi:855750448711467058> **Ne yazık ki bu komutu kullanmaya yetkin yok.**")
          .setTimestamp()
      );
    }

    if (!args[0]) {
      return message.channel.send(
        new Discord.MessageEmbed()
          .setTitle("**Hata**")
          .setColor("RANDOM")
          .setDescription(
            "<:codesty_support:844468556430704640> Lütfen çekilişin süresini girin.\n\n<:kalem:857937104323215360> **Saniye: s \n<:kalem:857937104323215360> Dakika: m \n<:kalem:857937104323215360> Saat: h \n<:kalem:857937104323215360> Gün: d**"
          )
          .setTimestamp()
      );
    }

    if (!args[1]) {
      return message.channel.send(
        new Discord.MessageEmbed()
          .setTitle("**Hata**")
          .setColor("RANDOM")
          .setDescription(
            "<:codesty_support:844468556430704640> Lütfen çekilişi kazanacak sayısını girin!"
          )
          .setTimestamp()
      );
    }

    if (!args[2]) {
      return message.channel.send(
        new Discord.MessageEmbed()
          .setTitle("**Hata**")
          .setColor("RANDOM")
          .setDescription("<:codesty_support:844468556430704640> Lütfen Yapacağınız Çekilişi yazınız.!")
          .setTimestamp()
      );
    }

    message.delete();

    client.giveawaysManager.start(message.channel, {
      time: ms(args[0]),
      prize: args.slice(2).join(" "),
      winnerCount: parseInt(args[1]),
      lastChance: {
        enabled: true,
        content: '<:codesty_announcement:844468552920858624> **KATILMAK İÇİN SON ŞANS!**',
        threshold: 5000,
        embedColor: '#FF0000'
    },
      messages: {
        giveaway:":tada: :tada: **Çekiliş Başladı** :tada: :tada:",
        giveawayEnded:":tada: :tada: **Çekiliş Bitti** :tada: :tada:",
        timeRemaining: `<:YTTimer:843872689961304064> \Kalan Süre: **[{duration}](https://discord.gg/KZfAEjrPUF)**!\n<:YTcountry:843872690917343253> Çekilişi Yapan: ${message.author}`,
        inviteToParticipate: "<:YTVerifiedCheck:843872688258154507> Çekilişe katılmak için 🎉 tepkisine tıklayın!",
        winMessage: "🎉 Tebrikler, {winners}! **{prize}** kazandın!",
        embedFooter: " Çekiliş",
        noWinner: `\<:carpi:855750448711467058> Yeterli katılım olmadığı için çekiliş iptal edildi.\n\Çekilişi Yapan: ${message.author}`,
        winners: `\Kazanan(lar) `,
        endedAt: "Bitiş",
        units: {
          seconds: "Saniye",
          minutes: "Dakika",
          hours: "Saat",
          days: "Gün",
          pluralS: false
        }
      }
    });

  
};

module.exports.help = {
  name: "çekiliş-başlat"
};
