let client; exports.init = function (init) { client = init; }
 
exports.getRole = function (guild, role_name) {
    return guild.roles.find(x => x.name === role_name)
};
exports.getRoleID = function (guild, role_name) {
    return guild.roles.find(x => x.name === role_name).id
};