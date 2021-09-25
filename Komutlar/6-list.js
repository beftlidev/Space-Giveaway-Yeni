const Discord = require('discord.js');

const ms = require('ms');

module.exports.run = async (bot, message, args) => {

    let activeGiveaways = bot.giveawaysManager.giveaways.filter((g) => g.guildID === message.guild.id);

    let giveaways = activeGiveaways.filter((g) => !g.ended);

     if(!message.member.permissions.has('ADMINISTRATOR')) {

    const embed = new Discord.MessageEmbed()

      .setDescription(`<:carpi:855750448711467058> **Ne yazık ki bu komutu kullanmaya yetkin yok.**`)

    message.channel.send(embed);

    return;

  }

    if (giveaways.length === 0) {

      message.inlineReply('<:carpi:855750448711467058> Bu sunucuda şu anda etkin bir çekiliş yok.');

      return;

    }

  const embed = new Discord.MessageEmbed()

  .setTitle("" + message.guild.name + " **|** Çekiliş Listesi")

  .setDescription(`${giveaways.map((g) => `<:codesty_gift:844468550491570186> **Ödül**: ${g.data.prize}
<:codesty_member:844468558523924542> **Kazanan(lar)**: ${g.data.winnerCount}
<:codesty_label:844468559643279361> **ID**: ${g.messageID}
<:codesty_chat:844468555139383296> **Kanal**: <#${g.channelID}>`).join("\n\n")}`)
  .setFooter(bot.user.username, bot.user.avatarURL());

 return message.channel.send(embed);

}

exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: [],

  permLevel: 0
};

exports.help = {

  name: 'çekiliş-liste',

  description: 'çekiliş',

  usage: 'çekiliş-liste'

};