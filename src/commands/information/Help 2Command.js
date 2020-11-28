const BaseCommand = require('../../utils/structures/BaseCommand');
const { Client, MessageEmbed } = require('discord.js')
const Discord = require('discord.js')

module.exports = class Help_2Command extends BaseCommand {
  constructor() {
    super('help2', 'information', []);
  }

  run(client, message, args) {
        const embed = new MessageEmbed()
    // Set the title of the field
    .setAuthor(message.author.username)
    .setTitle('Help Page 2 | Command Info')
    // Set the color of the embed
    .setColor(0xff0000)
    .setFooter('📌 Page 2/3')
    .setDescription('Shows Information about the commands')
    // Set the main content of the embed
    .addField('Shysay', 'Typeing \`Shysay\` with your message here will make <@775256301088538635> say anything you want it to')
    .addField('Shy8ball', 'Typeing \`Shy8ball\` makes <@775256301088538635> randomly say yes, no, mybe, and other things')
    .addField('ShyHelp2', 'Shows this Message')
    .addField('Shycreator', 'Typeing \`Shycreator\` makes <@775256301088538635> shows who made it')
    .addField('Shyinvite', 'Shows the bots invite and Support Server')
    .addField('Shyversion', 'Shows the evrsion of the bot')
    .addField('Shyavatar', 'Shows your avatar')
    .addField('Shygun', 'says something funi')
    .addField('Shykillme', 'Typeing \`Shykillme\` makes <@775256301088538635> kill you :I')
    .addField('Shymeme', 'Typeing \`Shymeme\` shows a randomly generated meme just like <@270904126974590976>')
    .addField('Shyping', 'says something funi')
    .addField('Shyreturn', 'what have you done.')
    .addField('Shyroast', 'Roasts mentioned Shyguy')
    .addField('Shykick', 'Kicks a mentioned Shyguy')
    .addField('Shyban', 'Bans a mentioned Shyguy')
    .addField('Shymute', 'Mutes a Mentioned Shyguy')
    .addField('Shytemp_ban', 'bans a Mentioned user for a certain amount of time')
    .addField('Shyunban', 'Unbans a user with id or mention')
    .addField('Shyfistbump', 'Mentioning a user makes you fist bump them!')
    .addField('Shyeval', 'This is for the Bot developers')
  // Send the embed to the same channel as the message
  message.channel.send(embed);
  }
}