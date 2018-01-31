/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$( document ).ready(function() {
  console.log("ayo");
  function createTweetElement (tweetObj) {

    var $tweet = $("<article>").addClass("tweet");

    $("h1").text(tweetObj['user'].name);

    $("h2").text(tweetObj["user"].handle);

    $(".icon").text(tweetObj["user"].avatars.small);

    $(".aTweet").text(tweetObj["content"].text);

    $("footer").text(tweetObj.created_at);

    $('#tweets').append($tweet);

    return $tweet;

  }


// Test / driver code (temporary). Eventually will get this from the server.
const tweetData = {
  "user": {
    "name": "Newton",
    "avatars": {
      "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
      "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
      "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
    },
    "handle": "@SirIsaac"
  },
  "content": {
    "text": "If I have seen further it is by standing on the shoulders of giants"
  },
  "created_at": 1461116232227
}

var $tweet = createTweetElement(tweetData);

// Test / driver code (temporary)
console.log($tweet); // to see what it looks like
$('#tweets-container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.
console.log(tweetData["user"].name);
console.log(tweetData["user"].handle);
console.log(tweetData["user"].avatars.small);
console.log(tweetData["content"].text);
console.log(tweetData.created_at);
});