const discord = require('discord.js');

const tdk = require('trsozluk')

exports.run = async(client, message, args) => {

    let ugurab = args.slice(0).join(' ')

    if(!ugurab) return message.inlineReply('<:carpi:855750448711467058> Aratmak istediğiniz kelimeyi yazın!')

    tdk(ugurab).then(anlam => {

        const embed = new discord.MessageEmbed()

        .setTitle(`<:codesty_support:844468556430704640> __\`${ugurab}\`__  **isimli kelimenin sonuçları!**`)

        .addField('<:codesty_join:844468549417697350> Anlam:', anlam.anlam)

        .addField('<:codesty_join:844468549417697350> Anlam 2:', anlam.anlam2)

         .addField("<:codesty_join:844468549417697350> Anlam 3:", anlam.anlam3) 

        .addField("<:codesty_join:844468549417697350> Lisan:", anlam.lisan)

        .addField('<:codesty_join:844468549417697350> Örnek:', anlam.ornek)

        .addField("<:codesty_join:844468549417697350> Atasözü:", anlam.atasozu)

        .addField("<:codesty_join:844468549417697350> Çoğul:", anlam.cogul) 

        .addField("<:codesty_join:844468549417697350> Özel:", anlam.ozel) 

         .addField("<:codesty_join:844468549417697350> Telaffuz", anlam.telaffuz) 
.setTimestamp();
        
        return message.channel.send(embed)

    });

};

exports.conf = {

    enabled: true,

    guildOnly: false,

    aliases: [],

    permLevel: 0

  };

  

  exports.help = {

    name: 'tdk' 

  };

