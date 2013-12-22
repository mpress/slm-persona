var express = require('express');
var persona = require('express-persona');

module.exports = {
    "title": "Accounts",
    "name": "accounts",
    "app": function (config) {
        var app = express();
        
        // these could be wrapped in to the main app will have to test
        app.use(express.json())
        app.use(express.urlencoded())
        app.use(express.cookieParser())
        
        persona(app, opts);
        return app;
    }
}

