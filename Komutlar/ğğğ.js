const Discord = require('discord.js');
const {MessageButton} = require("discord-buttons")
exports.run = async(client, message, args) => {

if(message.author.id !== "753842258457002036") if(message.author.id !== "753842258457002036") return message.channel.send("<:carpi:855750448711467058> Bu komut <@753842258457002036>' a özeldir!!")

const mesaj = new Discord.MessageEmbed()

.setColor("BLURPLE")

.setDescription(`🇹🇷 - Merhaba! Aşağıdaki butonlara tıklayarak istediğiniz özelliği elde edebilir\' siniz. 
<:kalem:857937104323215360> [ Verified ] - Onaylı kullanıcı olabilir\' siniz. 
<:kalem:857937104323215360> [ Beta ] - Beta kullanıcı olabilir\' siniz. 

🇪🇺 - Hello! You can get the feature you want by clicking on the buttons below. 
<:kalem:857937104323215360> [ Verified ] - You can be an approved user. 
<:kalem:857937104323215360> [ Beta ] - You can be a beta user. 
`) 

.setFooter("Space Giveaway", client.user.displayAvatarURL())

.setImage("https://cdn.discordapp.com/attachments/843458021040455740/879340898385821736/PicsArt_08-23-02.40.37.jpg")

let verified = new MessageButton()

      .setStyle("gray")

      .setLabel("Verified!")

      .setEmoji("804253394326913085")

      .setID("Button3");

    let beta = new MessageButton()

      .setStyle("gray")

      .setLabel("Beta!")

      .setEmoji("856408499025477632")

      .setID("Button4");

message.channel.send({ embed: mesaj, 

buttons: [verified, beta] }) 

};

exports.conf = {

aliases: []

};

exports.help = {

name: "ğğğ"

};