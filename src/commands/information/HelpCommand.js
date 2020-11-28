const BaseCommand = require('../../utils/structures/BaseCommand');
const { Discord, MessageEmbed, Client } = require('discord.js')

module.exports = class HelpCommand extends BaseCommand {
  constructor() {
    super('help', 'information', []);
  }

  run(client, message, args) {
    const embed = new MessageEmbed()
    // Set the title of the field
    .setAuthor(message.author.username)
    .setTitle('Help Page 1 | Commands')
    .setFooter('📌 Page 1/3 | Type shyhelp2 for next page')
    // Set the color of the embed
    .setColor(0xff0000)
    // Set the main content of the embed
    .setDescription('help <command>` to view help on a specific command.\nThese are **[**required**]** and **<**optional**>** fields.')
    .addField('Info', '\`Shyinvite, Shyhelp, Shyhelp2, Shysuperhelp, Shyversion, Shycreator\`')
    .addField('Moderation', '\`Shykick, Shyban, Shypurge, Shymute, Shyunban, Shytban\`')
    .addField('Developer Tools', '\`Shyeval\`')
    .addField('Fun', '\`Shy8ball, Shyavatar, Shygun, Shykillme, Shymeme, Shyping, Shyreturn, Shyroast, Shysay, Shyfistbump, Shykiss, Shyhug\`')
    .addField('Unavalable', '\`Shyunban, Shytban, Shymute\`')
    .addField('New', '\`Shyhug, Shykiss\`')
    //.addField('Festive (Limited for only Seasons)', '\`Shycaca\`')
    .addField('Festive (limited for only seasons', '\`Shymerry\`')
  // Send the embed to the same channel as the message
  message.channel.send(embed);
  }
}