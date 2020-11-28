const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class KillmeCommand extends BaseCommand {
  constructor() {
    super('killme', 'fun', []);
  }

  run(client, message, args) {
    message.channel.send(`${message.author.username} has died.`).then(message => {
      setTimeout(() => { message.edit("Respawning..."); }, 1000);
      setTimeout(() => { message.edit(`Revival complete. Welcome back, ${message.author.username}`); }, 1000);
  });
  }
}