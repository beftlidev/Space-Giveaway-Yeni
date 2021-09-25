const Discord = require('discord.js');

const moment = require('moment');

moment.locale('tr');

exports.run = async (client, message, args) => {

if(!args[0]) return;

const s = args.slice(0).join(' ').split(' ').filter(x => x.includes('<') && x.includes('>'))[0];

var emoji;

if(s) {

if(!message.guild.emojis.cache.get(s.split(':')[2].split('>')[0])) return message.inlineReply('<:bakimda:798582408642560110> Bilgisini vermem için bu sunucuda olan bir emojiyi göndermeli veya adını yazmalısınız. \nÖrnek: g.emoji-link :emoji:')

emoji = message.guild.emojis.cache.get(s.split(':')[2].split('>')[0]);

} else {

if(!message.guild.emojis.cache.find(x => x.name === args.slice(0).join('-'))) return message.inlineReply('<:bakimda:798582408642560110> Bilgisini vermem için bu sunucuda olan bir emojiyi göndermeli veya adını yazmalısınız. \nÖrnek: g.emoji-link :emoji:')

emoji = message.guild.emojis.cache.find(x => x.name === args.slice(0).join('-'));

};

return message.inlineReply(`<a:check:844812514529509386> İstediğin emoji: `+emoji.url);

}; 

exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: [],

  permLevel: 0

};

 

exports.help = {

  name: 'emoji-link',

  namee: 'link'

};