$(document).ready(function() {

  // As characters are entered into the input field, 
  // update the counter with the number of characters remaining.
  // The maximum length is 140 chars.  Change the counter color
  // to red when the 140 char limit is exceeded.
  $("#tweet-text").on("input", function(event) {
    const counterElement = "output[name='counter']";
    const tweetText = $(this).val();
    const tweetTextLength = tweetText.length;
    const tweetTextCharsRemaining = 140 - tweetTextLength;
  
    if ($(counterElement)) {
      $(counterElement).val(tweetTextCharsRemaining);
      // This class will change the counter color to red.
      if (tweetTextCharsRemaining < 0) {
        $(counterElement).addClass("counter-negative");
      } else {
        $(counterElement).removeClass("counter-negative");
      }
    }
  });

});




