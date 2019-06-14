const Embed = require('../../api/discord/chat/Embed')
const Commands = require('../command-manager')

exports.help = function(guild, channel, message, author) 
{
    channel.send(
      Embed.createEmbed(
        'Central Control : aide', '',
        '🛰 Voici notre liste des commandes',
        commandList(),
        guild.iconURL,
        'développé par Quentin#685 (K-Dev)','',
        '',
        'https://raw.githubusercontent.com/TheDEWIQ/bot-central_control/master/assets/images/commandlist.png'
      )
    )
}

function commandList()
{
  let content = '``'
  for (let i = 0; i < Commands.getCommandsSize(); i++) 
  {
    content += '\n'+'**'+Commands.getCommands()[i][0]+' : **'+Commands.getCommands()[i][2]
  }
  return content
}