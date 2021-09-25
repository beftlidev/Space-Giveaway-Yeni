const Discord = require("discord.js");

const { createCanvas, loadImage } = require('canvas')

const db = require('croxydb');

const {MessageButton} = require("discord-buttons")

exports.run = async (client, message, args) => {

message.delete()

let kayıt = db.fetch(`kayıt_${message.guild.id}`);

if(!kayıt) return message.inlineReply('<:codesty_cross:844468546930606100> Kayıt özelliği kapalı!').then(msg => { msg.delete({ timeout: 10000 }) }).catch(console.error);

 

let basvuru = db.fetch(`kayıtkanal_${message.guild.id}`);

if(!basvuru) return message.inlineReply('<:codesty_cross:844468546930606100> Kayıt olma kanalı ayarlı değil!').then(msg => { msg.delete({ timeout: 10000 }) }).catch(console.error)

let kayıtrol = db.fetch(`kayıtrol_${message.guild.id}`);

if(!kayıtrol) return message.inlineReply('<:codesty_cross:844468546930606100> Kayıt olunca verilecek rol ayarlı değil!').then(msg => { msg.delete({ timeout: 10000 }) }).catch(console.error)

let kayıtsızrol = db.fetch(`kayıtsızrol_${message.guild.id}`);

if(!kayıtsızrol) return message.inlineReply('<:codesty_cross:844468546930606100> Kayıt olunca alınacak rol ayarlı değil!')

 

let chat = db.fetch(`kayıtchat_${message.guild.id}`);

if(!chat) return message.inlineReply('<:codesty_cross:844468546930606100> Chat kanalı ayarlı değil!').then(msg => { msg.delete({ timeout: 10000 }) }).catch(console.error)

 

if(message.channel.id !== basvuru) return message.inlineReply(`Bu Komudu sadece <#${basvuru}> kanalında kullanabilirsin!`)

let isim = args[0]

let yaş = args[1] 

if(!isim) return message.inlineReply("<:carpi:855750448711467058> Bir isim yazmalısın!").then(msg => { msg.delete({ timeout: 10000 }) }).catch(console.error)

if(!yaş) return message.inlineReply("<:carpi:855750448711467058> Bir yaş girmelisin!").then(msg => { msg.delete({ timeout: 10000 }) }).catch(console.error)

let user = message.author;

function random(randomFlag, min, max) {

  let birharf = "",

    range = min,

    harfler = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',

      'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',

      '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

  if (randomFlag) {

    range = Math.round(Math.random() * (max - min)) + min; // Any length

  }

  for (let i = 0; i < range; i++) {

    let pos = Math.round(Math.random() * (harfler.length - 1));

    birharf += harfler[pos];

  }

  return birharf;

}

const hersey = random(false, 6) //burayı değiştirebilirsin

const bg = await loadImage('http://www.yenislayt.com/upload/f7f6d7bafe.jpg')

//ctx.drawImage(bg, 0, 0);

//ctx.font = `100px "fontgirin"`

//ctx.fillText(hersey, 300, 275)

  

  const width = 400

    const height = 125

    const canvas = createCanvas(width, height)

    const context = canvas.getContext('2d')

    context.fillRect(0, 0, width, height)

    context.font = 'bold 60pt vCodes'

    context.textAlign = 'center'

    context.fillStyle = '#fff'

    context.fillText(hersey, 200, 90)

db.set(`onay_${message.author.id}`, hersey) // => message.author.id verisini data1 kullanımıyla 100 olarak ayarladık

const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'captcha.png'); 

  const embed = new Discord.MessageEmbed()

.setDescription("Kayıt olmak için aşağıdaki resimdeki kodu kanala yazınız.")

  .attachFiles(attachment)

  .setColor("YELLOW")

.setImage("attachment://captcha.png")

message.channel.send(embed).then(msg => { msg.delete({ timeout: 30000 }) }).catch(console.error)

  

  const filter = m => m.author.id === message.author.id;

	const collector = message.channel.createMessageCollector(filter, { max: Infinity });

	collector.on('collect', async (message) => {

    
    const answer = message.content

if(answer == db.fetch(`onay_${message.author.id}`)){
message.delete()
let rol = db.fetch(`kayıtrol_${message.guild.id}`)

let rol2 = db.fetch(`kayıtsızrol_${message.guild.id}`) 

    message.guild.members.cache.get(user.id).roles.add(rol) 

message.guild.members.cache.get(user.id).roles.remove(rol2)
    message.guild.members.cache.get(user.id).setNickname(`${isim} | ${yaş}`)

    const basarili = new Discord.MessageEmbed()

    .setColor('GREEN')

    .setTitle('Doğrulama Başarılı!')

    .setDescription('Başarı ile kayıt oldun!.')

    message.channel.send(basarili).then(msg => { msg.delete({ timeout: 10000 }) }).catch(console.error)

const haha = new Discord.MessageEmbed() 

.setDescription(`Sunucumuza Hoşgeldin! 
`) 
.setColor("BLURPLE") 
  

    client.channels.cache.get(chat).send(`<@${message.author.id}>`, haha)

  collector.stop(message.content);

} else {
message.delete()
    const err = new Discord.MessageEmbed()

    .setColor('RED')

    .setTitle('Hatalı Bilgi')

    .setDescription('Girilen bilgi yanlış! Lütfen tekrar deneyin.')

    message.channel.send(err).then(msg => { msg.delete({ timeout: 10000 }) }).catch(console.error)

}

    

    })

}

exports.conf = {

  aliases: ['verify'],

  permLevel: 0,

  kategori: "Eğlence",

};

exports.help = {

  name: 'kayıt-ol',

  description: 'Sunucuya girenlere isteğe bağlı Captcha yaptırır.',

  usage: 'verify',

};