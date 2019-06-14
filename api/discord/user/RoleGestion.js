let client; exports.init = function (e) {client = e;}

exports.addRole = function(member, e) {
    member.addRoles(e)
};
exports.removeRole = function(member, e) {
    member.removeRoles(e)
};