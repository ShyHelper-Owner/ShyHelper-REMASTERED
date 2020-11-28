const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class CreatorCommand extends BaseCommand {
  constructor() {
    super('creator', 'information', []);
  }

  run(client, message, args) {
    message.reply('I was Made By Stupid idiot (nexo boi)#5475, he is called that cause.. its true honestly')
  }
}