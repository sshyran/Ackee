/*
 * @name      Ackee
 * @author    Tobias Reich
 * @copyright 2015 by Tobias Reich
 */

var server = require('./server/index.js'),
    setup  = require('./setup/index.js'),
    path   = require('path')

var keyPath     = path.join(__dirname, 'data/key.pem'),
    certPath    = path.join(__dirname, 'data/cert.pem'),
    configPath  = path.join(__dirname, 'data/config.json'),
    pluginsPath = path.join(__dirname, 'node_modules/')

// Start Ackee
var start = function() {

	// Start Ackee
	server(keyPath, certPath, configPath, pluginsPath)

}

if (setup.exists(configPath)===false) {

	// Configuration missing => Start the setup
	setup.start(configPath, start)

} else {

	// Configuration exists => Start Ackee
	start()

}