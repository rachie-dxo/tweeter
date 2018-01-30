$( document ).ready(function() {
  $("textarea").on('keyup', function () {
    let input = $('#tweet-input')[0].value;
    let max = 140;
    let textlength = input.length;
    max -= textlength;
    if (max < 0) {
      $('.counter').addClass('overlimit');
    }
    $('.counter').text(max);
   });
});