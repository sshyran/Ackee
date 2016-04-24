'use strict'

/*
 * @name      Ackee
 * @author    Tobias Reich
 * @copyright 2015 by Tobias Reich
 */

let path   = require('path')
let server = require('./server/index')
let setup  = require('./setup/index')

let httpPort  = process.env.HTTP_PORT
let httpsPort = process.env.HTTPS_PORT

let keyPath     = process.env.KEY_PATH || path.join(__dirname, 'data/key.pem')
let certPath    = process.env.CERT_PATH || path.join(__dirname, 'data/cert.pem')
let configPath  = process.env.CONFIG_PATH || path.join(__dirname, 'data/config.json')
let pluginsPath = process.env.PLUGINS_PATH || path.join(__dirname, 'node_modules/')

const start = function() {

	// Start Ackee
	server.start(httpPort, httpsPort, keyPath, certPath, configPath, pluginsPath)

}

setup.exists(configPath, (exists) => {

	// Configuration missing => Start the setup
	// Configuration exists => Start Ackee
	if (exists===false) setup.start(configPath, start)
	else start()

})