const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class EventCommand extends BaseCommand {
  constructor() {
    super('Event', 'festiveNov', []);
  }

  run(client, message, args) {
    //message.channel.send('Thanks to @everyone Who used me and Happy Thanks Giving to Everyone in the World and hope you have fun useing me!');
  }
}