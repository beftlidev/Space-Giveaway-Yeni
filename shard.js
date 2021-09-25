const Discord = require('discord.js');

const client = new Discord.Client()

const express = require('express');

const ayarlar = require('./ayarlar.json');

const captain = new Discord.ShardingManager('./space-giveaway.js', {

    totalShards: 1,

    token: (process.env.TOKEN)//sa kodır abler

});

captain.on('shardCreate', shard => {

  

  console.log(`${shard.id+1} IDli Başlatıldı ve Kullanıma Hazır.`)

    const webhook = new Discord.WebhookClient("845151474308218900","CX0hno74tQ0tBlFnM0A4LehLzwvSw0hq2Ko0VNy-RFNyFvmwFkh5p5-1vAx5GNMdd7qX")

const embed1 = new Discord.MessageEmbed() 

 .setColor("RED") 

.setTitle("Space Giveaway Shard") 

 .setDescription(`<a:bytcec:818712678146113567> Shard **${shard.id+1}/${shard.id+1} [[Bağlanılıyor]](https://discord.gg/KZfAEjrPUF)** \n<a:1_:818444321287176243> Space Giveaway Discord'a Bağlanıyor...`)

webhook.send(embed1)

    setTimeout(() => {

  const webhook = new Discord.WebhookClient("845151474308218900","CX0hno74tQ0tBlFnM0A4LehLzwvSw0hq2Ko0VNy-RFNyFvmwFkh5p5-1vAx5GNMdd7qX")
const embed = new Discord.MessageEmbed() 
.setColor("BLURPLE") 

.setTitle("Space Giveaway Shard") 

 .setDescription(`<a:check:844812514529509386> Shard **${shard.id+1}/${shard.id+1} [[Bağlanıldı]](https://discord.gg/KZfAEjrPUF)** \n<a:1_:818444321287176243> Space Giveaway Discord'a Bağlandı ve kullanıma hazır!!`)

webhook.send(embed)

  }, 3000)

});

// WebHook Oluşturup ID ve token gir

setTimeout(() => {

    captain.broadcastEval("process.exit()");

}, 8600000);

captain.spawn();
