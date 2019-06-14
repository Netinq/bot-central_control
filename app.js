const Discord = require('discord.js');
const client = new Discord.Client();

function discord_DL() { return client.guilds.get('588084000317374497'); }
function discord_DLDEV() { return client.guilds.get('588861283915530281'); }

const Channels = require('./api/discord/channels/Channels')
const ChannelParent = require('./api/discord/channels/ChannelParent')
const Role = require('./api/discord/user/Role')
const RoleGestion = require('./api/discord/user/RoleGestion')
const Game = require('./api/discord/user/Game')
const Embed = require('./api/discord/chat/Embed')

require('./events/GuildJoinEvent')(client, Channels, Embed);
require('./events/GuildQuitEvent')(client, Channels, Embed);
require('./events/command-manager')(client)

var token = require('./token');
client.login(token.token);

client.on('ready', () => {

    /* Initialisation des fonctions API */
    Channels.init(client);
    Role.init(client);
    RoleGestion.init(client);
    Game.init(client);

    Game.setListening('Communauté Française');
})