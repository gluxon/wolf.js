var irc = require('irc'); // IRC Client
require('js-yaml'); // JavaScript YAML parser (for settings)

// Import settings file
var settings = require('./config/bot.yaml');

var client = new irc.Client(settings.server, settings.nick, {
	channels: [settings.channel],
});

client.addListener('message', function (from, to, message) {
	console.log(from + ' => ' + to + ': ' + message);
});