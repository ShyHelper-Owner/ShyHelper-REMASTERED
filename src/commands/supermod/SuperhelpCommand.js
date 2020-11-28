const BaseCommand = require('../../utils/structures/BaseCommand');
const { Client, MessageEmbed, Discord } = require('discord.js')

module.exports = class SuperhelpCommand extends BaseCommand {
  constructor() {
    super('superhelp', 'supermod', []);
  }

  run(client, message, args) {
    const embed = new MessageEmbed()

  .setTitle('Super Moderation Help Page')
  .setAuthor(message.author.username)
  .setColor(0xff0000)
  .setDescription('These are only for Admins so PLEASE do not abuse these. **Bolded** parts are sections, NOT commands')
  .addField('Info', '\`Shysupermodd, Shysuperhelp\`')
  .addField('Commands', '\`Shynuke\`')
  .addField('Unavalable', 'Nothing')
  .setFooter('📌 Page 4/4');

  message.channel.send(embed);
  }
}