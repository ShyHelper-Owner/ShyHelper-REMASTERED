const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class SvCommand extends BaseCommand {
  constructor() {
    super('sv', 'secret', []);
  }

  run(client, message, args) {
    if (message.author.id !== '588417556512243731') return message.channel.send('no')
    message.channel.send('Shut up <@354105059321053184> and <@514948228714856469>');
  }
}