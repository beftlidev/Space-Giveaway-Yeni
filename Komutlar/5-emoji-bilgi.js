const Discord = require('discord.js');

const moment = require('moment');

moment.locale('tr');

exports.run = async (client, message, args) => {

if(!args[0]) return message.channel.send(new Discord.MessageEmbed()

.setColor('RED')

.addField('<a:bytcec:818712678146113567> Bilgi Komutu', "Sunucudaki bir emoji hakkında bilgi alabilirsiniz.")

.addField('<a:bytcec:818712678146113567> Kullanım', `g.emoji-bilgi :emoji:`)

.setFooter(message.author.username+'.', message.author.avatarURL({ dynamic: true })));

  const s = args.slice(0).join(' ').split(' ').filter(x => x.includes('<') && x.includes('>'))[0];

  var emoji;

  if(s) {

  if(!message.guild.emojis.cache.get(s.split(':')[2].split('>')[0])) return message.inlineReply('Bilgisini vermem için bu sunucuda olan bir emojiyi göndermeli veya adını yazmalısınız. \nÖrnek: `g.emoji-bilgi :emoji:`')

  emoji = message.guild.emojis.cache.get(s.split(':')[2].split('>')[0]);

  } else {

  if(!message.guild.emojis.cache.find(x => x.name === args.slice(0).join('-'))) return message.inlineReply('Bilgisini vermem için bu sunucuda olan bir emojiyi göndermeli veya adını yazmalısınız. \nÖrnek: `g.emoji-bilgi :emoji:`')

  emoji = message.guild.emojis.cache.find(x => x.name === args.slice(0).join('-'));

  };

  const author = await emoji.fetchAuthor();

  return message.channel.send(new Discord.MessageEmbed()

  .setColor('GREEN')

  .setAuthor('Emoji Bilgi')

  .addField("<a:1_:818444321287176243> ID'si", emoji.id, true)

  .addField('<:codesty_image:844468551763230740> Hareketli mi?', emoji.animated ? 'Evet' : 'Hayır', true)

  .addField('<:YTTimer:843872689961304064> Eklenme Tarihi', moment(emoji.createdAt).format('DD')+' '+moment(emoji.createdAt).format('MM').toString()

  .replace('01', 'Ocak')

  .replace('02', 'Şubat')

  .replace('03', 'Mart')

  .replace('04', 'Nisan')

  .replace('05', 'Mayıs')

  .replace('06', 'Haziran')

  .replace('07', 'Temmuz')

  .replace('08', 'Ağustos')

  .replace('09', 'Eylül')

  .replace('10', 'Ekim')

  .replace('11', 'Kasım')

  .replace('12', 'Aralık')+' '+moment(emoji.createdAt).format('YYYY'), true)

  .addField('<a:bytcec:818712678146113567> Kullanım', `\`<${emoji.animated ? 'a' : ''}:${emoji.name}:${emoji.id}>\``, true)

  .addField('<a:bytcec:818712678146113567> Ekleyen Kişi', '<@!'+author.id+'>', true)

  .addField('<:codesty_link:844468557605240862> Bağlantı', '[Tıkla]('+emoji.url+')', true)

  .setThumbnail(emoji.url)

  .setFooter(`${message.author.tag} tarafından istendi.`, message.author.avatarURL({ dynamic: true })));

}; 

exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: ['bılgı', 'bilgı', 'bılgi'],

  permLevel: 0

};

 

exports.help = {

  name: 'emoji-bilgi',

};