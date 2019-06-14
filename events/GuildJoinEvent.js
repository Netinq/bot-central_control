module.exports = (client, Channels, Role) => {

    client.on('guildMemberAdd', (member) =>  {

        const defaut_role = 
        [
            Role.getRole(client.guilds.get('588861283915530281'), '========== Factions =========='),
            Role.getRole(client.guilds.get('588861283915530281'), '=========== Rôles ==========='),
            Role.getRole(client.guilds.get('588861283915530281'), '========== Espèces =========='),
            Role.getRole(client.guilds.get('588861283915530281'), '========== Versions =========='),
            Role.getRole(client.guilds.get('588861283915530281'), 'Sans faction'),
        ]
        const channel = Channels.getChannelByName(client.guilds.get('588861283915530281'), 'zone-de-largage');

        member.addRoles(defaut_role)

        channel.send(
            "`========== Nouvel Arrivant ========== ` \n"+
            "🛰 **Attention !**"+"\n"+
            "🛰 Largage en cours"+"\n"
        )
        .then(message => 
            {
                let point = 0
                let delais = 0
                const points =
                [
                    "[===--------------------]",
                    "[======---------------]",
                    "[=========----------]",
                    "[============-----]",
                    "[===============]"
                ]
                const x = setInterval(function() 
                {
                    message.edit(
                        "`========== Nouvel Arrivant ==========` \n"+
                        "🛰 **Attention !**"+"\n"+
                        "🛰 Largage en cours "+points[point]+"\n"
                        )
                        point++
                        if (delais == 4) 
                        {
                            clearInterval(x);
                            message.edit(
                            "`========== Nouvel Arrivant ==========` \n"+
                            "🛰 **Attention !**"+"\n"+
                            "🛰"+member+" est rentré dans les frontières de la zone de quarantaine"+"\n"+
                            "🛰 Central Control : `''"+member.user.username+" bon courage, et attention aux infectés.''`"+"\n"+
                            "🛰 Terminé."
                            )
                        } else {delais++}
                }, 1000)
            }
        )
    })
}