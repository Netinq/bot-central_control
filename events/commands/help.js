const Embed = require('../../api/discord/chat/Embed')

exports.help = function(guild, channel, message, author) 
{
    channel.send(
      Embed.createEmbed(
        'Central Control : aide', '',
        'Liste des commandes',
        '',
        guild.iconURL,
        'développé par Quentin#685 (K-Dev)','',
        '',
        'https://raw.githubusercontent.com/TheDEWIQ/bot-central_control/master/assets/images/commandlist.png'
      )
    )
}