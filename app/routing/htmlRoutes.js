// Dependencies
var path = require('path');

// Routing
module.exports = function(app) {
    // Default GET route that leads to survey.html - displays survey page
    app.get('/survey', function(req, res) {
        res.sendFile(path.join(__dirname + '/../public/survey.html'));
    });

    // Default GET route that leads to home.html - displays home page
    app.use(function(req, res) {
        res.sendFile(path.join(__dirname + '/../public/home.html'));
    });
};