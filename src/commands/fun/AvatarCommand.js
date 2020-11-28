const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class AvatarCommand extends BaseCommand {
  constructor() {
    super('avatar', 'fun', []);
  }

  run(client, message, args) {
    message.reply(message.author.displayAvatarURL());
  }
}