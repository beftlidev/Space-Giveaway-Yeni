const Discord = require('discord.js');

//MADE BY NYDE IF YOU PUBLİSH Bİ YERDE NYDE VURUR YERDEN YERE

exports.run = function(client, message, args) {

	  const a = new Discord.MessageEmbed()    .setColor("RANDOM")

    .setDescription("Alttaki butonlara tıklayarak istediğin linke ulaşabilirsin!")

const fetch = require("node-fetch");

    const kanal = message.channel.id;

    const mesaj = a

    const butonmesaj = "Website"

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

                        "url": "https://top.gg/bot/765207268408033322"

                    },

                    {

                        "type": 2,

                        "label": "Botu ekle",

                        "style": 5,

                        "url": "https://discord.com/oauth2/authorize?client_id=765207268408033322&scope=bot&permissions=805314622"

                    },

                    {

                        "type": 2,

                        "label": "Destek sunucum",

                        "style": 5,

                        "url": "https://discord.gg/KZfAEjrPUF"

                    },

                    {

                        "type": 2,

                        "label": "Oy ver",

                        "style": 5,

                        "url": "https://top.gg/bot/765207268408033322"

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

};

exports.conf = {

  aliases: []

};

exports.help = {

  name: 'davet'

};