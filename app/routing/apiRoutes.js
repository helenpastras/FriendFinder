
// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var friendData = require("../data/friends.js");

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
  });


  // API POST Requests
  //  A POST routes /api/friends.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // ---------------------------------------------------------------------------

  app.post("/api/friends", function(req, res) {
    //  This will be used to handle incoming survey results. 
    friendData.push(req.body);
    console.log(req.body);
    
    //  This route will also be used to handle the compatibility logic. 
    //take friendVal (5)
    //store friendVal
    //take totalfriendValArr and iterate (for  loop) {
        //var prevCompatVal = compatilityVal
        //compatibilityVal = totalFriendValArr[i] - friendVal 
        
        //compatibilityVal is the value of the difference between each of all of the friends and the userfriend
        //if compatibilityVal is smaller than the compatibilityVal of the previous iteration then keep the value
        //find totalFriendValArr[i] where CompatibilityVal is smallest
        //display the two friends who have these values
    }
  )}
    // var compatibility = [];
    // for(var i = 0; i < friendData.length; i++){
    //     //in here we will 
    // }


//     }
//   )};

  // ---------------------------------------------------------------------------
