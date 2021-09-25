const Discord = require('discord.js');

const db = require('croxydb');

const DBL = require('dblapi.js')

exports.run = async(client, msg, args) => {

  let syst = args[0]

     if(!msg.member.permissions.has('MANAGE_MESSAGES')) {

    const embed = new Discord.MessageEmbed()

      .setDescription(`**Ne yazık ki bu komutu kullanmaya yetkin yok. <:bakimda:798582408642560110>**`)

    msg.channel.send(embed);

    return;

  }

  if(!syst) return msg.channel.send(`<a:yanlis:754262507907973200> Sistemi Çalıştırmak Için g.sa-as aç \n Kapatmak Için g.sa-as kapat`)

  if(syst !== "aç" && syst !== "kapat" && syst !== "mesaj") return msg.inlineReply('<a:yanlis:754262507907973200> aç, kapat, mesaj Argümanlarını Kullan!')

  if(syst == 'kapat'){

    db.set(`saas_${msg.guild.id}`,'kapalı')

    msg.inlineReply(`<a:dogru:754262469186289706> Bu Sunucu Için Sa-As Mesajı Deaktif Hale Getirildin \n Açmak Için \`g.sa-as aç\` Yazabilirsin`)

    }

  if(syst == 'aç'){

  db.set(`saas_${msg.guild.id}`,'açık') //Db Kontrol 

  msg.inlineReply(`<a:dogru:754262469186289706> Bu Sunucu Için Sa-As Mesajını Aktifleştirdin \n Kapatmak Için \`g.sa-as kapat\` Yazazabilirsin`)

    }

  if(syst == 'mesaj'){

  db.set(`saasm_${msg.guild.id}`,`${args.slice(1).join(" ")}`)

   msg.inlineReply(`<a:dogru:754262469186289706> Sunucun için sa as mesajı \n\`${args.slice(1).join(" ")}\` \nOlarak ayarlandı. `) 

} 

   

};

exports.conf = {

    aliases: ['saas'],

    permLevel: 0

};

exports.help = {

    name: 'sa-as',

    description: 'Bir kullanıcı "SA" Yazdığında Botun Atacağı Mesajı Ayarlamanızı Sağlar.',

    usage: 'sa-as'

};
