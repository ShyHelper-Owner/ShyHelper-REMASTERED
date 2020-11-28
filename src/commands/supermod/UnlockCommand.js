const BaseCommand = require('../../utils/structures/BaseCommand');
const client = new Discord.Client
const owner = require('../supermod/SuperModOwners.json')

module.exports = class UnlockCommand extends BaseCommand {
  constructor() {
    super('unlock', 'supermod', []);
  }

  run(client, message, args) {
    if(!owner) return message.reply('You are not an owner to execute this command')
    await message.channel.send(`We are Locking ${message.guild.channels.cache.size} channels.`)
    await c.overwritePermissions(message.guild.id, {
      SEND_MESSAGES: true
    })
    await message.edit(`Locked all Channels in your tribe (${message.guild.channels.cache.size} Channels!)`)
  }
}