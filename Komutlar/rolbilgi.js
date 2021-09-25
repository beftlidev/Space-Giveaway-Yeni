const { MessageEmbed } = require("discord.js");

module.exports.run = async (bot, message, args) => {

        if (!args[0]) return message.channel.send("**Lütfen Bir Rol Girin!**")

        let rol = message.mentions.roles.first() || message.guild.roles.cache.get(args[0]) || message.guild.roles.cache.find(r => r.name.toLowerCase() === args.join(' ').toLocaleLowerCase());

        if (!rol) return message.inlineReply("**Lütfen Geçerli Bir Rol Girin!**");

        const bahset = {

            false: "Hayır",

            true: "Evet"

        }

        let enes = new MessageEmbed()

            .setColor("#00ff00")

            .setAuthor("Rol Bilgi")

            .setThumbnail(message.guild.iconURL())

            .addField("<a:dj:768787034877198356> **Rol ID**", `\`${rol.id}\``, true)

            .addField("<a:chest:763281974336946187> **Rol İsmi**", rol.name, true)

            .addField("<:bug_hunter:763282944637927434> **Renk Kodu**", rol.hexColor)

            .addField("<:709419603398361170:803719499298897950> **Sahip Üyeler**", rol.members.size)

            .addField("<a:kupa:768782652550676511> **Poziyon**", rol.position)

            .addField("<:709419603784368258:803719495973732382> **Bahsedilebilir**", bahset[rol.mentionable])

            .setFooter(message.member.displayName, message.author.displayAvatarURL())

            .setTimestamp()

        message.channel.send(enes);

    }

  exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: ['rolbilgi'],

  permLevel: 0

};

exports.help = {

  name: 'rolbilgi',

  description: 'Rol Hakkında Bilgi Verir.',

  usage: 'rolbilgi'

};