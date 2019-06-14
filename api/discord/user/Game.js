let client; exports.init = function (e) {client = e;}

/* ACTIVITY */
/* Fonction : Definie l'activite en joue a... */
exports.setPlaying = function (e) {
    client.user.setActivity(e, { type: 'PLAYING' });
};
/* Fonction : Definie l'activite en ecoute... */
exports.setListening = function (e) {
    client.user.setActivity(e, { type: 'LISTENING' });
};
/* Fonction : Definie l'activite en regarde... */
exports.setWatching = function (e) {
    client.user.setActivity(e, { type: 'WATCHING' });
};