const Discord = require("discord.js");

const db = require('croxydb');

const fs = require('fs');

const hastebin = require('hastebin-gen');

const util = require('util');

const Jimp = require('jimp');

exports.run = async (client, message, args) => {

  if(message.author.id !== "753842258457002036") if(message.author.id !== "753842258457002036") return message.channel.send("<:bakimda:798582408642560110> Bu komut <@753842258457002036>' a özeldir!!")

  const tokenuyari = 'Uğur babam olsan vermem xd'

  

  const ayarlar = client.ayarlar

  const sunucu = message.guild

  let bot = client;

  

  var x = client.emojis.cache.get("482877599308185600");

  var x2 = client.emojis.cache.get("482884610985033749");

  

	if(!args[0]) {		const embed = new Discord.MessageEmbed()

			.setDescription("kod giriniz", message.content.slice(2))

			.setColor("RANDOM")

		message.channel.send(embed)

		return

	}

	const code = args.join(' ');

	function clean(text) {

		if (typeof text !== 'string')

			text = require('util').inspect(text, { depth: 0 })

		text = text

			.replace(/`/g, '`' + String.fromCharCode(8203))

			.replace(/@/g, '@' + String.fromCharCode(8203))

		return text;

	};

	async function send(embed) {

		message.channel.send(embed);

	}

	const evalEmbed = new Discord.MessageEmbed()

  .setColor("RANDOM")

	try {

		var evaled = clean(await eval(code));

    

    

    if(evaled.length >= 1024) {

    

    

     message.channel.send(evaled, {split: true, code: "js"})

    return

    }

    

    if (code === "2+2" || code === "2 + 2" || code === "Math.floor(2+2)" || code === "Math.floor(2 + 2)") { 

      var evaled = "5"

    };

    

    if(evaled.match(new RegExp(`${client.token}`, 'g'))) evaled.replace(client.token, tokenuyari).replace(process.env.PROJECT_INVITE_TOKEN, tokenuyari);

		if (evaled.constructor.name === 'Promise') evalEmbed.setDescription(`\`\`\`js\n${evaled.replace(client.token, tokenuyari).replace(process.env.PROJECT_INVITE_TOKEN, tokenuyari)}\n\`\`\``)

		else evalEmbed.setDescription(`\`\`\`xl\n${evaled.replace(client.token, tokenuyari).replace(process.env.PROJECT_INVITE_TOKEN, tokenuyari)}\n\`\`\``)

		const newEmbed = new Discord.MessageEmbed()

			.addField(`<a:WindowsBusy:798582405627773069> GİRİŞ`, `\`\`\`js\n${code}\n\`\`\``)

			.addField(`<:online:799541183453855754> ÇIKIŞ`, `\`\`\`js\n${evaled.replace(client.token, tokenuyari).replace(process.env.PROJECT_INVITE_TOKEN, tokenuyari)}\n\`\`\``)

			.setColor("RANDOM")

		message.channel.send(newEmbed,);

	}

	catch (err) {

		evalEmbed.addField(`${x} HATA`, `\`\`\`js\n${err}\n\`\`\``);

		evalEmbed.setColor('RANDOM');

		message.channel.send(evalEmbed);

	}

}

exports.conf = {

	enabled: true,

	guildOnly: true,

	aliases: ["kod", "kod-çalıştır"],

	permLevel: 5,

	kategori: 'yapımcı'

}

exports.help = {

	name: 'eval',

	description: 'Yazılan kodu çalıştırır.',

	usage: 'eval <kod>',

 

}