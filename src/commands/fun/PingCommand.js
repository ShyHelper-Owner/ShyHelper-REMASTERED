const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class PingCommand extends BaseCommand {
  constructor() {
    super('ping', 'fun', []);
  }

  run(client, message, args) {
    message.channel.send('instead of \"Pong!\" i will destroy you ;)');
  }
}