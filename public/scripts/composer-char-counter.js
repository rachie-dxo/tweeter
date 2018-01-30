$( document ).ready(function() {
  $("textarea").on('keyup', function () {
    let input = $('#tweet-input')[0].value;
    let textlength = input.length - 1;
    textlength += 1;
    $('.counter').text(textlength);
   });
});