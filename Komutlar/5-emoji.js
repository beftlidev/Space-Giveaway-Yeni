const Discord = require('discord.js')

const { parse } = require("twemoji-parser");

const { MessageEmbed } = require("discord.js");



exports.run = async (client, message, args) => {



        if (!message.member.hasPermission("MANAGE_EMOJIS")) {



            return message.inlineReply(`Emojileri yönet Yetkisine sahip olmalısın`)



        }



        const emoji = args[0];



        if (!emoji) return message.inlineReply(`Bir emoji girmelisin!`);



        let customemoji = Discord.Util.parseEmoji(emoji);



        if (customemoji.id) {



            const Link = `https://cdn.discordapp.com/emojis/${customemoji.id}.${



              customemoji.animated ? "gif" : "png"



            }`;



            const name = args.slice(1).join(" ");



            message.guild.emojis.create(



                `${Link}`,



                `${name || `${customemoji.name}`}`



            ).catch(error => {



                console.log(error)



            })



            const Added = new MessageEmbed()



                .setTitle(`Emoji Eklendi`)



                .setColor("RANDOM" )



                .setDescription(



                    `**Emoji isim:** \`:${name || `${customemoji.name}`}:\``



                );



            return message.channel.send(Added).catch(e => {



                console.log(e)



            })



        } else {



            let CheckEmoji = parse(emoji, {



                assetType: "png"



            });



            if (!CheckEmoji[0])



                return message.inlineReply(`Lütfen geçerli bir emoji girin!`);



            message.inlineReply(



                `Normal emojileri sunucunuza ekleyemezsiniz!`



            );



        }

}



exports.conf = {

    aliases: ["emoji-yükle"]

}



exports.help = {

    name: "emoji-ekle",

    description: "Başka sunucudan kullandığınız emojiyi sunucuya ekler",

    usage: "emoji-yükle <özel emoji>"

}