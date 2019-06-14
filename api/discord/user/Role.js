let client; exports.init = function (e) { client = e; }
 
exports.getRole = function (guild, e) {
    return guild.roles.find(x => x.name === e)
};
exports.getRoleID = function (guild, e) {
    return guild.roles.find(x => x.name === e).id
};