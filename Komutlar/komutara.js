const Discord = require('discord.js')

exports.run = async (client, message, args) => {

  if (!args.length || args.join('').length < 2) {

    return message.inlineReply('<:bakimda:798582408642560110> Lütfen komut adı giriniz. **(2 harf veya 2 harften fazla)**')

  }

  args = args.join('').toLowerCase();

  let commands = client.commands.map(c => c.help.name.toLowerCase()).filter(c => c.includes(args));

  if (commands.length === 0) {

    return message.inlineReply('<:bakimda:798582408642560110> Komut bulunamadı.')

  }

const eembed = new Discord.MessageEmbed()

.setColor("RANDOM")

.setTitle('<:ara:804253396940226560> Komut Arama')

.setDescription(`**${args}** içeren ${commands.length} komut bulundu.`)

.addField('<a:chest:763281974336946187> Komutlar',`${commands.join(`\n`)}`)

  await message.channel.send(eembed);

};

exports.conf = {

  aliases: [ 'komut-ara' ],

  enabled: true,

  permLevel:0,

  guildOnly: true

};

exports.help = {

  name: 'komutara',

  description: 'Botta olan komutu ararsınız.',

  category: 'Kullanıcı',

  usage: 'komutara komut adı',

  example: ['komutara komut adı' ]

};