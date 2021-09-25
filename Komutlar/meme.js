const Discord = require('discord.js');

const { MessageButton } = require("discord-buttons") 

const got = require('got');

module.exports.run = async (bot, message, args) => {

	const embed = new Discord.MessageEmbed();	got('https://www.reddit.com/r/burdurland/random/.json')		.then(response => {

			const [list] = JSON.parse(response.body);

			const [post] = list.data.children;

			const permalink = post.data.permalink;

			const memeUrl = `https://reddit.com${permalink}`;

			const memeImage = post.data.url;

			const memeTitle = post.data.title;

			const memeUpvotes = post.data.ups;

			const memeNumComments = post.data.num_comments;

    let newmeme = new MessageButton() 
.setStyle("gray")
.setLabel("Yeni Meme!")
.setEmoji("857937104323215360")
.setID("meme")
const memed = new MessageButton()
.setStyle("red")
.setID("memedelete")
.setEmoji("856408185845055498")
.setLabel("Sil")

    let link = new MessageButton() 

    .setURL(`${memeUrl}`)
.setLabel("Meme Link") 
   .setStyle("url")
    
			embed.setTitle(`${memeTitle}`);

			embed.setURL(`${memeUrl}`);

			embed.setColor('RANDOM');

			embed.setImage(memeImage);

			message.channel.send({

                        embed: embed, 

                        buttons: [newmeme, memed, link]

                        }) 

		})

		.catch(console.error);

};

exports.help = {

	name: 'meme',

	aliases: [],

};
