const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class PurgeCommand extends BaseCommand {
  constructor() {
    super('purge', 'moderation', []);
  }

  async run(client, message, args) {
    if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('You dont have perms');
    if (!message.guild.me.hasPermission('MANAGE_MESSAGES')) return message.channel.send('My master, you can\'t use this command. im sorry');
    if (!args[0]) return message.channel.send('State a number between 2 and 200, Ex: \`SShypurge 36\`');
    const amountToDelete = Number(args[1], 200);

    if (isNaN(amountToDelete)) return message.channel.send('i cant do that much, state a number between 2 and 200');
    if (!Number.isInteger(amountToDelete)) return message.channel.send('Number stated must be a whole number');
    if (!amountToDelete || amountToDelete < 2 || amountToDelete > 200) return message.channel.send('The number Stateed must be a number between 2 and 200');
    const fetched = await message.channel.messages.fetch({
      Limit: amountToDelete
    });

    try {
      await message.channel.bulkDelete(fetched)
      .then(messages => message.channel.send(`Deleted ${messages.size} messages!`));
    } catch (err) {
      console.log(err)
      message.channel.send('I was unable to delete the amount stated, make sure they are within 14 days old');
    }
  }
}