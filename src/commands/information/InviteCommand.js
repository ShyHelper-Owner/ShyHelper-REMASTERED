const BaseCommand = require('../../utils/structures/BaseCommand');
const { Client, MessageEmbed } = require('discord.js')
const Discord = require('discord.js')

module.exports = class InviteCommand extends BaseCommand {
  constructor() {
    super('invite', 'information', []);
  }

  run(client, message, args) {
    const embed = new MessageEmbed()
    // Set the title of the field
    .setAuthor(message.author.username)
    .setTitle('Server')
    .setFooter('📌 Invites for stuf')
    .setTimestamp()
    // Set the color of the embed
    .setColor(0xff0000)
    // Set the main content of the embed
    .setURL('https://discord.gg/Buh4sJn3mh')
    .addField('Bot Invite', 'https://discord.com/api/oauth2/authorize?client_id=775256301088538635&permissions=8&scope=bot')
  // Send the embed to the same channel as the message
  message.channel.send(embed);
  }
}