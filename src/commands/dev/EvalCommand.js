const { MessageEmbed } = require('discord.js');
const BaseCommand = require('../../utils/structures/BaseCommand');
const { Client, MessageEmbed, Discord } = require('discord.js')

module.exports = class EvalCommand extends BaseCommand {
  constructor() {
    super('eval', 'dev', []);
  }

  async run(client, message, args) {

    if (message.author.id !== '588417556512243731') return message.channel.send("You are not trusted")
    try {
      var code = args.join(" ");
      if (code === "client.token") return message.channel.send("Dont wanna do that 0_0")
      var evaled = eval(code);

      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);

      const embed = new MessageEmbed()
        .setColor(0x00A2E8)
        .addField(":inbox_tray: Input: ", `\`\`\`${code}\`\`\``)
        .addField(":outbox_tray: output: ", `\`\`\`js\n${clean(evaled)}\n\`\`\``)
      message.channel.send({ embed })
    } catch (err) {
      const embed = new MessageEmbed()
        .setColor(0x00A2E8)
        .addField(":inbox_tray: Input: ", `\`\`\`${code}\`\`\``)
        .addField(":outbox_tray: output: ", `\`\`\`${clean(err)}\`\`\``)
      message.channel.send({ embed })
    }

    function clean(text) {
      if (typeof (text) === 'string')
        return text.replace(/`/g, '`' + String.fromCharCode(8203)).replace(/@/g, '@' + String.fromCharCode(8203));
      else
        return text;
    }
  }
}