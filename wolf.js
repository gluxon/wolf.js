var irc = require('irc'); // IRC Client
require('js-yaml'); // JavaScript YAML parser (for settings)

// Gr__dirnameab configuration files
var settings = require(__dirname + '/config/bot.yaml');
var werewolf = require(__dirname + '/config/werewolf.yaml');

var client = new irc.Client(settings.server, settings.nick, {
	nick: settings.nick,
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

// The Locale handler
var Locale = require(__dirname + '/components/locale.js');

var locale = Locale.createInstance(__dirname + '/locales', '.yaml');
locale.setLanguage(settings.language);

// The actual game
var Werewolf = require(__dirname + '/game/index.js');

var werewolf = Werewolf.createGame({
	bot: settings,
	irc: client,
	channel: settings.channel,
	admins: settings.admins,
	locale: locale
});

//werewolf.start();