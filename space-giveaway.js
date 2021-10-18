const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const client = new Discord.Client();
const ayarlar = require("./ayarlar.json");
const db = require("croxydb");
const akinator = require("discord-tr-akinator");
const { MessageButton } = require("discord-buttons");
require("discord-buttons")(client);
require("discord-slider")(client);
const Nuggies = require("nuggies");
const disbut = require("discord-buttons");
//require("./util/eventLoader")(client);
//deneme
require("./inlinereply.js");
const got = require("got");
const AutoPoster = require("topgg-autoposter");
const ap = AutoPoster(
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijc2NTIwNzI2ODQwODAzMzMyMiIsImJvdCI6dHJ1ZSwiaWF0IjoxNjE0MzY5NTkwfQ.WC8doV3KEhoWAInJEI4sOPMAJ-nDzWMfJgp8Tb0jqsI",
  client
);
ap.on("posted", () => {
  console.log("✨ Top.gg bilgiler gönderildi!");
});
const prefix = "g.";
client.commands = new Discord.Collection();
const fetch = "node-fetch";
const fs = require("fs");

const { createCanvas } = require("canvas");
client.makeid = length => {
  let text = "";

  const possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return text;
};

const path = require("path");

const { GiveawaysManager } = require("discord-giveaways");
const manager = new GiveawaysManager(client, {
  storage: "./çekilişler.json",
  updateCountdownEvery: 30000,
  default: {
    botsCanWin: false,
    embedColor: "GREEN",
    embedColorEnd: "RED",
    reaction: "🎉"
  }
});

client.giveawaysManager = manager;

client.giveawaysManager.on(
"giveawayReactionAdded", 
async (giveaway, reactor, messageReaction) => {
    if (reactor.user.bot) return;
    try {
      if(giveaway.extraData){
      await client.guilds.cache.get(giveaway.extraData.server).members.fetch(reactor.id)
      }
      reactor.send(
        new Discord.MessageEmbed()
          .setTimestamp()
          .setTitle("<:tik:804253394326913085> Çekilişe başarı ile katıldın!")
          .setDescription(
            `**${giveaway.prize}** Adlı Çekilişe Katıldın! 
[Çekilişe git!](https://discord.com/channels/${giveaway.guildID}/${giveaway.channelID}/${giveaway.messageID})`
          )
          .setFooter("Space Giveaway")
          .setTimestamp()
      );
    } catch (error) {
       
      messageReaction.users.remove(reactor.user);
      reactor.send( new Discord.MessageEmbed()
          .setTimestamp()
          .setTitle("<:carpi:855750448711467058> Çekiliş katılma iptal edildi!")
          .setDescription(
            `Çekilişe maalesef katılamadın. 
[Çekilişe git!](https://discord.com/channels/${giveaway.guildID}/${giveaway.channelID}/${giveaway.messageID})`
          )
          .setFooter("Space Giveaway")
      );
    }
  }
);

client.giveawaysManager.on('giveawayReactionRemoved', (giveaway, member, reaction) => {
  
       
     return member.send( new Discord.MessageEmbed()
          .setTimestamp()
          .setTitle('<:kalem:857937104323215360> Çekilişe katılımın çekildi!')
          .setDescription(
            `Çekiliş bitene kadar zamanın var o zaman içerisinde yeniden katılabilir sin! 
[Çekilişe git!](https://discord.com/channels/${giveaway.guildID}/${giveaway.channelID}/${giveaway.messageID}) `
          )
          .setFooter("Space Giveaway")
      );
});

client.giveawaysManager.on('endedGiveawayReactionAdded', (giveaway, member, reaction) => {
     reaction.users.remove(member.user);
     member.send(`**Hay aksi! Katıldığın çekiliş bitmiş!**`)
});

fs.readdir("./Komutlar/", (error, f) => {
  if (error) {
    return console.error(error);
  }
  let commandes = f.filter(f => f.split(".").pop() === "js");
  if (commandes.length <= 0) {
    return console.log("Aucune commande trouvée !");
  }

  commandes.forEach(f => {
    let commande = require(`./Komutlar/${f}`);
    console.log(`🚀 ${f} komut yüklendi!`);
    client.commands.set(commande.help.name, commande);
  });
});

fs.readdir("./events/", (error, f) => {
  if (error) {
    return console.error(error);
  }
  console.log(`🎉 ${f.length} event!`);

  f.forEach(f => {
    let events = require(`./events/${f}`);
    let event = f.split(".")[0];
    client.on(event, events.bind(null, client));
  });
});
client.on("message", message => {
  if (message.channel.type === "dm") return;
});

client.login(process.env.TOKEN);

client.on("message", message => {
  if (message.channel.id == "844812716899696640") {
    message.react("<a:cilginyialo:883942034656862218>");
    message.react("<a:crohaaa:883943139038085171>");
    message.react("<:aloyum:883948724802428959>");
  }
});
client.on("message", message => {
  if (message.channel.id == "848130151169392670") {
    message.react("<:blurplecheck:881423053245009990>");
    message.react("<:blurplecross:881423084651962439>");
  }
});

client.on("message", async (msg, member, guild) => {
  let saasm = db.fetch(`saasm_${msg.guild.id}`);
  let i = await db.fetch(`saas_${msg.guild.id}`);
  if (i === "açık") {
    if (msg.content.toLowerCase() === "sa") {
      //if (msg.content.toLowerCase() === 'Sa') {
      msg.inlineReply(
        `${saasm ||
          "Aleyküm Selam Hoşgeldin Kankam <a:nrp:821434879539281931>"}`
      );
    }
  }
});

client.on("message", async (msg, member, guild) => {
  let açıkmı = await db.fetch(`gold_${msg.author.id}`);
  if (açıkmı) {
    if (msg.content.toLowerCase() === "sa") {
      const embed = new Discord.MessageEmbed()
        .setTitle("Bir gold üye belirdi!")
        .setDescription(
          "Aleyküm Selam Hoşgeldin Gold Üye! <a:nrp:821434879539281931>"
        )
        .setColor("GOLD");
      msg.inlineReply(embed);
    }
  }
});

client.on("message", async (msg, member, guild) => {
  let i = await db.fetch(`saase_${msg.guild.id}`);
  if (i === "açık") {
    if (msg.content.toLowerCase() === "sa") {
      //if (msg.content.toLowerCase() === 'Sa') {
      msg.react("🅰️");
      msg.react("🇸");
    }
  }
});

client.on("message", async message => {
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || ayarlar.prefix;
  let kullanıcı = message.mentions.users.first() || message.author;
  let afkdkullanıcı = await db.fetch(`afk_${message.author.id}`);
  let afkkullanıcı = await db.fetch(`afk_${kullanıcı.id}`);
  let sebep = afkkullanıcı;
  if (message.author.bot) return;
  if (message.content.includes(`${prefix}afk`)) return;
  if (message.content.includes(`<@${kullanıcı.id}>`)) {
    if (afkdkullanıcı) {
      message.channel.send(
        `<:anket:841725447511474236> <@${message.author.id}> Sohbete yazı yazdığın için afk modundan çıkış yapıldı.`
      );
      db.delete(`afk_${message.author.id}`);
    }
    if (afkkullanıcı)
      return message.channel.send(
        `${message.author}\`${kullanıcı.tag}\` şu anda AFK. \n Sebep : \`${sebep}\``
      );
  }
  if (!message.content.includes(`<@${kullanıcı.id}>`)) {
    if (afkdkullanıcı) {
      message.channel.send(
        `<:anket:841725447511474236> <@${message.author.id}> Sohbete yazı yazdığın için afk modundan çıkış yapıldı.`
      );
      db.delete(`afk_${message.author.id}`);
    }
  }
});

client.on("message", async message => {
  const db = require("croxydb");
  const ai = require("@codare/codare.ai");
  let kanal = db.fetch(`yapayzekakanal_${message.guild.id}`);
  if (!kanal) return;
  if (message.channel.id !== kanal) return;
  if (message.author.bot == true) return;
  let soru = message.content;
  message.channel.startTyping();
  ai.sor(soru).then(iugur => {
    setTimeout(function() {
      return message.inlineReply(iugur);
    }, 1000);
    message.channel.stopTyping();
  });
});

client.on("message", async message => {
  let gold = db.fetch(`gold_${message.author.id}`);
  if (gold === "gold") {
    if (message.content.toLowerCase() === "sa") {
      message.inlineReply(
        "**Bir gold üye belirdi!. \nAleyküm selam Hoşgeldin Gold Üye.** "
      );
    } else {
      return;
    }
  }
});

client.setMaxListeners(50);

Nuggies.connect(
  ""
);

const Levels = require("discord-xp");

Levels.setURL(
  ""
);

client.on("message", async message => {
  if (!message.guild) return;

  if (message.author.bot) return;

  const randomXp = Math.floor(Math.random() * 9) + 1;
  let level = db.fetch(`level_${message.guild.id}`);
  const hasLeveledUp = await Levels.appendXp(
    message.author.id,
    message.guild.id,
    level || randomXp
  );

  if (hasLeveledUp) {
    const user = await Levels.fetch(message.author.id, message.guild.id);

    const embed = new Discord.MessageEmbed()
      .setDescription(`Tebrikler!, ${user.level} Leveline atladın! :tada:`)
      .setThumbnail(message.author.avatarURL({ dynamic: true, size: 2048 }));
    let levellog = db.fetch(`levellog_${message.guild.id}`);

    client.channels.cache
      .get(levellog || `${message.channel.id}`)
      .send(`${message.author}`, embed);
  }
});

client.on("ready", () => {
  console.log(`${client.user.tag} is online.`);
  const Ses = client.channels.cache.get("879958948038467614");
  if (Ses) Ses.join();
  Nuggies.giveaways.startAgain(client);
});

Nuggies.connect(
  ""
);

Nuggies.handleInteractions(client);

const talkedRecently = new Set();
client.on("clickButton", async (button,message) => {
  if (button.id === "Button3") {
await button.defer() 
     await button.clicker.member.roles.add("856580749948223510");

      await db.set(`onayli_${button.clicker.user.id}`, "<:verified:799571972727504896>");

      const evet = new Discord.MessageEmbed() 

.setDescription(`<:tik:804253394326913085> ${button.clicker.user.tag} Başarı ile onaylı kullanıcı oldun!`)

.setColor("GREEN")

await client.channels.cache.get("888856199670427658").send(evet)

    
  }

  if (button.id === "Button4") {
    await button.defer();
    
      await button.clicker.member.roles.add("866360260503535616");

      await db.set(`beta_${button.clicker.user.id}`, "<:beta:856408499025477632>");

const evet = new Discord.MessageEmbed() 

.setDescription(`<:tik:804253394326913085> ${button.clicker.user.tag} Başarı ile beta kullanıcı oldun!`)

.setColor("GREEN")

await client.channels.cache.get("888856199670427658").send(evet)

      
  }
  if (button.id === "meme") {
    if (talkedRecently.has(button.clicker.id)) {
      const embed = new Discord.MessageEmbed()

        .setColor("RED")

        .setDescription(
          `<:carpi:855750448711467058>  Her 3 saniyede bir yeni meme acabilirsin.!`
        );

      button.channel
        .send(embed)
        .then(msg => {
          msg.delete({ timeout: 3000 });
        })
        .catch(console.error);
    } else {
      await button.defer();
      const embed = new Discord.MessageEmbed();
      got("https://www.reddit.com/r/burdurland/random/.json").then(response => {
        const [list] = JSON.parse(response.body);

        const [post] = list.data.children;

        const permalink = post.data.permalink;

        const memeUrl = `https://reddit.com${permalink}`;

        const memeImage = post.data.url;

        const memeTitle = post.data.title;

        const memeUpvotes = post.data.ups;

        const memeNumComments = post.data.num_comments;

        let newmeme = new MessageButton()
          .setStyle("gray")
          .setLabel("Yeni Meme!")
          .setEmoji("857937104323215360")
          .setID("meme");
        const memed = new MessageButton()
          .setStyle("red")
          .setID("memedelete")
          .setEmoji("856408185845055498")
          .setLabel("Sil");

        let link = new MessageButton()

          .setURL(`${memeUrl}`)
          .setLabel("Meme Link")
          .setStyle("url");

        embed.setTitle(`${memeTitle}`);

        embed.setURL(`${memeUrl}`);

        embed.setColor("RANDOM");

        embed.setImage(memeImage);

        button.message.edit({
          embed: embed,

          buttons: [newmeme, memed, link]
        });
        talkedRecently.add(button.clicker.id);

        setTimeout(() => {
          talkedRecently.delete(button.clicker.id);
        }, 3000);
      });
    }
  }
  if (button.id === "memedelete") {
    await button.defer();
    button.message.delete();
  }
  if (button.id === "rank") {
    await button.defer();
    const rawLeaderboard = await Levels.fetchLeaderboard(button.guild.id, 5);
    const leaderboard = await Levels.computeLeaderboard(
      client,
      rawLeaderboard,
      true
    ); // We process the leaderboard.

    const lb = leaderboard.map(
      e =>
        `<:YTcountry:843872690917343253> ${e.position}. ${e.username}#${
          e.discriminator
        }\n<:star:856407998288101376> Level: ${
          e.level
        }\n<:backpack:856408019289767937> XP: ${e.xp.toLocaleString()}`
    );

    const rank = new Discord.MessageEmbed().setDescription(
      `<:roket:873257292634673192> **Leaderboard**:\n${lb.join("\n\n")}`
    );
    const osbir = new MessageButton()
      .setStyle("gray")
      .setID("rank")
      .setLabel("Leader Board")
      .setEmoji("873257292634673192")
      .setDisabled();
    const lbsil = new MessageButton()

      .setStyle("red")

      .setLabel("Sil")

      .setEmoji("856408185845055498")

      .setID("lbsil");
    button.message.edit(osbir);
    button.channel.send({ embed: rank, buttons: [lbsil] });
  }
  if (button.id === "lbsil") {
    button.message.delete();
  }
  if (button.id === "cekilisc") {
    await button.defer();
      
    const çekiliş = new MessageEmbed()
      .setColor("BLURPLE")

      .setTitle("<:blurple_tada:841709529217105941> Çekiliş Komutları [ `7` ]")

      .setDescription(
        `> **g.çekiliş-başlat** - Belirli sürede kazananda çekiliş başlatırsınız!
> **g.çekiliş-düzenle** - Başlatılan bir çekilişi düzenlemenize yardımcı olur.
> **g.çekiliş-sil** - Başlatılan bir çekilişi tamamen siler!
> **g.çekiliş-yeniden-çek** - Biten bir çekiliş kazanan yeniden belirler.
> **g.çekiliş-bitir** - Başlatılan bir çekilişi bitirir.
> **g.çekiliş-liste** - Sunucunuzdaki aktif tüm çekilişleri listeler.
> **g.oylama** - Oylama başlatırsınız.`
      )
      .setFooter("Space Giveaway", client.user.displayAvatarURL());

    const b1 = new MessageButton()
      .setStyle("gray")
      .setID("cekilisc")
      .setLabel("")
      .setEmoji("841709529217105941")
      .setDisabled();
    const b2 = new MessageButton()
      .setStyle("gray")
      .setID("kullanıcıc")
      .setLabel("")
      .setEmoji("863394738462916628");
    const b3 = new MessageButton()
      .setStyle("gray")
      .setID("yetkilic")
      .setLabel("")
      .setEmoji("873257181678534657");
    const b6 = new MessageButton()
      .setStyle("gray")
      .setID("levelc")
      .setLabel("")
      .setEmoji("873257292634673192");
    const anamenü = new MessageButton()
      .setStyle("green")
      .setID("anamenü")
      .setLabel("Ana Menü")
      .setEmoji("856408214315597834");
    const sil = new MessageButton()
      .setStyle("red")
      .setID("yardımsil")
      .setLabel("Sil")
      .setEmoji("856408185845055498");
    button.message.edit({
      embed: çekiliş,
      components: [
        {
          type: 1,
          components: [b1, b2, b3, b6]
        },
        {
          type: 1,
          components: [anamenü, sil]
        }
      ]
    });
 
  }
  if (button.id === "kullanıcıc") {
    await button.defer();
    const bot = new MessageEmbed()
      .setColor("BLURPLE")

      .setTitle("<:member:863394738462916628> Kullanıcı Komutları [ `17` ]")

      .setDescription(
        `> **g.profil** - Profilinize bakarsınız.
> **g.profil-ayarla** - Profilinizi ayarlarsınız.
> **g.coin** - Coininize bakarsınız.
> **g.günlük-coin** - Günlük coin kazanırsınız.
> **g.davet** - Botun davet linkini atar.
> **g.ping** - Botun pingine bakarsınız.
> **g.dbli** - Dbl istatistik gösterir.
> **g.i** - Botun istatisstiklerini atar.
> **g.oy-durum** - Bota oy verip vermediğinizi kontrol edersiniz.
> **g.atatürk** - Atatürk gif atar.
> **g.avatar** - Avatar atar.
> **g.meme** - Meme atar.
> **g.youtube** - Youtube kanal ararsınız.
> **g.tdk** - Tdkda kelime ararsınız.
> **g.sunucu-bilgi** - Sunucu hakkında bilgi verir.
> **g.aşk-ölçer** - Aşk ölçer 2000!`
      )
      .setFooter("Space Giveaway", client.user.displayAvatarURL());

    const b1 = new MessageButton()
      .setStyle("gray")
      .setID("cekilisc")
      .setLabel("")
      .setEmoji("841709529217105941");
    const b2 = new MessageButton()
      .setStyle("gray")
      .setID("kullanıcıc")
      .setLabel("")
      .setEmoji("863394738462916628")
      .setDisabled();
    const b3 = new MessageButton()
      .setStyle("gray")
      .setID("yetkilic")
      .setLabel("")
      .setEmoji("873257181678534657");
    const b6 = new MessageButton()
      .setStyle("gray")
      .setID("levelc")
      .setLabel("")
      .setEmoji("873257292634673192");
    const anamenü = new MessageButton()
      .setStyle("green")
      .setID("anamenü")
      .setLabel("Ana Menü")
      .setEmoji("856408214315597834");
    const sil = new MessageButton()
      .setStyle("red")
      .setID("yardımsil")
      .setLabel("Sil")
      .setEmoji("856408185845055498");
    button.message.edit({
      embed: bot,
      components: [
        {
          type: 1,
          components: [b1, b2, b3, b6]
        },
        {
          type: 1,
          components: [anamenü, sil]
        }
      ]
    });
  }
  if (button.id === "yetkilic") {
    await button.defer();
    const yetkili = new MessageEmbed()
      .setColor("BLURPLE")

      .setTitle("<:yetkili:873257181678534657> Yetkili Komutları [ `23` ]")

      .setDescription(
        `> **g.prefix ayarla** - Prefix ayarlarsınız.
> **g.prefix sıfırla** - Prefix sıfırlarsınız.
> **g.rolbilgi** - Rol hakkında bilgi alırsınız.
> **g.yavaş-mod** - Yavaş mod ayarlarsınız.
> **g.sil** - Belirli miktarda mesaj silersiniz.
> **g.sa-as aç** - Sa as açarsınız. 
> **g.sa-as-emoji aç** - Sa as emoji açarsınız.
> **g.sa-as kapat** - Sa as kapatırsınız.
> **g.sa-as-emoji kapat** - Sa as emoji kapatırsınız.
> **g.sa-as mesaj** - Sa as emoji ayarlarsınız.
> **g.kayıt-ayarla** - Kayıt sistemini ayarlarsınız. 
> **g.kayıt-ol** - Kayıt olur sunuz. 
> **g.yapay-zeka aç** - Yapay zeka açarsınız.
> **g.yapay-zeka kapat** - Yapay zeka kapatırsınız.
> **g.buton-rol** - Buton rol ayarlarsınız.
> **g.buton-rol-text ayarla** - Buton rol text ayarlarsınız. 
> **g.buton-rol-text kapat** - Buton rol text kapatırsınız. 
> **g.ticket-oluştur** - Ticket ayarlarsınız.
> **g.ticket-text ayarla** - Ticket text ayarlarsınız. 
> **g.buton-rol-text kapat** - Ticket text kapatırsınız. 
> **g.emoji-ekle** - Sunucuya emoji eklersiniz.
> **g.emoji-link** - Yazdığınız emojinin linkini verir. 
> **g.emoji-bilgi** - Yazdığınız emoji hakkında bilgi verir. `
      )
      .setFooter("Space Giveaway", client.user.displayAvatarURL());

    const b1 = new MessageButton()
      .setStyle("gray")
      .setID("cekilisc")
      .setLabel("")
      .setEmoji("841709529217105941");
    const b2 = new MessageButton()
      .setStyle("gray")
      .setID("kullanıcıc")
      .setLabel("")
      .setEmoji("863394738462916628");
    const b3 = new MessageButton()
      .setStyle("gray")
      .setID("yetkilic")
      .setLabel("")
      .setEmoji("873257181678534657")
      .setDisabled();
    const b6 = new MessageButton()
      .setStyle("gray")
      .setID("levelc")
      .setLabel("")
      .setEmoji("873257292634673192");
    const anamenü = new MessageButton()
      .setStyle("green")
      .setID("anamenü")
      .setLabel("Ana Menü")
      .setEmoji("856408214315597834");
    const sil = new MessageButton()
      .setStyle("red")
      .setID("yardımsil")
      .setLabel("Sil")
      .setEmoji("856408185845055498");
    button.message.edit({
      embed: yetkili,
      components: [
        {
          type: 1,
          components: [b1, b2, b3, b6]
        },
        {
          type: 1,
          components: [anamenü, sil]
        }
      ]
    });
  
  }
  if (button.id === "levelc") {
    await button.defer();
    const level = new MessageEmbed()
      .setColor("BLURPLE")

      .setTitle("<:roket:873257292634673192> Level Komutları [ `7` ]")

      .setDescription(
        `> **g.rank** - Rankınızı gösterir.
> **g.leader-board** - Leader board açar.
> **g.rank-ayarla** - Rank ayarlarsınız.
> **g.level-log aç <#kanal>** - Level log ayarlarsınız.
> **g.level-log kapat** - Level log kapatırsınız.
> **g.level aç** - Leveli açarsınız.
> **g.level kapat** - Leveli kapatırsınız.`
      )
      .setFooter("Space Giveaway", client.user.displayAvatarURL());

    const b1 = new MessageButton()
      .setStyle("gray")
      .setID("cekilisc")
      .setLabel("")
      .setEmoji("841709529217105941");
    const b2 = new MessageButton()
      .setStyle("gray")
      .setID("kullanıcıc")
      .setLabel("")
      .setEmoji("863394738462916628");
    const b3 = new MessageButton()
      .setStyle("gray")
      .setID("yetkilic")
      .setLabel("")
      .setEmoji("873257181678534657");
    const b6 = new MessageButton()
      .setStyle("gray")
      .setID("levelc")
      .setLabel("")
      .setEmoji("873257292634673192")
      .setDisabled();
    const anamenü = new MessageButton()
      .setStyle("green")
      .setID("anamenü")
      .setLabel("Ana Menü")
      .setEmoji("856408214315597834");
    const sil = new MessageButton()
      .setStyle("red")
      .setID("yardımsil")
      .setLabel("Sil")
      .setEmoji("856408185845055498");
    button.message.edit({
      embed: level,
      components: [
        {
          type: 1,
          components: [b1, b2, b3, b6]
        },
        {
          type: 1,
          components: [anamenü, sil]
        }
      ]
    });
  }
  if (button.id === "anamenü") {
    await button.defer();
    const embed = new Discord.MessageEmbed()
      .setColor("BLURPLE")
      .setDescription(
        `<:kalem:857937104323215360> Butonlara tıklayarak istediğin kategori hakkında yardım alabilirsin.
<:blurple_tada:841709529217105941> Çekiliş Komutlarını denemeye ne dersin?
<:emoji_69:841947953278484480> Hmmm burda güzel şeyler gözüküyor!
<:yetkili:873257181678534657> Sunucun daha güzel gözükebilir.
<:civi:873257230709981200> Uuuuu luna parkamı geldik!
<:roket:873257292634673192> Level kasmak güzel olabilir!
                        `
      )
      .setFooter("Space Giveaway", client.user.displayAvatarURL())
      .setImage(
        "https://cdn.discordapp.com/attachments/843458021040455740/879340898385821736/PicsArt_08-23-02.40.37.jpg"
      );
    const b1 = new MessageButton()
      .setStyle("gray")
      .setID("cekilisc")
      .setLabel("")
      .setEmoji("841709529217105941");
    const b2 = new MessageButton()
      .setStyle("gray")
      .setID("kullanıcıc")
      .setLabel("")
      .setEmoji("863394738462916628");
    const b3 = new MessageButton()
      .setStyle("gray")
      .setID("yetkilic")
      .setLabel("")
      .setEmoji("873257181678534657");
    const b6 = new MessageButton()
      .setStyle("gray")
      .setID("levelc")
      .setLabel("")
      .setEmoji("873257292634673192");
    const anamenü = new MessageButton()
      .setStyle("green")
      .setID("anamenü")
      .setLabel("Ana Menü")
      .setEmoji("856408214315597834")
      .setDisabled();
    const sil = new MessageButton()
      .setStyle("red")
      .setID("yardımsil")
      .setLabel("Sil")
      .setEmoji("856408185845055498");
    button.message.edit({
      embed: embed,
      components: [
        {
          type: 1,
          components: [b1, b2, b3, b6]
        },
        {
          type: 1,
          components: [anamenü, sil]
        }
      ]
    });
  }
  if (button.id === "yardımsil") {
    await button.defer();
    const sil = new MessageEmbed()
      .setDescription("Yardım menüsünü silmek istediğinden emin misin?")
      .setColor("RED");
    const r1 = new MessageButton()
      .setStyle("green")
      .setID("yardımevet")
      .setLabel("Evet")
      .setEmoji("881423053245009990");
    const r2 = new MessageButton()
      .setStyle("red")
      .setID("yardımhayır")
      .setLabel("Hayır")
      .setEmoji("881423084651962439");
    button.message.edit({ embed: sil, buttons: [r1, r2] });
  }
  if (button.id === "yardımevet") {
    await button.defer();
    button.message.delete();
  }
  if (button.id === "yardımhayır") {
    await button.defer();
    const embed = new Discord.MessageEmbed()
      .setColor("BLURPLE")

      .setDescription(
        `<:kalem:857937104323215360> Butonlara tıklayarak istediğin kategori hakkında yardım alabilirsin.
<:blurple_tada:841709529217105941> Çekiliş Komutlarını denemeye ne dersin?
<:member:863394738462916628> Hmmm burda güzel şeyler gözüküyor!
<:yetkili:873257181678534657> Sunucun daha güzel gözükebilir.
<:roket:873257292634673192> Level kasmak güzel olabilir!
                        `
      )
      .setFooter("Space Giveaway", client.user.displayAvatarURL())
      .setImage(
        "https://cdn.discordapp.com/attachments/843458021040455740/879340898385821736/PicsArt_08-23-02.40.37.jpg"
      );
    const b1 = new MessageButton()
      .setStyle("gray")
      .setID("cekilisc")
      .setLabel("")
      .setEmoji("841709529217105941");
    const b2 = new MessageButton()
      .setStyle("gray")
      .setID("kullanıcıc")
      .setLabel("")
      .setEmoji("863394738462916628");
    const b3 = new MessageButton()
      .setStyle("gray")
      .setID("yetkilic")
      .setLabel("")
      .setEmoji("873257181678534657");
    const b6 = new MessageButton()
      .setStyle("gray")
      .setID("levelc")
      .setLabel("")
      .setEmoji("873257292634673192");
    const anamenü = new MessageButton()
      .setStyle("green")
      .setID("anamenü")
      .setLabel("Ana Menü")
      .setEmoji("856408214315597834")
      .setDisabled();
    const sil = new MessageButton()
      .setStyle("red")
      .setID("yardımsil")
      .setLabel("Sil")
      .setEmoji("856408185845055498");
    button.message.edit({
      embed: embed,
      components: [
        {
          type: 1,
          components: [b1, b2, b3, b6]
        },
        {
          type: 1,
          components: [anamenü, sil]
        }
      ]
    });
  }

  if (button.id == "open_ticket") {
    await button.defer();

    let Category = db.fetch(`ticket_kategori_${button.guild.id}`);

    let Role = db.fetch(`ticket_rol_${button.guild.id}`);

    

    const ticketChannel = await button.guild.channels.create(
      `${button.clicker.user.tag}`,
      {
        name: "ticket",

        parent: Category,

        type: "text"
      }
    );

    ticketChannel.createOverwrite(button.clicker.user.id, {
      VIEW_CHANNEL: true,
      SEND_MESSAGES: true
    });

    ticketChannel.createOverwrite(Role, {
      VIEW_CHANNEL: true,
      SEND_MESSAGES: true
    });

    ticketChannel.createOverwrite(button.guild.id, { VIEW_CHANNEL: false });
    const ticketEmbed = new MessageEmbed()
      .setColor("#5865F2")
      .setDescription(
        `<:tik:804253394326913085> ${button.clicker.user} Merhaba!
Ticket silmek için aşağıdaki butona tıklayabilirsiniz.`
      );

    let option = new MessageButton()

      .setStyle("gray")

      .setLabel("Ticket Kapat")

      .setEmoji("856408185845055498")

      .setID("close_ticket");
    
    ticketChannel.send({embed: ticketEmbed, button: option });
  }
  if (button.id == "close_ticket") {
    await button.defer();

    button.channel.send(
      "<:tik:804253394326913085> Ticket 15 saniye sonra kapatılacak..."
    );

    setTimeout(() => {
      button.channel.delete();
    }, 15000);
  }
  if (button.id == "iyenile") {
    const moment = require("moment");

const os = require('os');
    require("moment-duration-format");
    const promises = [
client.shard.fetchClientValues('guilds.cache.size'),

	client.shard.broadcastEval('this.guilds.cache.reduce((acc, guild) => acc + guild.memberCount, 0)'),

];

  Promise.all(promises)

	.then(results => {

		const totalGuilds = results[0].reduce((acc, guildCount) => acc + guildCount, 0);

		const totalMembers = results[1].reduce((acc, memberCount) => acc + memberCount, 0);

const duration = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");

  let embed = new Discord.MessageEmbed()

    .setColor("RANDOM") 
  .setAuthor("İstatistik") 

    .addField("<:sw:856408155184955402> Toplam sunucu", totalGuilds) 

    .addField("<:member:856408299229151242> Toplam Kullanıcı", totalMembers) 

    .addField("<:emoji_41:866556150044033064> Pingim", client.ws.ping) 

    .addField("<:emoji_41:866556150044033064> Shard ID", `${client.shard.ids} / 1`) 

    .addField("<:discordjs:886987041437519972> Discord.js Sürümü", `${Discord.version}`, true)

    .addField("<a:vds:886987302428102686> Bellek Kullanımı", `${(process.memoryUsage().heapUsed / 2024 / 2024).toFixed(2)} MB`, true)

    .addField(`<a:uptime:886987717282500629> Uptime`, `${duration}`, true)

    .addField(`<:pusula:856408214315597834> Toplam Komut Sayısı`, `**${client.commands.size}**`, true)

    .addField("<:owner:850625005548470273> Yapımcım & Geliştirici", "<@753842258457002036>")
.setFooter(`Son yenilenme ->`)

.setTimestamp()
   const b1 = new MessageButton() 

.setStyle("gray")

.setLabel("Yenile") 

.setEmoji("873257273236029491") 

.setID("iyenile")

button.message.edit({ embed: embed, 

buttons: [b1] 

}) 

}) 
   } 
  
  if (button.id == "dmyardım") {

    const embed = new Discord.MessageEmbed()

    .setColor("BLURPLE")

    .setDescription(`<:kalem:857937104323215360> Butonlara tıklayarak istediğin kategori hakkında yardım alabilirsin.
<:blurple_tada:841709529217105941> Çekiliş Komutlarını denemeye ne dersin?
<:member:863394738462916628> Hmmm burda güzel şeyler gözüküyor!
<:yetkili:873257181678534657> Sunucun daha güzel gözükebilir.
<:roket:873257292634673192> Level kasmak güzel olabilir!
    `) 

    .setFooter("Space Giveaway", client.user.displayAvatarURL())

.setImage("https://cdn.discordapp.com/attachments/843458021040455740/879340898385821736/PicsArt_08-23-02.40.37.jpg")

   const b1 = new MessageButton()

   .setStyle("gray")

   .setID("cekilisc")

   .setLabel("")

   .setEmoji("841709529217105941")
   const b2 = new MessageButton()

   .setStyle("gray")

   .setID("kullanıcıc")

   .setLabel("")

   .setEmoji("863394738462916628")

   const b3 = new MessageButton()

   .setStyle("gray")

   .setID("yetkilic")

   .setLabel("")

   .setEmoji("873257181678534657")


   const b6 = new MessageButton()

   .setStyle("gray")

   .setID("levelc")

   .setLabel("")

   .setEmoji("873257292634673192")
   const anamenü = new MessageButton()

   .setStyle("green")

   .setID("anamenü")

   .setLabel("Ana Menü")

   .setEmoji("856408214315597834")
.setDisabled();

   const sil = new MessageButton()

   .setStyle("red")

   .setID("yardımsil")

   .setLabel("Sil")

   .setEmoji("856408185845055498")

   
    
    const ğğ = new Discord.MessageEmbed() 

.setDescription("<:tik:804253394326913085> Yardım Menüsü dm üzerinden gönderildi!") 

.setColor("GREEN") 

const dm = new MessageButton() 

.setStyle("gray")

.setLabel("Kanal")

.setEmoji("888415406937755688")

.setID("kanalyardım")

.setDisabled()

const kanal = new MessageButton() 

.setStyle("gray")

.setLabel("Kanal")

.setEmoji("888415406937755688")

.setID("kanalyardım")

.setDisabled()

   button.message.edit({embed: ğğ 
}) 
button.clicker.user.send({ embed: embed,

    components: [

      {

        type: 1,

        components: [b1, b2, b3, b6],

      },

      {

        type: 1,

        components: [anamenü, sil],

      }]

    })
}
  
  if (button.id == "kanalyardım") {

await button.defer() 

    const embed = new Discord.MessageEmbed()

    .setColor("BLURPLE")

    .setDescription(`<:kalem:857937104323215360> Butonlara tıklayarak istediğin kategori hakkında yardım alabilirsin.
<:blurple_tada:841709529217105941> Çekiliş Komutlarını denemeye ne dersin?
<:member:863394738462916628> Hmmm burda güzel şeyler gözüküyor!
<:yetkili:873257181678534657> Sunucun daha güzel gözükebilir.
<:roket:873257292634673192> Level kasmak güzel olabilir!
    `)

    .setFooter("Space Giveaway", client.user.displayAvatarURL())

.setImage("https://cdn.discordapp.com/attachments/843458021040455740/879340898385821736/PicsArt_08-23-02.40.37.jpg")

   const b1 = new MessageButton()

   .setStyle("gray")

   .setID("cekilisc")

   .setLabel("")

   .setEmoji("841709529217105941")

   const b2 = new MessageButton()

   .setStyle("gray")

   .setID("kullanıcıc")

   .setLabel("")

   .setEmoji("863394738462916628")
   const b3 = new MessageButton()

   .setStyle("gray")

   .setID("yetkilic")

   .setLabel("")

   .setEmoji("873257181678534657")

   const b6 = new MessageButton()

   .setStyle("gray")

   .setID("levelc")

   .setLabel("")

   .setEmoji("873257292634673192")

   const anamenü = new MessageButton()

   .setStyle("green")

   .setID("anamenü")

   .setLabel("Ana Menü")

   .setEmoji("856408214315597834")
.setDisabled();

   const sil = new MessageButton()

   .setStyle("red")

   .setID("yardımsil")

   .setLabel("Sil")

   .setEmoji("856408185845055498")
   button.message.edit({ embed: embed,

    components: [

      {

        type: 1,

        components: [b1, b2, b3, b6],

      },

      {

        type: 1,

        components: [anamenü, sil],

      }]

    })

} 
});

client.on("clickButton", button => {
  Nuggies.buttonroles.buttonclick(client, button);
});
client.on("clickMenu", menu => {
  Nuggies.dropclick(client, menu);
});
client.on("clickButton", button => {
  Nuggies.buttonclick(client, button);
});
