const { MessageAttachment } = require("discord.js");
const Discord = require("discord.js")
const Levels = require("discord-xp");

const db = require("croxydb") 
const {MessageButton} = require("discord-buttons")
const canvacord = require("canvacord");

exports.run = async (client, message, args) => {

    if (!message.guild) return;

    if (message.author.bot) return;

    const target = message.mentions.users.first() || message.author;

    const user = await Levels.fetch(target.id, message.guild.id, true);

    let renk = db.fetch(`rrenk_${target.id}`) 
let arkaplan = db.fetch(`rarkaplan_${target.id}`) 
    if (!user) return client.err(message, "Utilities", "rank", 10);

    const neededXp = Levels.xpFor(parseInt(user.level) + 1);
 var cardBg = arkaplan || "https://cdn.discordapp.com/attachments/843458271180226571/878985047783403560/indir_1.jpg";
            var bgType = "IMAGE";
            const button = new MessageButton()
            .setStyle("gray")
            .setID("rank")
            .setLabel("Leader Board")
            .setEmoji("873257292634673192")  
            

    const Rank = new canvacord.Rank()
 
      .setAvatar(target.displayAvatarURL({ dynamic: false, format: "png" }))

      .setCurrentXP(user.xp)

      .setRank(parseInt(user.position))

      .setLevel(user.level)

      .setRequiredXP(neededXp)

      .setStatus("online")
     
 .setLevelColor(`${renk || "GOLD"}`, "COLOR")
                   .renderEmojis(true)
      .setProgressBar(`${renk || "GOLD"}`, "COLOR")

      .setUsername(target.username)
   .setDiscriminator(target.discriminator)
    .setBackground(bgType, cardBg)

    
     

    Rank.build().then(data => {

      const attachment = new MessageAttachment(data, "RankCard.png");
const sjj = new Discord.MessageEmbed()
.setDescription(`${message.author}`)
.setImage(Rank)

      message.channel.send({ content: `${message.author}`,
        files: [attachment],
        buttons: [button]
        });

    });

  },

exports.help = {

name: "rank" 

} 