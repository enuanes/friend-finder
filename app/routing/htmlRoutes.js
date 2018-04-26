// Dependencies
var path = require('path');

// Routing
module.exports = function(app) {
    // Default GET route that leads to home.html - displays home page
    app.get('/survey', function(req, res) {
        res.sendFile(path.join(__dirname + '/../public/survey.html'));
    });

    app.use(function(req, res) {
        res.sendFile(path.join(__dirname + '/../public/home.html'));
    });
};