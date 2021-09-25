const fetch = require("node-superfetch"); // npm install node-superfetch
const fetch1 = require("node-fetch") 
const Discord = require("discord.js");

const db = require('croxydb')

const config = "AIzaSyChebRusOAAmCjuwic9_V6Ivy-3BEGb5NI"

exports.run = async (client, message, args) => {

    let name = args.join(" ");

      if (!name) return message.channel.send("Bilinmeyen kanal ismi");

      const channel = await fetch.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${name}&key=AIzaSyChebRusOAAmCjuwic9_V6Ivy-3BEGb5NI&maxResults=1&type=channel`)

      .catch(() => message.channel.send("Bilinmeyen kanal hatası."));

      if (!channel.body.items[0]) return message.channel.send("Kanal bulunamadı, yeniden dene.");

      const data = await fetch.get(`https://www.googleapis.com/youtube/v3/channels?part=snippet,contentDetails,statistics,brandingSettings&id=${channel.body.items[0].id.channelId}&key=AIzaSyChebRusOAAmCjuwic9_V6Ivy-3BEGb5NI`)

      .catch(() => message.channel.send("Bilinmeyen kanal data hatası"));

      const embed = new Discord.MessageEmbed()

      .setColor(0x7289DA)

      .setThumbnail(channel.body.items[0].snippet.thumbnails.high.url)

      .setTimestamp(new Date())

      .addField("<:youtube:841725468101312552> Kanal İsmi", channel.body.items[0].snippet.channelTitle, true)

      .addField("<:709419603398361170:803719499298897950> Abone Sayısı", parseInt(data.body.items[0].statistics.subscriberCount).toLocaleString(), true)

      .addField("<:YTviews:843872685322928128> Toplam İzlenmeler", parseInt(data.body.items[0].statistics.viewCount).toLocaleString(), true)

      .addField("<:YTvids:843872686345551873> Toplam video(lar)", parseInt(data.body.items[0].statistics.videoCount).toLocaleString(), true)

      .addField("<:YTTimer:843872689961304064> Oluşturulma tarihi", new Date(channel.body.items[0].snippet.publishedAt).toDateString(), true)

      .addField("<:YTcountry:843872690917343253> Kanal Açıklaması", channel.body.items[0].snippet.description, true)

    const kanal = message.channel.id;

    const mesaj = embed

    const butonmesaj = "Kanal Linki"

    fetch1(`https://discord.com/api/v9/channels/${kanal}/messages`, {

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

                        "url": `https://www.youtube.com/channel/${channel.body.items[0].id.channelId}`

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

exports.conf = {

    enabled: true,

    guildOnly: false,

    aliases: ['youtube', 'ytstats', 'youtube-ara'],

    permLevel: 0

  };

  exports.help = {

    name: 'youtube',

    description: '',

    usage: ''

  };