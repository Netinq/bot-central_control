let client; exports.init = function (e) {client = e;}

exports.addRole = function(member, role) {
    member.addRoles(role)
};
exports.removeRole = function(member, role) {
    member.removeRoles(role)
};