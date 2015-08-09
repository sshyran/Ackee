/*
 * @name      Ackee
 * @author    Tobias Reich
 * @copyright 2015 by Tobias Reich
 */

var core   = require('./core/index.js'),
    setup  = require('./setup/index.js'),
    path   = require('path')

var keyPath    = path.join(__dirname, 'setup/data/key.pem'),
    certPath   = path.join(__dirname, 'setup/data/cert.pem'),
    configPath = path.join(__dirname, 'setup/data/config.json')

// Configuration missing? => Start the setup
if (setup.exists(configPath)===false) {
	setup.start(configPath)
	return true
}

core(keyPath, certPath, configPath)