const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class CacaCommand extends BaseCommand {
  constructor() {
    super('caca', 'festiveNov', []);
  }

  run(client, message, args) {
    //message.channel.send('Doodle do!');
  }
}