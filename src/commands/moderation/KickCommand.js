const { DiscordAPIError } = require('discord.js');
const BaseCommand = require('../../utils/structures/BaseCommand');
const { Client, MessageEmbed } = require('discord.js')
const Discord = require('discord.js')

module.exports = class KickCommand extends BaseCommand {
  constructor() {
    super('kick', 'moderation', []);
  }

  async run(client, message, args) {
    const pingedUser = message.mentions.members.first();
    let reason = args.slice(1).join();
    if (!reason) reason = "No reason given to you"
    const kickEmbed = new Discord.MessageEmbed()
    .setTitle(`You Were Kicked From ${message.guild.name}`)
    .setColor(0xff000)
    .setAuthor('ShyHelper Kick Embed 👍')
    .setDescription(`Reason Given: ${reason}`)
    .setTimestamp()
    .setFooter(client.user.tag, client.user.displayAvatarURL)

   // SShykick @user dm ads
   if (!args[0]) return message.channel.send('You need to state a ShyGuy Ex: \`SShykick @BoiItsFKGOAlt You broke a rule\`')
   if (!pingedUser) return message.channel.send('DAT MEMBER AINT IS DIS SERVER')
   try {
     await pingedUser.send(kickEmbed)
   } catch (err) {
     console.log('I cant Dm That user')
   }

   try {
     await pingedUser.kick(reason)
   } catch (err) {
     console.log(err);
     return message.channel.send('I cant Kick the user cause he/she is probably like an admin or something');
   }
  }
}