const cmd_help = [
    "help",
    require('./commands/help.js').help,
    "Commande qui permet d'avoir de l'aide sur la liste des commandes et les descriptions des commandes"
]
const commands = [
    cmd_help
]

module.exports = (client, Channels) => 
{
    client.on('message', (message) =>  
    {
        if (!(message.content.startsWith('/'))) return 

        const command = message.content.replace('/', '')

        commands.forEach(function(check_command) 
        {
            if (check_command[0] == command) 
            {
                const content_message = command.replace(check_command[0], '')
                check_command[1](message.guild, message.channel, content_message, message.author)
            }
        })
    })
};