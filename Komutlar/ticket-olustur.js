const { MessageEmbed, MessageCollector } = require("discord.js");

const Discord = require("discord.js") 
const db = require("croxydb") 
const { MessageButton } = require("discord-buttons");

exports.run = async (client, message, args) => {

     if(!message.member.permissions.has('MANAGE_MESSAGES')) {

    const embed = new Discord.MessageEmbed()

      .setDescription(`<:carpi:855750448711467058> **Ne yazık ki bu komutu kullanmaya yetkin yok.**`)

      .setColor("RED") 

    message.channel.send(embed);

    return;

  }

        

        const embed = new MessageEmbed().setColor("#5865F2");

        message.channel.send(embed

            .setTitle("Ticket Oluşturma (1/3)")

            .setDescription("<:kalem:857937104323215360> Lütfen biletleri oluşturmak istediğiniz kategori IDsini belirtin")

        );

        const categoryCollector = new MessageCollector(message.channel, m => m.author.id == message.author.id, { time: 30000 });

        categoryCollector.on("collect", async msg => {

            const category = message.guild.channels.cache.find(c => c.type == "category" && c.id == msg.content);

            if (!category) return message.channel.send("<:carpi:855750448711467058> O kategoriyi bulamadım, lütfen tekrar deneyin");

            else {

                categoryCollector.stop();

                message.channel.send(embed

                    .setTitle("Ticket Oluşturma (2/3)")

                    .setDescription("<:kalem:857937104323215360> Lütfen bilet yerleştirmesini oluşturmak istediğiniz kanalı belirtin")

                );
             
            
                const channelCollector = new MessageCollector(message.channel, m => m.author.id == message.author.id, { time: 30000 });

                channelCollector.on("collect", async msg => {

                    const channel = msg.mentions.channels.first() || message.guild.channels.cache.find(c => c.type == "text" && c.id == msg.content);

                    if (!channel) return message.channel.send("<:carpi:855750448711467058> O kanalı bulamadım lütfen tekrar deneyin");
                    else {

                        channelCollector.stop();
                 
                        message.channel.send(embed

                            .setTitle("Ticket Oluşturma (3/3)")

                            .setDescription("<:kalem:857937104323215360> Lütfen biletlere yanıt vermesine izin verilen rolü belirtin")

                        );

                        const roleCollector = new MessageCollector(message.channel, m => m.author.id == message.author.id, { time: 30000 });

                        roleCollector.on("collect", async msg => {

                            const role = msg.mentions.roles.first() || message.guild.roles.cache.find(r => r.id == msg.content);

                            if (!role) return message.channel.send("<:carpi:855750448711467058> O rolü bulamadım, lütfen tekrar deneyin");

                            else {

                                roleCollector.stop();

                                message.channel.send(embed

                                    .setTitle("Ticket Oluşturma (Tamamlandı!)")
                                    
.setDescription(`Ticket kategori: \`${category.name}\` \nTicket kanal: ${channel} \nTicket role: ${role}`)
                
                                );
                             
                    

 const ticket1 = new MessageButton()

  .setStyle("gray")

  .setID("open_ticket")

  .setLabel("Ticket Oluştur!")

  .setEmoji("📩")
let sj = db.fetch(`ticket_text_${message.guild.id}`) 
                                   const ticketEmbed = embed.setTitle(" ").setDescription(sj || "Ticket oluşturmak için aşağıdaki butona tıklayabilirsiniz.").setColor("BLURPLE") 

                                const ticket = await channel.send({ embed: ticketEmbed, 

                                    buttons: [ticket1] });

db.set(`ticket_kategori_${message.guild.id}`, category.id)

db.set(`ticket_kanal_${message.guild.id}`, channel.id) 

db.set(`ticket_rol_${message.guild.id}`, role.id)

db.set(`ticket_mesaj_${message.guild.id}`, ticket.id)

            
     
                
                        

                   

                           
        };

                        });

                    };

                });

            };

        });          
             
        
   } 

exports.help = {

name: "ticket-oluştur" 

} 