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

  if(!syst) return msg.channel.send(`<a:yanlis:754262507907973200> Sistemi Çalıştırmak Için g.sa-as-emoji aç \n Kapatmak Için g.sa-as-emoji kapat`)

  if(syst !== "aç" && syst !== "kapat") return msg.inlineReply('<a:yanlis:754262507907973200> Aç Veya Kapat Argümanlarını Kullan!')

  if(syst == 'kapat'){

    db.set(`saase_${msg.guild.id}`,'kapalı')

    msg.inlineReply(`<a:dogru:754262469186289706> Bu Sunucu Için Emojili Sa-As Deaktif Hale Getirildin \n Açmak Için \`g.sa-as-emoji aç\` Yazabilirsin`)

    }

  if(syst == 'aç'){

  db.set(`saase_${msg.guild.id}`,'açık') //Db Kontrol 

  msg.inlineReply(`<a:dogru:754262469186289706> Bu Sunucu Için Emojili Sa-As Aktifleştirdin \n Kapatmak Için \`g.sa-as-emoji kapat\` Yazazabilirsin`)

    

    
    }

   

};

exports.conf = {

    aliases: ['saas'],

    permLevel: 0

};

exports.help = {

    name: 'sa-as-emoji',

    description: 'Bir kullanıcı "SA" Yazdığında Botun Atacağı Mesajı Ayarlamanızı Sağlar.',

    usage: 'sa-as'

};

