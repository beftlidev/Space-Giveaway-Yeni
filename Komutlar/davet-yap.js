const { Client, Message, MessageEmbed } = require("discord.js");

exports.run = async (client, message, args) => {

if(message.author.id !== "753842258457002036") if(message.author.id !== "753842258457002036") return message.channel.send("<:bakimda:798582408642560110> Bu komut <@753842258457002036>' a özeldir!!")

    let guild = null;

    if (!args[0]) return client.err(message, "Owner", "getinvite", 0);

    if (args[0]) {

      let fetched = client.guilds.cache.find(g => g.name === args.join(" "));

      let found = client.guilds.cache.get(args[0]);

      if (!found) {

        if (fetched) {

          guild = fetched;

        }

      } else {

        guild = found;

      }

    } else {

      return message.inlineReply("Invalid Name/ID!");

    }

    if (guild) {

      let tChannel = guild.channels.cache.find(

        ch =>

          ch.type == "text" &&

          ch.permissionsFor(ch.guild.me).has("CREATE_INSTANT_INVITE")

      );

      if (!tChannel) {

        return client.err(message, "Owner", "getinvite", 6);

      }

      let invite = await tChannel

        .createInvite({ temporary: false, maxAge: 0 })

        .catch(err => {

          return message.inlineReply(`${err} has occured!`);

        });

      message.inlineReply(invite.url);

    } else {

      return message.inlineReply(

        `\`${args.join(" ")}\` - Bot is Not in this server`

      );

  }
};

exports.help = {

name: "davet-yap" 

} 