var friends = require("../data/friends");



module.exports = function(app) {

// -------------------------------------------------
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

// -------------------------------------------------
  app.post("/api/friends", function(req, res) {


      var bestFriend = {
         name: "",
         image: "",
         difference: 20
      };

    var user = req.body;
    var uName = user.name;
    var uPhoto = user.photo;
    var uScores = user.scores;



    var difference = 0;

    for (var i = 0; i < friends.length; i++) {

      for (var n = 0; n < friends[i].scores[n]; n++) {

        difference += Math.abs(parseInt(uScores[n]) - parseInt(friends[i].scores[n]));

        if (difference <= bestFriend.difference) {
          bestFriend.name = friends[i].name;
          bestFriend.photo = friends[i].photo;
          bestFriend.difference = difference;
        }
      }

};

console.log(user);

friends.push(user);

res.json(bestFriend);

});



};
