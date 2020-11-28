const BaseCommand = require('../../utils/structures/BaseCommand');
var fortunes = [
  "yes",
  "no",
  "maybe",
  "dont know, try again",
  "HELL YEAH",
  "HELL NO",
  "uhhhhhhhhh idk"
];

module.exports = class eightballCommand extends BaseCommand {
  constructor() {
    super('8ball', 'fun', []);
  }

  run(client, message, args) {
    /*message.channel.send('This command is being created while you wait uh just mess with my other commands!').then(message => {
      setTimeout(() => { message.edit("This command is being created while you wait uh just mess with my other commands!\n type \`Shyhelp\` for other commands!"); }, 1000);
  });*/
  if(!args[0]){
    return message.channel.send(":x: " + "| Please Enter A Question You Would Like Answered")
  }
  if (args[0]) message.channel.send(fortunes[Math.floor(Math.random() * fortunes.length)]);
  else message.channel.send(":x: " + "| I Wasnt Able To Read That :(");
  }
}