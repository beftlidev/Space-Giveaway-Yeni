const Discord = require("discord.js");

exports.run = async (client, message) => {

  let embed = new Discord.MessageEmbed()

    .setColor("RANDOM") 

    .setTitle("<:partner:793055693506347038> Dbl İstatistik <:partner:793055693506347038>") 

   .setImage("https://top.gg/api/widget/765207268408033322.png")

  const fetch = require("node-fetch");

    const kanal = message.channel.id;

    const mesaj = embed

    const butonmesaj = "Oy Linki"

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

  enabled: true,

  guildOnly: true,

  aliases: ["p", "ms"],

  permLevel: 0

};

exports.help = {

  name: "dbli",

  description: "Botun pingini gösterir",

  usage: "ping"

};