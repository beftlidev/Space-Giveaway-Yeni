const Discord = require("discord.js");
const ms = require("ms");
const path = require("path");

module.exports.run = async (client, message, args) => {
  
  let hasPerm = message.member.hasPermission("MANAGE_MESSAGES");
  let hasRole = message.member.roles.cache.find(r => r.name === "Giveaways");

    if (hasPerm === false || !hasRole == null)
      return message.channel.send(
        new Discord.MessageEmbed()

          .setColor("RED")
          .setDescription(
            "<:carpi:855750448711467058> **Ne yazık ki bu komutu kullanmaya yetkin yok.**"
          )
          .setTimestamp()
      );

    if (!args[0]) {
      return message.channel.send(
        new Discord.MessageEmbed()
          .setTitle("**Hata**")
          .setColor("RED")
          .setDescription(
            "<:codesty_support:844468556430704640> Lütfen, yeniden çekmek istediğiniz çekiliş ID sini girini!"
          )
          .setTimestamp()
      );
    }
        client.giveawaysManager.reroll(args[0], {
      messages: {
        congrat: "<:hediye:841725511028703294> Tebrikler: {winners}"
      }
    });
};

module.exports.help = {
  name: "çekiliş-yeniden-çek"
};
