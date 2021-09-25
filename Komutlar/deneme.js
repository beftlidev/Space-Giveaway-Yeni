const Discord = require('discord.js');
 const disbut = require("discord-buttons");
  
  const disbutpages = require("discord-embeds-pages-buttons")

exports.run = async (client, message, args) => {

   const embed1 = new Discord.MessageEmbed()
    .setColor("YELLOW")
    .setTitle("1")
    
    const embed2 = new Discord.MessageEmbed()
    .setColor("GREEN")
    .setTitle("2")
    
    const embed3 = new Discord.MessageEmbed()
    .setColor("PINK")
    .setTitle("3")
    
    var pages = [embed1, embed2, embed3]
    
    disbutpages.pages(message, pages, {
      timeout: 60*1000,
        buttons: {
            delete: {
                style: "red",
                emoji: "❌",
                text: "Sil"
            },
            forward: {
                style: "green",
                emoji: "⏩",
                text: "İleri"
            },
            backward: {
                style: "green",
                emoji: "⏪",
                text: "Geri"
            }
        },
        extraRows: [],
        extraPos: "below",
        message: "",
        ephemeral: "Bu mesajın sahibi değilsin!"
    })
}

exports.conf = {

  aliases: []

};

exports.help = {

  name: 'deneme'

}