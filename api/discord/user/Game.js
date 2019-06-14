let client; exports.init = function (e) {client = e;}

/* ACTIVITY */
/* Fonction : Definie l'activite en joue a... */
exports.setPlaying = function (game) {
    client.user.setActivity(game, { type: 'PLAYING' });
};
/* Fonction : Definie l'activite en ecoute... */
exports.setListening = function (game) {
    client.user.setActivity(game, { type: 'LISTENING' });
};
/* Fonction : Definie l'activite en regarde... */
exports.setWatching = function (game) {
    client.user.setActivity(game, { type: 'WATCHING' });
};