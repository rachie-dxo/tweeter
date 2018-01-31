/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$( document ).ready(function() {
  function createTweetElement (tweetObj) {
    const $tweet = $("<article>").addClass("tweets");
    const $header = $('<header>');
    const $span = $('<span>').addClass("aTweet").text(tweetObj["content"].text);
    const $footer = $('<footer>').text(tweetObj.created_at);
    const $h1 = $('<h1>').text(tweetObj['user'].name);
    const $h2 = $('<h2>').text(tweetObj["user"].handle);
    const $image = $('<img>').addClass("icon").attr('src', tweetObj["user"].avatars.small);

    $header.append($image);
    $header.append($h1);
    $header.append($h2);
    $tweet.append($header);
    $tweet.append($span);
    $tweet.append($footer);

      return $tweet;
  }

function renderTweets (arr) {
  for (var dataset of arr) {
    var $individual = createTweetElement(dataset);
    $('#tweets').append($individual);
  }
}

$('#newtweetform').on('submit', function() {
  event.preventDefault();
});

// Test / driver code (temporary). Eventually will get this from the server.
const data = [
  {
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
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": {
        "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
        "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
        "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
      },
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  },
  {
    "user": {
      "name": "Johann von Goethe",
      "avatars": {
        "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
        "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
        "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
      },
      "handle": "@johann49"
    },
    "content": {
      "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
    },
    "created_at": 1461113796368
  }
];

renderTweets(data);
});