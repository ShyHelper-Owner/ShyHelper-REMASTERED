const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class SupermoddCommand extends BaseCommand {
  constructor() {
    super('supermodd', 'supermod', []);
  }

  run(client, message, args) {
    message.channel.send('SUPERMOD IS ONLY FOR THE TRUSTED https://forms.office.com/Pages/ResponsePage.aspx?id=iLOhd89aK0m_QmTLsIfQTJopj7MTH2xAlFlv121cs-ZUM0FZUDJUNFNXWUJXVjFMNk5YNlNCQ0g5TC4u');
  }
}