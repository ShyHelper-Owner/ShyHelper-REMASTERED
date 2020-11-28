const BaseCommand = require('../../utils/structures/BaseCommand');
const fetch = require('node-fetch');
const Discord = require('discord.js');
const { Client, MessageEmbed } = require('discord.js');

module.exports = class IdkCommand extends BaseCommand {
  constructor() {
    super('idk', 'secret', []);
  }

  run(client, message, args) {
    const idkEmbed = new MessageEmbed()
    .setTitle('uh idk')
    .setColor('0xff0000')
    .setURL('https://www.youtube.com/watch?v=de8PRd_d7kg')
    .setDescription('uh dis ding')
    .setFooter('Made by nexoboi _(:з)∠)_')
    .setTimestamp();

    message.channel.send(idkEmbed)
  }
}