const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class VersionCommand extends BaseCommand {
  constructor() {
    super('version', 'information', []);
  }

  run(client, message, args) {
    message.channel.send('^3.1.9 new Help Layout and Supermod commands');
  }
}