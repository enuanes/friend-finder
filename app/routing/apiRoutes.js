// A POST routes /api/friends - this handles incoming survey routes. It will also be used to handle the compatibility logic.
// Load data.
var friendList = require('../data/friends.js');

module.exports = function(app) {
    // A GET route that displays JSON of all possible friends
    app.get('/api/friends', function(req, res) {
        res.json(friendList);
    });

    app.post('/api/friends', function(req, res) {
        // Grabs the new friends' scores to compare with friends in friendList array
        var newFriendScores = req.body.scores;
        var scoresArray = [];
        var friendCount = 0;
        var bestMatch = 0;

        // Runs through all current friends in list
        for (var i = 0; i < friendList.length; i++) {
            var scoresDiff = 0;
            // Runs through scores to compare friends
            for (var j = 0; j < newFriendScores.length; i++) {
                scoresDiff += (Math.abs(parseInt(friendList[i].scores[j]) - parseInt(newFriendScores[j])));
            }

            // Push results into scoresArray
            scoresArray.push(scoresDiff);
        }

        // After all friends are compared, find best match
        for (var i = 0; i < scoresArray.length; i++) {
            if(scoresArray[i] <= scoresArray[bestMatch]) {
                bestMatch = [i];
            }
        }

        // Return bestmatch data
        var bff = friendList[bestMatch];
        res.json(bff);

        // Pushes new submission into the friendList array
        friendList.push(req.body);
    });
};