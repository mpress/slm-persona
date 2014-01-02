var express = require('express');
var persona = require('express-persona');
var _ = require("underscore");

module.exports = {
    "title": "Authentication",
    "name": "authentication",
    "routes": [
        {
            name: "Logout",
            click: "navigator.id.logout()"
        }
    ],
    "app": function (config) {
        var app = express();
        
        _.extend(config, {
            verifyPath: "/verify",
            logoutPath: "/logout"
        });
        
        // these could be wrapped in to the main app will have to test
        app.use(express.json())
        app.use(express.urlencoded())
        
        persona(app, config);
        return app;
    }
}

