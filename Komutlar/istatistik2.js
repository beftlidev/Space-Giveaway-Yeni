const Discord = require("discord.js");

const moment = require("moment");

const os = require('os');

const {MessageButton} = require("discord-buttons") 

require("moment-duration-format");

const ayarlar = require('../ayarlar.json');

exports.run = async (client, message) => {

  const promises = [

	client.shard.fetchClientValues('guilds.cache.size'),

	client.shard.broadcastEval('this.guilds.cache.reduce((acc, guild) => acc + guild.memberCount, 0)'),

];

  Promise.all(promises)

	.then(results => {

		const totalGuilds = results[0].reduce((acc, guildCount) => acc + guildCount, 0);

		const totalMembers = results[1].reduce((acc, memberCount) => acc + memberCount, 0);

		

const duration = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");

  let embed = new Discord.MessageEmbed()

    .setColor("RANDOM") 

    .setAuthor("İstatistik") 

    .addField("<:sw:856408155184955402> Toplam sunucu", totalGuilds) 

    .addField("<:member:856408299229151242> Toplam Kullanıcı", totalMembers) 

    .addField("<:emoji_41:866556150044033064> Pingim", client.ws.ping) 

    .addField("<:emoji_41:866556150044033064> Shard ID", `${client.shard.ids} / 1`) 

    .addField("<:discordjs:886987041437519972> Discord.js Sürümü", `${Discord.version}`, true)

    .addField("<a:vds:886987302428102686> Bellek Kullanımı", `${(process.memoryUsage().heapUsed / 2024 / 2024).toFixed(2)} MB`, true)

    .addField(`<a:uptime:886987717282500629> Uptime`, `${duration}`, true)

    .addField(`<:pusula:856408214315597834> Toplam Komut Sayısı`, `**${client.commands.size}**`, true)

    .addField("<:owner:850625005548470273> Yapımcım & Geliştirici", "<@753842258457002036>")
.setFooter(`${message.author.username} | Son yenilenme ->`)

.setTimestamp()
   const b1 = new MessageButton() 

.setStyle("gray")

.setLabel("Yenile") 

.setEmoji("873257273236029491") 

.setID("iyenile")

message.channel.send({ embed: embed, 

buttons: [b1] 

}) 
}) 
       }

exports.conf = {

  enabled: true,

  guildOnly: true,

  aliases: ["p", "ms"],

  permLevel: 0

};

exports.help = {

  name: "i",

  description: "Botun pingini gösterir",

  usage: "ping"

};