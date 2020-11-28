const BaseCommand = require('../../utils/structures/BaseCommand');
const fetch = require('node-fetch')
const Discord = require("discord.js");
const bot = new Discord.Client();

module.exports = class HugCommand extends BaseCommand {
  constructor() {
    super('hug', 'fun', []);
  }

  run(client, message, args) {
    if (message.mentions.users.size < 1) return message.channel.send("you can't fist-bump nobody")
    let user = message.guild.member(message.mentions.users.first());
          message.channel.send(`${user} You got a hug from ${message.author.username} ❤`,{
              embed: {
                  image: {
                      url: "https://tenor.com/view/hug-cuddle-comfort-love-friends-gif-5166500"
                  }
              }
          })
  }
}