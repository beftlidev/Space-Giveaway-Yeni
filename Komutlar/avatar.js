const Discord = require("discord.js") 

exports.run = async (client, message, args) => {

let kullanıcı = message.mentions.users.first() 

if (kullanıcı) {

const embed = new Discord.MessageEmbed() 

.setColor("RANDOM") 

.setImage(kullanıcı.avatarURL({ dynamic: true, size: 2048 })) 

const fetch = require("node-fetch");

    const kanal = message.channel.id;

    const mesaj = embed

    const butonmesaj = "Avatar Url"

    fetch(`https://discord.com/api/v9/channels/${kanal}/messages`, {

        method: "POST",

        body: JSON.stringify({"embed":mesaj,

            "components": 

            [

              {

                "type": 1,

                "components": [

                    {

                        "type": 2,

                        "label": butonmesaj,

                        "style": 5,

                        "url": `${kullanıcı.avatarURL({ dynamic: true, size: 2048 })}`

                    }

]

            }

            ],

                             }),

        headers: {

            "Authorization": `Bot ${client.token}`,

            "Content-Type": "application/json"

        }

    })
} 
else {

const embed1 = new Discord.MessageEmbed() 

.setColor("RANDOM") 

.setImage(message.author.avatarURL({ dynamic: true, size: 2048 })) 

const fetch = require("node-fetch");

    const kanal = message.channel.id;

    const mesaj = embed1

    const butonmesaj = "Avatar Url"

    fetch(`https://discord.com/api/v9/channels/${kanal}/messages`, {

        method: "POST",

        body: JSON.stringify({"embed":mesaj,

            "components": 

            [

              {

                "type": 1,

                "components": [

                    {

                        "type": 2,

                        "label": butonmesaj,

                        "style": 5,

                        "url": `${message.author.avatarURL({ dynamic: true, size: 2048 })}`

                    }

]

            }

            ],

                             }),

        headers: {

            "Authorization": `Bot ${client.token}`,

            "Content-Type": "application/json"

        }

    })
} 
} 

exports.conf = {

aliases: [] 

} 

exports.help = {

name: "avatar" 

} 