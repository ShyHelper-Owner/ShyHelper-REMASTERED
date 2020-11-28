const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class GunCommand extends BaseCommand {
  constructor() {
    super('gun', 'fun', []);
  }

  run(client, message, args) {
    message.channel.send('I CALL SHOTGUN and i want the front seat (click click)');
  }
}