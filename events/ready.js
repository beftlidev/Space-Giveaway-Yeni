const chalk = require('chalk');

const moment = require('moment');

const Discord = require('discord.js');

const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {

    client.user.setStatus('idle') //bura izliyor felan Gördüm sonra beyin yandı bende ya :/
 client.user.setPresence({ activity: { type: "LISTENING", name: `g.yardım | Sponsor: Nacsshost.com | Shard ID: [${client.shard.ids}/1] | g.davet`}, status: 'idle' })

   // client.user.setActivity(`🎁Greedy^ / 🚀!yardım/ 🌐!davet / 🇹🇷 Sunucu : ${client.guilds.cache.size}`);

 //    client.user.setActivity(`:triangular_flag_on_post: Greedy ^ | :arrows_counterclockwise: Sürüm : 1.2 | :arrow_up: Sunucu : ${client.guilds.cache.size}`);

    /*

var oyun = [

       

        "[🎖] Sizlerle Birlikte",

        "[📋] !yardım & !yenilikler",

        "[🎉] Greedy Dbl Onaylı g!oyver",

        "[❄] Yeni Yıl Ateşinde",

        "[🔒] Greedy Beta 1.2 ",

        "[🎁] Yeni Yılınız Kutlu olsun!",

        "[🛢] Greedy Veritabanı Artık Güncel! ",

        "[🇹🇷] Greedy Artık Türkçe !"

  

    ];

    setInterval(function() {

        var random = Math.floor(Math.random()*(oyun.length-0+1)+0);

        client.user.setActivity(oyun[random], "." );

        }, 2 * 2500);*/

    let komutlar = client.commands.size;

  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Aktif, Komutlar yüklendi!`);

  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: ${client.user.username} ismi ile giriş yapıldı!`);

 /* client.user.setStatus("dnd");

  client.user.setActivity(`Bot Yenilendi ${komutlar} kadar komut var`);*/

  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Oyun ismi ayarlandı!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Şu an ` + client.channels.cache.size + ` adet kanala, ` + client.guilds.cache.size + ` adet sunucuya ve ` + client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + ` kullanıcıya hizmet veriliyor!`);

};