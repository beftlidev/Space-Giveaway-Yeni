const Nuggies = require('nuggies');
const Discord = require('discord.js');
/**
 * @param {Discord.Client} client
 * @param {Discord.Message} message
 * @param {String[]} args
 */
const db = require("croxydb") 

module.exports.run = async (client, message, args) => {
	     if(!message.member.permissions.has('MANAGE_MESSAGES')) {
			     const embed = new Discord.MessageEmbed()
				       .setDescription(`<:carpi:855750448711467058> **Ne yazık ki bu komutu kullanmaya yetkin yok.**`)
					         .setColor("RED") 
							     message.channel.send(embed);
								     return;
									   }
	const brmanager = new Nuggies.buttonroles();
	message.channel.send('Mesaj olarak `roleID color label emoji` gonder! Bitirdikten sonra `done` yazin.');
let text = db.fetch(`rol_al_text_${message.guild.id}`) 
	/**
	 * @param {Discord.Message} m
	 */
	const filter = m => m.author.id === message.author.id;
	const collector = message.channel.createMessageCollector(filter, { max: Infinity });

	collector.on('collect', async (msg) => {
		if (!msg.content) return message.channel.send('Invalid syntax');
		if (msg.content.toLowerCase() == 'done') return collector.stop('DONE');
		const colors = ['grey', 'gray', 'red', 'blurple', 'green'];
		if (!msg.content.split(' ')[0].match(/[0-9]{18}/g) || !colors.includes(msg.content.split(' ')[1])) return message.channel.send('Geçersiz Renk! \nLütfen (grey, red, blurple, green) renklerinden birini belirtin.');

		const role = msg.content.split(' ')[0];
		// const role = message.guild.roles.cache.get(roleid);
		if (!role) return message.channel.send('Gecersiz rol');

		const color = colors.find(color => color == msg.content.split(' ')[1]);
		if (!color) return message.channel.send('Geçersiz Renk! \nLütfen (grey, red, blurple, green) renklerinden birini belirtin.');

		const label = msg.content.split(' ').slice(2, msg.content.split(' ').length - 1).join(' ');

		const reaction = (await msg.react(msg.content.split(' ').slice(msg.content.split(' ').length - 1).join(' ')).catch(/*() => null*/console.log));

		const final = {
			role, color, label, emoji: reaction ? reaction.emoji.id || reaction.emoji.name : null,
		};
		brmanager.addrole(final);
	})

	collector.on('end', async (msgs, reason) => {
		if (reason == 'DONE') {
			const embed = new Discord.MessageEmbed()
				.setDescription(`${text || "Aşağıdaki butona tıklayarak belirlenen rolü alabilirsin."}`)
				.setColor('RANDOM')
				.setTimestamp();
			Nuggies.buttonroles.create({ message, content: embed, role: brmanager, channelID: message.channel.id })
		}
	})
} 

exports.help = {
	name: 'buton-rol'
};