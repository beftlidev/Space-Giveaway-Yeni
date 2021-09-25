const Discord = require("discord.js")

const { MessageButton } = require("discord-buttons") 

const db = require("croxydb") 

exports.run = async (client, message, args) => {

let prefix = db.fetch(`prefix_${message.guild.id}`)

let user = message.author 

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

const b1 = new MessageButton() 

.setStyle("url") 

.setLabel("")

.setEmoji("856408155184955402")

.setURL("https://discord.com/oauth2/authorize?client_id=765207268408033322&scope=bot&permissions=805314622")

const b2 = new MessageButton() 

.setStyle("url") 

.setLabel("")

.setEmoji("866556150044033064")

.setURL("https://space-giveaway.glitch.me/")

const b3 = new MessageButton() 

.setStyle("url") 

.setLabel("")

.setEmoji("856408019289767937")

.setURL("https://discord.gg/KZfAEjrPUF")

const b4 = new MessageButton() 

.setStyle("url") 

.setLabel("")

.setEmoji("856407998288101376")

.setURL("https://top.gg/bot/765207268408033322")

const embed = new Discord.MessageEmbed() 

.setColor("BLURPLE")

.setAuthor(`Merhaba, ${message.author.username}!`, message.author.avatarURL())

.setDescription(`<:slash:856408065817444352> Bu Sunucudaki Prefix\' im: 
**${prefix || "g."}**
<:backpack:856408019289767937> Rozetlerin: 
${owner || ""} ${yetkili || ""} ${mod || ""} ${dev || ""} ${partner || ""} ${early || ""} ${pre || "<:codesty_member:844468558523924542>"} ${gold || ""} ${destekci || ""} ${bug || ""} ${bug2 || ""} ${hediye || ""} ${beta || ""} ${onayli || ""}
<:coin:856798514540445706> Coin \'lerin: 
**${coin || "0"}**
`) 

.addField("Çekiliş Komutları <:blurple_tada:841709529217105941> [ `7` ] ", "`çekiliş-başlat`, `çekiliş-düzenle`, `çekiliş-sil`, `çekiliş-yeniden-çek`, `çekiliş-bitir`, `çekiliş-liste`, `oylama`") 

.addField("Bot Komutları <:bot1:856407903098372096><:bot2:856407883901698079> [ `9` ] ", "`profil`, `profil-ayarla`, `coin`, `günlük-coin`, `davet`, `ping`, `dbli`, `i`, `oy-durum`") 

.addField("Yetkili Komutları <:yetkili:873257181678534657> [ `19` ] ", "`prefix ayarla`, `prefix sıfırla`, `rolbilgi`, `gir`, `çık`, `yavaş-mod`, `sil`, `sa-as aç`, `sa-as-emoji aç`, `sa-as kapat`, `sa-as-emoji kapat`, `sa-as mesaj`, `ayarlar`, `yedek oluştur`, `yedek bilgi`, `yedek yükle`, `yapay-zeka aç`, `yapay-zeka kapat`, `buton-rol`")

.addField("Eğlence Komutları <:civi:873257230709981200> [ `20` ] ", "`atatürk`, `afk`, `avatar`, `play-store`, `steam`, `sor`, `yılbaşı`, `meme`, `hava-durumu`, `covid`, `youtube`, `ss`, `tdk`, `sunucu-bilgi`, `aşk-ölçer`, `ytt`, `poker`, `chess`, `betrayal`, `fishing`, `tkm`") 

.addField("Müzik Komutları <:ses:873257251748593675> [ `10` ]", "`play`, `stop`, `np`, `skip`, `queue`, `volume`, `pause`, `resume`, `remove`, `lyrics`")

.addField("Emoji Komutları <:sticker:856408129998028820> [ `8` ] ", "`emoji-ekle`, `emoji-rastgele <1/25>`, `emoji-rastgele <1/25> hareketli`, `emoji-rastgele <1/25> hareketsiz`, `emoji-liste`, `emoji-link`, `emoji-bilgi`, `emoji-ara`") 

.addField("Level Komutları <:roket:873257292634673192> [ `7` ] ", "`rank`, `leader-board`, `rank-ayarla`, `level-log aç <#kanal>`, `level-log kapat`, `level aç`, `level kapat`") 

.addField("Butonlar", "<:sw:856408155184955402> Davet linkim **|** <:emoji_41:866556150044033064> Websitem **|** <:backpack:856408019289767937> Destek Sunucum **|** <:star:856407998288101376> Oy linkim") 

.setFooter("Space Giveaway", client.user.displayAvatarURL())

.setImage("https://cdn.discordapp.com/attachments/843458021040455740/879340898385821736/PicsArt_08-23-02.40.37.jpg")

message.channel.send({

embed: embed, 

buttons: [b1, b2, b3, b4] 

})

} 

exports.conf = {

aliases: [] 

}

exports.help = {

name: "vecsodjvuisiuvhneuv" 

}