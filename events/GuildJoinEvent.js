module.exports = (client, Channels, Embed) => {

    client.on('guildMemberAdd', (member) =>  {
       
        const channel = Channels.getChannelByName(client.guilds.get('588861283915530281'), 'zone-de-largage');
        
        channel.send(
            "` ` \n"+
            "🛰 **Attention !**"+"\n"+
            "🛰 Largage en cours...."+"\n"+
            "🛰"+member+" est rentré dans les frontières de la zone de quarantaine")
    })
};