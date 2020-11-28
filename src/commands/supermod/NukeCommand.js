const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class NukeCommand extends BaseCommand {
  constructor() {
    super('nuke', 'supermod', []);
  }

  async run(client, message, args) {
    if (message.author.id !== '588417556512243731') return message.channel.send("You are not trusted.")

    let reason = args.join(" ");
    const nukeCnl = message.channel;

    if (!reason) reason = "No Reason Given"
    if (!nukeCnl.deletable) return message.channel.send("This Channel is not deletable");

    await nukeCnl.clone().catch(err => console.log(err));
    await nukeCnl.delete(reason).catch(err => console.log(err))
  }
}