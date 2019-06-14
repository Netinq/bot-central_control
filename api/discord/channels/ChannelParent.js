let client; exports.init = function (e) { client = e; }

exports.getParent = function (channel) {
    return channel.parent;
}