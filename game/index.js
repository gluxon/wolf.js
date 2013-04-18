exports.createGame = function(options) {
	return new Werewolf(options);
}

function Werewolf(options) {
	var self = this;

	this.bot = options.bot;
	this.irc = options.irc;
	this.channel = options.channel;
	this.admins = options.admins;
	this.locale = options.locale;

	// List of players
	this.players = [];

	// Add listener for a message
	this.irc.addListener('message', function (nick, to, text, message) {
		self.command(to, text, nick, message.host);
	});
}

Werewolf.prototype.addPlayer = function(player) {
	this.players.push(player);
}

Werewolf.prototype.command = function(recipient, message, nick, host) {
	var self = this;

	message = message.replace(/\s{2,}/g, ' ').trim(); // Remove extra spaces
	args = message.split(' ');
	command = args.shift();

	if (command == '!join') {
		var join = this.locale.getString('join');
		this.irc.say(recipient, join);
	}
}