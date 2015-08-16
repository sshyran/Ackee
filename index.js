/*
 * @name      Ackee
 * @author    Tobias Reich
 * @copyright 2015 by Tobias Reich
 */

var server = require('./server/index.js'),
    setup  = require('./setup/index.js'),
    path   = require('path')

var httpPort  = process.env.HTTP_PORT,
    httpsPort = process.env.HTTPS_PORT

var keyPath     = process.env.KEY_PATH || path.join(__dirname, 'data/key.pem'),
    certPath    = process.env.CERT_PATH || path.join(__dirname, 'data/cert.pem'),
    configPath  = process.env.CONFIG_PATH || path.join(__dirname, 'data/config.json'),
    pluginsPath = process.env.PLUGINS_PATH || path.join(__dirname, 'node_modules/')

// Start Ackee
var start = function() {

	// Start Ackee
	server(httpPort, httpsPort, keyPath, certPath, configPath, pluginsPath)

}

if (setup.exists(configPath)===false) {

	// Configuration missing => Start the setup
	setup.start(configPath, start)

} else {

	// Configuration exists => Start Ackee
	start()

}