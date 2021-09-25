const Discord = require("discord.js");

const db = require("croxydb");

const ayarlar = require("../ayarlar.json")

exports.run = async (client, message, args) => {

  

  if(message.author.id !== ayarlar.sahip) {

     const embed = new Discord.MessageEmbed()

    .setDescription(`**<:carpi:855750448711467058> Bu Komut Yapımcıma Özeldir !**`)

    .setColor('BLUE')

    return message.channel.send(embed).then(msg=>msg.delete(3000));

    }

if(args[0] === "aç"){

  if(!args[1]){

  message.channel.send('<:carpi:855750448711467058> Bakım modu sebebini belirtin!')

  }

  db.set('bakım', args.slice(1).join(' '))

  if (args.slice(1).join(' ')) {

  message.channel.send("Bakım açıldı")

    }

} else if(args[0]=== "kapat"){

  message.channel.send("Bakım Kapatıldı")

  db.delete('bakım')

}

}

exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: [],

  permLevel: 0

};

exports.help = {

  name: 'bakım',

  description: 'Bakım.',

  usage: 'Bakım'

};

