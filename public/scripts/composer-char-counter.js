$(document).ready(function() {

  // As characters are entered into the input field, 
  // update the counter with the number of characters remaining.
  // The maximum length is 140 chars.  Change the counter color
  // to red when the 140 char limit is exceeded.
  $("#tweet-text").on("input", function(event) {
    const tweetText = $(this).val();
    const tweetTextLength = tweetText.length;
    const tweetTextCharsRemaining = 140 - tweetTextLength;
  
    const counter = document.querySelector("output[name='counter']");
    if (counter) {
      counter.value = tweetTextCharsRemaining;
      counter.className = "counter";
      // This class will change the counter color to red.
      if (tweetTextCharsRemaining < 0) {
        counter.className = "counter-negative";
      }
    }
  });

});




