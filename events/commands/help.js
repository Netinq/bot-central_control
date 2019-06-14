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
        'http://localhost/assets/images/commandlist.png'
      )
    )
}