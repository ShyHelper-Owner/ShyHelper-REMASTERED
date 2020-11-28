const BaseCommand = require('../../utils/structures/BaseCommand');
const fs = require('fs')

module.exports = class BlCommand extends BaseCommand {
  constructor() {
    super('bl', 'supermod', []);
  }

  async run(client, message, args) {
    if (!message.author.id !== '588417556512243731') return;
    const pingedUSer = message.mentions.users.first();
    if (!args[0]) return message.channel.send('you need to state a shyguy')
    if (!pingedUSer) return message.channel.send('That Shyguy does not exist!')
    if (pingedUSer.bot) return message.channel.send('That Shybot cannot be blacklisted!')
    const blacklistObject = {
      userTag: message.author.tag
    };
    let blacklist = await JSON.parse(fs.readFileSync('../commands/supermod/blacklist.json', 'utf-8'));
    if (!blacklist) return console.log('Issue Parseing Blacklist.JSON')
    if (blacklist[pingedUSer.id]) blacklist[pingedUSer.id] = blacklistObject;

    try {
      await fs.writeFile('../commands/supermod/blacklist.json', JSON.stringify(blacklist, null, 2), (err) => {
        if (err) {
          return console.log(err)
        } else {
          console.log('Successfully Blacklist ' + pingedUSer.tag)
        }
      })
    } catch (err) {
      console.log(err);
      message.channel.send("Error Blacklisting the Shyguy")
    }
  }
}