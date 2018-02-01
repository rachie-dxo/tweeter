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

  function validation () {
    var value = $('#tweet-input').value;
    var $err1 = "Please enter something";
    var $err2 = "Too many characters";
    if (value === '' || value === null) {
      $(err1).slideDown();
    } else if (value.length > 140) {
      $(err2).slideDown();
    }
    return;
  }

  function renderTweets (arr) {
    for (var dataset of arr) {
      var $individual = createTweetElement(dataset);
    }
    $('#tweets').append($individual);
  }

  $('#newtweetform').on('submit', function() {
    event.preventDefault();
    var serialized = $('#tweet-input').serialize();
    jQuery.post('/tweets', serialized, function () {
      console.log('Success ' , serialized);
      loadTweets();
    });
  });

  function loadTweets () {
    $.ajax(
      {
        url: '/tweets',
        method: 'GET',
        success: function (data) {
        console.log('Success: ', renderTweets);
        renderTweets(data);
        }
      });
}
  loadTweets();
});