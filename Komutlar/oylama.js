const Discord = require('discord.js');

 exports.run = (client, message, args) => {
   
    if(!message.member.permissions.has('MANAGE_MESSAGES')) {

    const embed = new Discord.MessageEmbed()

      .setDescription(`**Ne yazık ki bu komutu kullanmaya yetkin yok. <:bakimda:798582408642560110>**`)

    message.channel.send(embed);

    return;

  }

   message.delete();

   let question = args.join(' ');

   let user = message.author.username

   if (!question) return message.channel.send(

     new Discord.MessageEmbed()

     .setColor("RED")

     .setDescription(`<:bakimda:798582408642560110> Oylama yapmam için bir yazı yazman lazım`)) 

     message.channel.send(

       new Discord.MessageEmbed()

       .setColor("RANDOM")

       .setTimestamp()

       .setFooter('Space Giveaway', client.user.displayAvatarURL())
        
       .setAuthor("Oylama")

       .setDescription(`**${question}**`)).then(function(message) {

         message.react('754262469186289706');

         message.react('754262507907973200');

       });

     };

     exports.conf = {

       enabled: true,

       guildOnly: false,

       aliases: ['anket'],

  permLevel: 2

};

exports.help = {

  name: 'oylama',

  description: 'Oylama yapmanızı sağlar.',

  usage: 'oylama <oylamaismi>'

};