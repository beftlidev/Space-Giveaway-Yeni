const Discord = require("discord.js")

const { MessageButton } = require("discord-buttons") 

const db = require("croxydb") 

const { MessageAttachment } = require("discord.js");

const Levels = require("discord-xp");

const canvacord = require("canvacord");

exports.run = async (client, message, args) => {

if (!message.guild) return;

    if (message.author.bot) return;

    const target = message.mentions.users.first() || message.author;

    const sj = await Levels.fetch(target.id, message.guild.id, true);

    let renk = db.fetch(`rrenk_${target.id}`) 

    if (!sj) return client.err(message, "Utilities", "rank", 10);

    const neededXp = Levels.xpFor(parseInt(sj.level) + 1);

    const Rank = new canvacord.Rank()

      .setAvatar(target.displayAvatarURL({ dynamic: false, format: "png" }))

      .setCurrentXP(sj.xp)

      .setRank(parseInt(sj.position))

      .setLevel(sj.level)

      .setRequiredXP(neededXp)

      .setStatus("online")

      .setProgressBar(`${renk || "GOLD"}`, "COLOR")

      .setUsername(target.username)

  

   

    

      .setDiscriminator(target.discriminator);

    Rank.build().then(data => {

      const attachment = new MessageAttachment(data, "RankCard.png");

let user = message.mentions.users.first() || message.author 

let yas = db.fetch(`yas_${user.id}`)

let aciklama = db.fetch(`aciklama_${user.id}`) 

let durum = db.fetch(`durum_${user.id}`) 

let durume = db.fetch(`durume_${user.id}`) 

let banner = db.fetch(`banner_${user.id}`) 

let xbox = db.fetch(`xbox_${user.id}`) 

let youtube = db.fetch(`youtube_${user.id}`) 

let github = db.fetch(`github_${user.id}`) 

let twitch = db.fetch(`twitch_${user.id}`) 

let coin = db.fetch(`coin_${user.id}`) 

let owner = db.fetch(`owner_${user.id}`) 

let yetkili = db.fetch(`yetkili_${user.id}`) 

let mod = db.fetch(`mod_${user.id}`)

let dev = db.fetch(`dev_${user.id}`) 

let partner = db.fetch(`partner_${user.id}`) 

let early = db.fetch(`early_${user.id}`)

let pre = db.fetch(`pre_${user.id}`) 

let gold = db.fetch(`gold_${user.id}`) 

let destekci = db.fetch(`destekci_${user.id}`) 

let bug = db.fetch(`bug_${user.id}`) 

let bug2 = db.fetch(`bug2_${user.id}`) 

let hediye = db.fetch(`hediye_${user.id}`) 

let beta = db.fetch(`beta_${user.id}`) 

let onayli = db.fetch(`onayli_${user.id}`) 

let kullanıcı = db.fetch(`kullanıcı_${user.id}`)

let xboxb = new MessageButton() 

.setLabel(`${xbox || "?"}`)

.setID("xboxprofil")

.setEmoji("855659097311805460")

.setStyle("green")

let youtubeb = new MessageButton() 

.setLabel(`YouTube`)

.setURL(`${youtube || "https://youtube.com"}`)

.setStyle("url")

let githubb = new MessageButton() 

.setLabel(`Github`)

.setURL(`${github || "https://github.com"}`)

.setStyle("url")

let twitchb = new MessageButton() 

.setLabel(`Twitch`)

.setURL(`${twitch || "https://twitch.com"}`)

.setStyle("url")

const embed1 = new Discord.MessageEmbed() 

.setTitle("Profil") 

.addField(`<:member:856408299229151242> İsim`, user.username) 

.addField(`<:member:856408299229151242> Yaş`, `${yas || "Ayarlanmamış"}`) 
.addField(`<:backpack:856408019289767937> Rozetlerin`, `${owner || ""} ${yetkili || ""} ${mod || ""} ${dev || ""} ${partner || ""} ${early || ""} ${pre || ""} ${gold || ""} ${destekci || ""} ${bug || ""} ${bug2 || ""} ${hediye || ""} ${beta || ""} ${onayli || ""} ${kullanıcı || ""}.`)

.addField(`<:coin:856798514540445706> Coinlerin`, `${coin || "0"}`) 

.addField(`<:roket:873257292634673192> Level`, `${sj.level} Level | ${sj.xp} / ${neededXp}`)

.addField(`<:pusula:856408214315597834> Açıklama`, `${aciklama || "Ben çok güzel bir kelebeğim"}`) 

.addField(`<:pusula:856408214315597834> Durum`, `${durume || ""} ${durum || "Destek Geldi!"}`)

.setFooter("(g.profil-ayarla) Kullanmaya Ne Dersin?")

.setImage(`${banner || "https://cdn.discordapp.com/attachments/843458021040455740/879340898385821736/PicsArt_08-23-02.40.37.jpg"}`)

.setColor("GREEN") 

.setThumbnail(user.avatarURL({ dynamic: true, size: 2048 })) 

message.channel.send({

embed: embed1, 

buttons: [xboxb, youtubeb, githubb, twitchb]

}) 

}) 
} 
exports.conf = {

aliases: [] 

}

exports.help = {

name: "profil" 

} 