module.exports = (client, Channels, Role, RoleGestion) => {

    const defaut_role = 
    [
        Role.getRole(client.guilds.get('588861283915530281'), '========== Factions =========='),
        Role.getRole(client.guilds.get('588861283915530281'), '=========== Rôles ==========='),
        Role.getRole(client.guilds.get('588861283915530281'), '========== Espèces =========='),
        Role.getRole(client.guilds.get('588861283915530281'), '========== Versions =========='),
        Role.getRole(client.guilds.get('588861283915530281'), 'Sans faction'),
    ]

    client.on('guildMemberAdd', (member) =>  {
       
        const channel = Channels.getChannelByName(client.guilds.get('588861283915530281'), 'zone-de-largage');
        
        channel.send(
            "` ` \n"+
            "🛰 **Attention !**"+"\n"+
            "🛰 Largage en cours...."+"\n"+
            "🛰"+member+" est rentré dans les frontières de la zone de quarantaine")

        defaut_role.forEach(role => 
            {
                RoleGestion.addRole(member, role)
            })
    })
};