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
    $('#tweets').html('');
    for (var dataset of arr) {
      var $individual = createTweetElement(dataset);
      $('#tweets').prepend($individual);
    }
  }

  $('#newtweetform').on('submit', function() {
    event.preventDefault();
    var value = $('#tweet-input').val().length;
    if (value === 0) {
      $.flash('You\'re tweeting into the void. Try entering some text.');
      return;
    } else if (value > 140) {
      $.flash('Less is more. Try paraphrasing that, or get a diary.');
      return;
    }
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