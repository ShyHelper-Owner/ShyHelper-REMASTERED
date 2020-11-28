const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class KissCommand extends BaseCommand {
  constructor() {
    super('kiss', 'fun', []);
  }

  run(client, message, args) {
    if (message.mentions.users.size < 1) return message.channel.send("you can't fist-bump nobody")
    let user = message.guild.member(message.mentions.users.first());
          message.channel.send(`${username.tag} You got a kiss from ${message.author.username} ❤`,{
              embed: {
                  image: {
                      url: "https://tenor.com/view/anime-ano-natsu-de-matteru-gif-9670722"
                  }
              }
          })
  }
}