
// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var friendData = require("../data/friends.js");
// var currentUser = require("../data/friends.js/userData");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // A GET route with the url /api/friends. It will be used to display a JSON of all possible friends, when users "visit" a page.
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function(req, res) {
      console.log('\n-----');
      console.log(`Data has been served.`);
      console.log('-----\n');
    res.json(friendData);
    console.log(friendData);
  });

  // API POST Requests
  //  A POST routes /api/friends.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // ---------------------------------------------------------------------------

app.post('/api/friends', function(req, res) {
  friendData.push(req.body);
  console.log(req.body);
  var compatibilityVal = [];
  for (var i = 0; i < friendData.length; i++) {
      var totalFriendValArr = 0;
      if (friendData[i].name !== req.body.name) {
          for (var j = 0; j < req.body.scores.length; j++) {
              totalFriendValArr += Math.abs(parseInt(req.body.scores[j]) - friendData[i].scores[j]);
          }
          compatibilityVal.push({index: i, difference: totalFriendValArr});
      }
  }
  console.log(compatibilityVal);
  var lowestDiff = compatibilityVal[0].difference;
  var lowestDiffIndex = 0;
  for (var i = 1; i < compatibilityVal.length; i++) {
      if (lowestDiff > compatibilityVal[i].difference) {
          lowestDiff = compatibilityVal[i].difference;
          lowestDiffIndex = i;
      }
  }
  console.log(lowestDiffIndex, lowestDiff);
  res.send(friendData[lowestDiffIndex]);
});
};

//     //  This route will also be used to handle the compatibility logic. 
//     //take current user input userData
//     //store userData in FriendData

//     var totalFriendValArr = [];
//     for(var i = 0; i < friendData.length-1; i++){

//       var prevCompatVal = compatilityVal
//        //compatibilityVal is the value of the difference between each of all of the friends and the userfriend
//       compatibilityVal = totalFriendValArr[i] - friendVal 
    
       
//         //if compatibilityVal is smaller than the compatibilityVal of the previous iteration then keep the value
//         //find totalFriendValArr[i] where CompatibilityVal is smallest
//         //display the two friends who have these values
//     } 
//       }

//   )}
//     // var compatibility = [];
//     // for(var i = 0; i < friendData.length; i++){
//     //     //in here we will 
//     // }


// //     }
// //   )};

//   // ---------------------------------------------------------------------------
