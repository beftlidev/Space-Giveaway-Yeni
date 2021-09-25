const ms = require('ms');

const Discord = require('discord.js');

exports.run = async (client, message, args) => {

 if(!message.member.permissions.has('MANAGE_MESSAGES')) {

    const embed = new Discord.MessageEmbed()

      .setDescription(`<:carpi:855750448711467058> **Ne yazık ki bu komutu kullanmaya yetkin yok.**`)

    message.channel.send(embed);

    return;

  }

    if(!args[0]){

        return message.inlineReply('<:carpi:855750448711467058> Bir çekiliş id si belirtmelisin!');

    }

    let giveaway = 

    client.giveawaysManager.giveaways.find((g) => g.prize === args.join(' ')) ||

    client.giveawaysManager.giveaways.find((g) => g.messageID === args[0]);

    if(!giveaway){

        return message.inlineReply('<:carpi:855750448711467058> Sunucuda böyle bir çekiliş bulamadım! `'+ args.join(' ') + '`.');

    }

    client.giveawaysManager.edit(giveaway.messageID, {

        setEndTimestamp: Date.now()

    })

    .then(() => {

        message.inlineReply(':tada: Başarılı! Çekiliş '+(client.giveawaysManager.options.updateCountdownEvery/1000)+' saniye içinde sonlandırılacak.')

    })

    .catch((e) => {

        if(e.startsWith(`<:carpi:855750448711467058> Bu id li çekiliş ${giveaway.messageID} zaten bitti.`)){

            message.inlineReply('<:carpi:855750448711467058> Bu çekiliş çoktan sona erdi!');

        } else {

            console.error(e);

            message.inlineReply('<:carpi:855750448711467058> Bir hata oluştu...');

        }

    });

};

exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: ['zjskkc'],

  permLevel: 0

};

exports.help = {

  name: 'çekiliş-bitir',

  description: 'çekiliş',

  usage: 'bitir'

};

