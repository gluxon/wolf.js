var fs = require('fs');
var path = require('path');
require('js-yaml');

// The Locale handler

function createInstance(directory, extension) {
	return new Locale(directory, extension);
}

function Locale(directory, extension) {
	self = this;

	this.languages = [];

	this.setDirectory(directory);
	this.setFileExtension(extension);

	this.cullLangs();
}

Locale.prototype.setDirectory = function(directory) {
	this.directory = directory;
}

Locale.prototype.getDirectory = function() {
	return this.directory;
}

Locale.prototype.setFileExtension = function(extension) {
	this.extension = extension;
}

Locale.prototype.getFileExtension = function() {
	return this.extension;
}

Locale.prototype.setLanguage = function(language) {
	this.language = language;
}

Locale.prototype.getLanguage = function() {
	return this.language;
}

Locale.prototype.cullLangs = function() {
	var directory = this.getDirectory();
	var extension = this.getFileExtension();

	fs.readdir(directory, function(err, files) {
		if (err) console.err(err);

		for (var i = 0; i < files.length; i++) {
			if (path.extname(files[i]) != extension) {
				continue; // Skip invalid files
			}

			var language = path.basename(files[i], extension);
			self.languages.push(language);

			self[language] = require(directory + '/' + files[i]);
		}
	});
}

Locale.prototype.scanLangs = function() {
	this.cullLangs();
}

Locale.prototype.getString = function(string) {
	var language = this.getLanguage();
	return this[language][string];
}

exports.createInstance = createInstance;