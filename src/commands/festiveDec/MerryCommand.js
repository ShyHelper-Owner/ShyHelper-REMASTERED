const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class MerryCommand extends BaseCommand {
  constructor() {
    super('merry', 'festiveDec', []);
  }

  run(client, message, args) {
    //message.channel.send('Look at your calender!')
    message.channel.send('Christmas!');
  }
}