let client; exports.init = function (e) {}

/* CHANNEL NAME */
/* Fonction : Recupere le channel sous format channel brut */
exports.getChannelByName = function(guild, channel_name) {
    return guild.channels.find(x => x.name === channel_name)
};

/* Fonction : Recupere l'id du channel */
exports.getChannelIdByName = function(guild, channel_name) {
    return  guild.channels.find(x => x.name === channel_name).id
};

/* CHANNEL ID */
/* Fonction : Recupere le channel sous format channel brut */
exports.getChannelById = function(guild, channel_id) {
    return  guild.channels.get(channel_id)
};

/* Fonction : Recupere l'id du channel */
exports.getChannelNameById = function(guild, channel_id) {
    return  guild.channels.get(channel_id).name
};