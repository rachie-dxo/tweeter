$( document ).ready(function() {
  $("textarea").on('keyup', function () {
    let input = $('#tweet-input')[0].value;
    let textlength = input.length;
    textlength += 1;
    $('.counter').text(textlength);
   });

});

// document.addEventListener("click", (event) => {
//   let count = Number($count.innerText);
//   count += 1;
//   $count.innerText = count;
//   console.log(count);
// });