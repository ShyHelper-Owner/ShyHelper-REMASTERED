const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class ReturnCommand extends BaseCommand {
  constructor() {
    super('return', 'fun', []);
  }

  run(client, message, args) {
    message.channel.send('o h n o h e i s c o m i n g');
  }
}