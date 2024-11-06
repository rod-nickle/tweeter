$(document).ready(function() {

  // As characters are entered into the input field,
  // update the counter with the number of characters remaining.
  // The maximum length is 140 chars.  Change the counter color
  // to red when the 140 char limit is exceeded.
  $("#tweet-text").on("input", function() {
    const tweetText = $(this).val();
    const tweetTextLength = tweetText.length;
    const tweetTextCharsRemaining = 140 - tweetTextLength;
    const $form = $(this).closest("form");
    const $counter = $form.find("output[name='counter']");
    
    if ($counter) {
      $counter.val(tweetTextCharsRemaining);
      // This class will change the counter color to red.
      if (tweetTextCharsRemaining < 0) {
        $counter.addClass("counter-negative");
      } else {
        $counter.removeClass("counter-negative");
      }
    }
  });
});



