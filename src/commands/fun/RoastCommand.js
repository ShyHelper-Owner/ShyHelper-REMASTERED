const BaseCommand = require('../../utils/structures/BaseCommand');
const fetch = require('node-fetch');
const Discord = require('discord.js');
const { Client, MessageEmbed } = require('discord.js');

module.exports = class RoastCommand extends BaseCommand {
  constructor() {
    super('roast', 'fun', []);
  }

  async run(client, message, args) {
    if (!args[0]) return message.channel.send('Invalid Command Format: \`Shyroast @<user here>\`');
    const pingedUser = message.mentions.members.first();
    if (!pingedUser) return message.channel.send('This ShyGuy is not in this Tribe!');
    let msg = await message.channel.send('ok boomer')
    fetch('https://evilinsult.com/generate_insult.php?lang=en&type=json')
    .then(res => res.json())
    .then(json => {
      const embed = new MessageEmbed()
      .setTitle(pingedUser.user.tag + ` ${json.insult}`)
      .setColor(0xff0000)
      msg.edit(embed)
    })
  }
}