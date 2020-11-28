const BaseCommand = require('../../utils/structures/BaseCommand');
const discord = require('discord.js')

module.exports = class UnbanCommand extends BaseCommand {
  constructor() {
    super('unban', 'moderation', []);
  }

  async run(client, message, args) {
    //Permission Checking:
    if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send('You dont have perms');
    if (!message.guild.me.hasPermission('BAN_MEMBERS')) return message.channel.send('You dont have perms, sorry master');

    //Vars:
    let reason = args.slice(1).join(" ");
    let userID = args[0];

    //Input Checking:
    if (!reason) reason = 'no reason Given';
    if (!args[0]) return message.reply('You must state a Valid ShyGuy in the Server');
    if (!isNaN(args[0])) return message.reply('The ID stated is not a number. \`Shyunban <id here> <reason here>\`');

    //Executing:
    message.guild.fetchBans().then(async bans => {
      if (bans.size == 0) return message.channel.send('This Tribe has no user banned!');
      let bUser = bans.fdind(b => b.user.id == userID);
      if (!bUser) return message.reply('TRhe Shyguys stated is not banned!');
      await message.guild.members.unban(bUser.user, reason).catch(err => {
        console.log(err);
        return message.channel.send('something went wrong unbaning that ID');
      }).then(() => {
        message.channel.send(`Successfully Unbanned ${args[0]}`)
      })
    })
  }
}