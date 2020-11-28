const { PermissionOverwrites } = require('discord.js');
const BaseEvent = require('../../utils/structures/BaseEvent');

module.exports = class ReadyEvent extends BaseEvent {
    constructor() {
        super('ready');
    }
    async run(client) {
        
        let serverIn = client.guilds.cache.size;
        console.log(client.user.tag + ' has logged in!')
        client.user.setPresence({
            activity: {
                name: `${serverIn} ShyGuy Tribes! Happy Thanks Giving!`,
                type: "WATCHING"
            },
            status: "online"
        })
        

    }
}