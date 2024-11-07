$(document).ready(function () {
  
  /**
   *  Handle the Form Submission.
   */
  $('.new-tweet-form').on('submit', function (event) {
    event.preventDefault();
    
    const tweet = $('#tweet-text').val()

    // Exit if the Tweet is empty or exceeds the maximum number of characters.
    if (!isTweetValid(tweet)) {
      return;
    }


    const data = $('#tweet-text').serialize()
    const url = "http://localhost:8080/tweets";

    postTweet(url, data);
  })

});

/**
 * Asynchronous Ajax POST to create a tweet.
 * @param {string} url 
 * @param {string} data 
 */
const postTweet = function (url, data) {
  $.ajax({
    url: url,
    method: 'POST',
    data: data,
    success: function (response) {
      console.log("SUCCESS", response);
    },
    error: function (xhr, status, error) {
      console.log("ERROR", xhr.status, status, error);
    }
  });
}

/**
 * This function checksk if the tweet is empty or exceeds the 140 character limit. 
 * If either of these conditions is met, the function should return false and display an appropriate alert message to the user. 
 * If the tweet is valid, the function should return true.
 * @param {string} tweet 
 * @returns {boolean} true if the tweet is valid; otherwise false
 */
const isTweetValid = function (tweet) {
  // Trim whitespace from the Tweet.
  tweet = tweet.trim();

  if (!tweet) {
    alert("Message cannot be empty.");
    return false;
  }    
 
  if (tweet.length > 140) {
    alert("Message must not exceed 140 characters.");
    return false;
  }

  return true;
}