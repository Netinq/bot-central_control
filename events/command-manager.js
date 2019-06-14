let cmd_help = 
[
    'help',
    require('./commands/help').help,
    'Commande qui permet d\'avoir de l\'aide sur la liste des commandes et les descriptions des commandes',
    0
]
let cmd_attaque =
[
    'attaque',
    '',
    'Commande qui permet d\'attaquer d\'autres faction',
    5
]
let commands = 
[
    cmd_help,
    cmd_attaque
]

exports.getCommands = function() 
{
    return commands;
};
exports.getCommandsSize = function()
{
    return commands.length
}

module.exports = (client, Channels) => 
{
    client.on('message', (message) =>  
    {
        if (!(message.content.startsWith('/'))) return 

        let command = message.content.replace('/', '')

        commands.forEach(check_command => 
        {
            if (check_command[0] == command) 
            {
                let content_message = command.replace(check_command[0], '')
                check_command[1](message.guild, message.channel, content_message, message.author)
            }
        })
    })
};