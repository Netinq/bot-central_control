module.exports = (client, Channels) => {

    client.on('guildMemberRemove', (member) =>  {
       
        const channel = Channels.getChannelByName(client.guilds.get('588861283915530281'), 'zone-de-largage');
        
        channel.send(
            "` ` \n"+
            "❗ Et merde...."+"\n"+
            "❗"+member+" à basculé....")
    })
};