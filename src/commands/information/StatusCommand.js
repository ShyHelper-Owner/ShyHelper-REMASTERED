const { MessageEmbed } = require('discord.js');
const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class StatusCommand extends BaseCommand {
  constructor() {
    super('status', 'information', []);
  }

  run(client, message, args) {
    const botstatus = ['online', 'idle', 'dnd', 'invisable'];
    const embed = new MessageEmbed()
    .addField("Bot Status: ", `${botstatus[client.status]}`);
    message.channel.send(embed)
  }
}