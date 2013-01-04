var irc = require('irc'); // IRC Client
require('js-yaml'); // JavaScript YAML parser (for settings)

// Import settings file
var settings = require('./config/bot.yaml');

var client = new irc.Client(settings.server, settings.nick, {
    userName: settings.username,
    realName: settings.realname,
    port: settings.port,
    channels: [settings.channel],
});

// Original IRC output to console (for debugging)
client.addListener('raw', function (message) {
	if (message.server) {
		console.log(':' + message.server + ' ' + message.command + ' ' + message.args.join(' :') );
	} else {
		console.log(':' + message.nick + '!' + message.user + '@' + message.host + ' ' +
		message.command + ' ' + message.args.join(' :') );
	}
});