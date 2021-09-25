const Discord = require('discord.js');

const sayfalar = [

  {emojiad: "codesty_announcement", emojiid: "844468552920858624", kategori: "Duyurular!", komutlar: `
> **__Güncellemeler__**
12/Haziran 19:00 Komutlar güncellendi! 
Çoğu Komuta Buton Eklendi! 
`},
  
  {emojiad: "blurple_tada", emojiid: "841709529217105941", kategori: "Çekiliş Komutları", komutlar: `
> **g.çekiliş-başlat** - Çekiliş Başlatırsınız. 
> **g.çekiliş-düzenle** - Çekiliş düzenle siniz. 
> **g.çekiliş-sil** - Çekiliş silersiniz. 
> **g.çekiliş-yeniden-çek** - Çekiliş kazanan yeniden çekersiniz. 
> **g.çekiliş-bitir** - Çekiliş bitirirsiniz.
> **g.çekiliş-liste** - Çekiliş' leri listeleriniz. 
> **g.oylama** - Oylama başlatırsınız. 
  `},

  {emojiad: "emoji_69", emojiid: "841947953278484480", kategori: "Bot Komutları", komutlar: `
> **g.davet** - Botun davet linkini gönderir. 
> **g.ping** - Botun pingini gösterir. 
> **g.öneri** - Bot için öneri verirsiniz. 
> **g.dbli** - [Top.gg](https://top.gg/bot/765207268408033322) Bilgilerini gösterir. 
> **g.sponsor** - Sponsorumuzu gösterir. 
> **g.i** - Botun istatistik' lerini gösterir. 
> **g.oy-durum** - [Top.gg](https://top.gg/bot/765207268408033322) Oy verip vermediğinizi gösterir. 
`},

  {emojiad: "emoji_68", emojiid: "841947082076192778", kategori: "Yetkili Komutları", komutlar: `
> **g.prefix ayarla** - Prefix ayarlarsınız.
> **g.prefix sıfırla** - Prefix sıfırlarsınız.
> **g.nuke** - Nuke atarsınız. 
> **g.rolbilgi** - Belirttiğiniz rol hakkında bilgi alırsınız. 
> **g.gir** -  Bulunduğunuz sesli kanala girer. 
> **g.çık** - Girmiş olduğu sesli kanaldan çıkar. 
> **g.yavaş-mod** - Kullanılan kanalda yavaş mod açarsınız. 
> **g.emoji-ekle** - Emoji eklersiniz. 
> **g.sil** - <0/100> Arasında mesaj silersiniz.
> **g.sa-as** -  Sa as mesaj açarsınız. 
> **g.sa-as-emoji** - Sa as emoji açarsınız. 
> **g.ayarlar** - Ayarları gösterir. 
`},

  {emojiad: "YTvids", emojiid: "843872686345551873", kategori: "Yedek Komutları", komutlar: `
> **g.yedek oluştur** - Yedek oluşturursunuz.
> **g.yedek bilgi** - Oluşturduğunuz yedek hakkında bilgi alırsınız. 
> **g.yedek yükle** - Oluşturdupunuz yedeği geri yüklersiniz.
 `},

  {emojiad: "logo_komutlar", emojiid: "841709516474679336", kategori: "Logo Komutları", komutlar: `
> **g.altın** - Altın logo oluşturur. 
> **g.elmas** - Elmas logo oluşturur. 
> **g.neonmavi** - Neonmavi logo oluşturur. 
> **g.afrika** - Afrika logo oluşturur. 
> **g.arctic** - Arctic logo oluşturur. 
> **g.bubble** - Bubble logo oluşturur. 
  `},

  {emojiad: "SpaceGiveaway", emojiid: "798525686142468136", kategori: "Yapay Zeka Komutları", komutlar: `
> **g.yapay-zeka aç** - Yapay zeka açarsınız. 
> **g.yapay-zeka kapat** - Yapay zeka kapatırsınız.
  `},
  
  {emojiad: "emoji_84", emojiid: "847799091886161970", kategori: "Müzik Komutları", komutlar: `
> **g.play** - Müzik açarsınız. 
> **g.stop** - Müziği durdurur sunuz.
> **g.np** - Çalan müzik hakkında bilgi alırsınız. 
> **g.skip** - Çalan şarkıyı geçersiniz. 
> **g.queue** - Şarkı sırasına bakarsınız. 
> **g.volume** - Sesi ayarlarsınız.
> **g.pause** - Müziği duraklatırsınız. 
> **g.resume** - Müziği geri açarsınız. 
> **g.remove** - Sıradan şarkı çıkarırsınız. 
> **g.lyrics** -  Şarkı sözlerine bakarsınız.
  `},
  
  {emojiad: "tembel", emojiid: "802431611848228904", kategori: "Eğlence Komutları", komutlar: `
> **g.atatürk** - Atatürk gif atar. 
> **g.afk** - Afk moduna girersiniz. 
> **g.avatar** - Avatarınızı veya etiketlediğiniz kişinin avatar atar. 
> **g.play-store** - Yazdığınız uygulama hakkında play store' daki bilgilerini verir. 
> **g.steam** - Yazdığınız oyun hakkında steam' dan bilgi verir. 
> **g.mc-skin** - Yazdığın Minecraft oyuncu skin atar. 
> **g.server-icon** - Sunucu icon atar. 
> **g.sor** - Bota soru sorarsınız. 
> **g.yazıtura** - Yazı tura atarsınız. 
> **g.piyango** - Şanslı isen oyna. 
> **g.yılbaşı** - Yılbaşına kalan süre söyler. 
> **g.hesapla** - Matematik problem çözer. 
> **g.fbi** - Fbi gelir. 
> **g.kahve** - Kahve ısmarlarsınız.
> **g.wasted** - Pp' nize wasted efekti katar. 
> **g.mc-kasa** - MC kasa açarsınız. 
> **g.mc-effect** - MC effect kasası açarsınız. 
> **g.meme** - Random Meme atar. 
> **g.hava-durumu** - Yazdığınız yerin hava durumunu gösterir. 
> **g.random-anime** - Random anime pp atar. 
> **g.mc-kafa** - Yazdığınız Minecraft oyuncu kafasını atar. 
> **g.covid** - Yazdığınız yerin covid hakkındaki bilgisini verir. 
> **g.youtube** - Yazdığınız YouTube kanal hakkında bilgi verir. 
> **g.ss** - Yazdığınız url ye girip ss atar. 
> **g.tdk** - Yazdığınız kelimeyi tdk' da arar.
> **g.triggered** - Pp' nizi triggered efekti katar.
> **g.trash** - Etiketlediğiniz kişiye çöp efekti katar.
> **g.batslap** - Etiketlediğiniz kişiye batslap efekti katar.
  `},
  
  {emojiad: "game", emojiid: "842658421231845408", kategori: "Oyun Komutları", komutlar: `
> **g.snake** - Yılan oyunu oynarsınız. 
> **g.connect-four** - Dört bağla oynarsınız. 
> **g.xox** - Xox oynarsınız. 
> **g.tkm** - Taş kağıt makas oynarsınız. 
> **g.akinator** - Akinatör oynarsınız.  
> **g.type-fast** - Hızlı yaz oyunu oynarsınız. 
> **g.blackjack** - Blackjack Oynarsınız. 
> **g.pokemon** - Pokemon oyunu oynarsınız.
`},
  
  {emojiad: "bug_hunter", emojiid: "763282944637927434", kategori: "Aktivite Komutları", komutlar: `
> **g.ytt** - YouTube Together açarsınız. 
> **g.poker** - Poker açarsınız. 
> **g.chess** - Chess açarsınız. 
> **g.betrayal** - Betrayal açarsınız. 
> **g.fishing** - Fishing açarsınız 
  `},
  
  {emojiad: "Para", emojiid: "847799588462657536", kategori: "Ekonomi Komutları", komutlar: `
> **g.banka hesap oluştur** - Banka hesap açarsınız. 
> **g.banka hesap bilgi** - Banka hesapınıza bakarsınız. 
> **g.banka hesap kapat** - Banka hesap kapatırsınız. 
> **g.günlük** - Günlük ödül alırsınız. 
> **g.kazan** -  Kazan oyunu oynarsınız. 
> **g.slot** - Slot oyunu oynarsınız. 
> **g.çalış** - Çalışırsınız. 
  `},
  
  {emojiad: "minehert", emojiid: "763281229076103179", kategori: "Hayvan Komutları", komutlar: `
> **g.kedi** - Kedi fotoğraf atar. 
> **g.koala** - Koala fotoğraf atar. 
> **g.kuş** - Kuş fotoğraf atar. 
> **g.köpek** - Köpek fotoğraf atar. 
> **g.panda** -  Panda fotoğraf atar. 
> **g.tilki** - Tilki fotoğraf atar. 
  `},
  
  {emojiad: "anket", emojiid: "841725447511474236", kategori: "Not Komutları", komutlar: `
> **g.not-al** - Not alırsınız. 
> **g.not-sil** - Not sizlersiniz. 
> **g.notlarım** - Notlarınıza bakarsınız. 
  `}, 
  
  {emojiad: "emoji_ab", emojiid: "848482971013873694", kategori: "Emoji Komutları", komutlar: `
> **g.emoji-ekle** - Sunucuya emoji eklersiniz.
> **g.emoji-rastgele <1/25>** - 1 ve 25 arası Rastgele karışık emoji atar. 
> **g.emoji-rastgele <1/25> hareketli** - 1 ve 25 arası Rastgele hareketli emoji atar. 
> **g.emoji-rastgele <1/25> hareketsiz** - 1 ve 25 arası Rastgele hareketsiz emoji atar.
> **g.emoji-liste** - Sunucumuzun emoji' lerini listeler. 
> **g.emoji-link** - Yazdığınız emojinin linkini verir. 
> **g.emoji-bilgi** - Yazdığınız emoji hakkında bilgi verir. 
> **g.emoji-ara** - Yazdığınız emoji isminde arama yapar ve bulduklarını atar. 
 `} 

]

exports.run = function(client, message, args) {

	  const Embed = new Discord.MessageEmbed()

  .setColor("#B8A8FF")

  .setAuthor(`Merhaba, ${message.author.username}!`, message.author.avatarURL())

  .setTitle("Space Giveaway")

  .setURL("https://top.gg/bot/765207268408033322")

  .setDescription(`<:emoji_83:847801988656791563> Alttaki tepkilere basarak komutları görüntüleyebilirsin!`)
  .addField(`<:blurple_tada:841709529217105941> Çekiliş komutlar`, "Galiba sunucuda güzel şeyler olacak sabırsızlıkla bekliyorum!", true)
  .addField(`<:emoji_69:841947953278484480> Bot komutları`, "Hakkımda bilgi al biraz dostum. " , true)
  .addField(`<:emoji_68:841947082076192778> Yetkili komutları`, "Yetkili Komutları ile sunucunuzu daha güzel yapabilir siniz.", true)
  .addField(`<:YTvids:843872686345551873> Yedek komutları`, "Sunucun güvensiz gibi geldi bence bir yedek alanda fayda var? ", true)
  .addField(`<:logo_komutlar:841709516474679336> Logo komutları`, "Güzel renkler ve şekiller ile logo yapalım hadi!", true)
  .addField("<:SpaceGiveaway:798525686142468136> Yapay zeka Komutları", "Bot ile konuşmaya ne dersin?") 
  .addField("<:emoji_84:847799091886161970> Müzik Komutları", "Biraz müzik dinleyelim 🎶") 
  .addField("<:tembel:802431611848228904> Eğlence Komutları", "Biraz eğlenmek herkesin hakkı ;D") 
  .addField(`<:game:842658421231845408> Oyun Komutları`, "Oyun komutlarım bence bir harika!!", true)
  .addField("<:bug_hunter:763282944637927434> Aktivite Komutları", "Sesli sohbette biraz aktivite yapalım?") 
  .addField("<:Para:847799588462657536> Ekonomi Komutları", "Hmm zengin insanı değiştirir.") 
  .addField("<:minehert:763281229076103179> Hayvan Komutları", "Ne kadar tatlı hayvanlar onlar UwU") 
  .addField("<:anket:841725447511474236> Not Komutları", "Unutmamak için not al bence.") 
  .addField("<:emoji_ab:848482971013873694> Emoji komutları", "Gel Emojilere bir göz atalım?") 
    .setFooter("Space Giveaway", client.user.displayAvatarURL())

  message.inlineReply("", {embed: Embed}).then(async (msg) => {

    

    var filtre = (reaction, user) => user.id !== "657278379053154313" && user.id === message.author.id;

    var collector = msg.createReactionCollector(filtre, {

      time: 300000

    });

    

    var sayfa = -1

    

    await msg.react("<:codesty_leave:844468548079321089>")

    await msg.react("<:codesty_join:844468549417697350>")

    await msg.react("<:codesty_cross:844468546930606100>")

    collector.on("collect", async (reaction, user) => {

      try {

      reaction.users.remove(user).catch(console.error);

      } catch(err){

        

      }

      switch (reaction.emoji.id) {

        

        case "844468549417697350":

          

          sayfa++

          

          if (sayfa === sayfalar.length) {

            sayfa = -1

            msg.edit("", {embed: Embed})

          }

          const New = new Discord.MessageEmbed()

          .setColor("#B8A8FF")

          .setAuthor(`Merhaba, ${message.author.username}!`, message.author.avatarURL())

          .setTitle("Space Giveaway - " + sayfalar[sayfa].kategori)

          .setURL("https://top.gg/bot/765207268408033322")

          .setDescription(`<:${sayfalar[sayfa].emojiad}:${sayfalar[sayfa].emojiid}> **${sayfalar[sayfa].kategori}**\n

          ${sayfalar[sayfa].komutlar}

          `)

          .setFooter("Space Giveaway", client.user.displayAvatarURL())

          msg.edit("", {embed: New})

        

          break;

          

          case "844468548079321089":

          

            sayfa--

          

            if (sayfa === -2 || sayfa === -1) {

              sayfa = -1

              msg.edit("", {embed: Embed})

            }

          

          const New2 = new Discord.MessageEmbed()

          .setColor("#B8A8FF")

          .setAuthor(`Merhaba, ${message.author.username}!`, message.author.avatarURL())

          .setTitle("Space Giveaway - " + sayfalar[sayfa].kategori)

          .setURL("https://top.gg/bot/765207268408033322")

          .setDescription(`<:${sayfalar[sayfa].emojiad}:${sayfalar[sayfa].emojiid}> **${sayfalar[sayfa].kategori}**\n

          ${sayfalar[sayfa].komutlar}

          `)

          .setFooter("Space Giveaway", client.user.displayAvatarURL())

          msg.edit("", {embed: New2})

          

          break;

          

          case "844468546930606100":

            msg.delete()

          break

      

      }

    

    })

    

    collector.on("end", collected => {

      msg.delete()

    })

      

  })

  

};

exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: ["help", "yardim", "komutlar", "y"],

  permLevel: 0

};

exports.help = {

  name: 'lxkemfme',

  description: "Yardım menüsünü gösterir."

};