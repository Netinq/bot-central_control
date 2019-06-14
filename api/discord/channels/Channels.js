let client; exports.init = function (e) {}

/* CHANNEL NAME */
/* Fonction : Recupere le channel sous format channel brut */
exports.getChannelByName = function(guild, e) {
    return guild.channels.find(x => x.name === e)
};

/* Fonction : Recupere l'id du channel */
exports.getChannelIdByName = function(guild, e) {
    return  guild.channels.find(x => x.name === e).id
};

/* CHANNEL ID */
/* Fonction : Recupere le channel sous format channel brut */
exports.getChannelById = function(guild, e) {
    return  guild.channels.get(e)
};

/* Fonction : Recupere l'id du channel */
exports.getChannelNameById = function(guild, e) {
    return  guild.channels.get(e).name
};