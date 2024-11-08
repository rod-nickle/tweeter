/**
 * Global Variables
 */
const hostName = "http://localhost:8080";

/**
 * Event Listeners
 */
$(document).ready(function () {
  /**
   * Make an HTTP GET request to fetch the tweets from the database and display them in our web page.
   */
  loadTweets();

  hideErrorMessage();

  /**
 *  Handle the Form Submission.
 */
  $(".new-tweet-form").on("submit", function (event) {
    event.preventDefault();

    const tweet = $("#tweet-text").val()

    // Display an error message and Exit if the Tweet is empty or exceeds the maximum number of characters.
    const errorMessage = isTweetValid(tweet);
    if (errorMessage) {
      showErrorMessage(errorMessage);
      return;
    } else {
      hideErrorMessage();
    }

    const data = $(this).serialize();
    postTweet(data);
  })
});


/**
 * Asynchronous Ajax GET request to fetch the tweets from the database and display them on the web page.
 */
const loadTweets = function () {
  $.ajax({
    url: `${hostName}/tweets`,
    method: "GET",
    success: function (data) {
      // Display the tweets on the web page.
      renderTweets(data);
    },
    error: function (xhr, status, error) {
      console.log("ERROR", xhr.status, status, error);
    }
  });
}


/**
 * Asynchronous Ajax POST to create a tweet.
 * @param {string} data 
 */
const postTweet = function (data) {
  $.ajax({
    url: `${hostName}/tweets`,
    method: "POST",
    data: data,
    success: function (response) {
      // Clear the newly entered tweet and refetch the tweets.
      $("#tweet-text").val(null);
      loadTweets();
    },
    error: function (xhr, status, error) {
      console.log("ERROR", xhr.status, status, error);
    }
  });
}


/**
 * Generates a DOM structure for a tweet
 * @param {object} tweet 
 * @returns {string} The DOM structure for a tweet
 */
const createTweetElement = function (tweet) {
  // This strips out any risky XSS content.
  const $tweetContent = $("<p class='tweet-text-box'>").text(tweet.content.text);
  const $tweet = $(`
    <article class="tweets-article">
      <header class="tweets-header">
        <div class="tweets-user">
          <img class="avatar-small" src="${tweet.user.avatars}">
          <span>${tweet.user.name}</span>
        </div>
        <span class="tweets-handle">${tweet.user.handle}</span>
      </header>
      <div class="tweet-box">
      </div>
      <footer class="tweets-footer">
        <span class="tweets-timestamp">${timeago.format(tweet.created_at)}</span>
        <div class="tweets-button-bar">
          <i class="fa-solid fa-flag fa-2xs hover-button"></i>
          <i class="fa-solid fa-retweet fa-2xs hover-button"></i>
          <i class="fa-solid fa-heart fa-2xs hover-button"></i>
      </footer>
    </article>`);

  // Put the safe tweet under the "tweet-box" div element.
  $tweet.find(".tweet-box").append($tweetContent);

  return $tweet;
}


/**
 * Loops through tweets
 * Calls createTweetElement for each tweet
 * Takes return value and prepends it to the tweets container
 * @param {[object]} tweets 
 */
const renderTweets = function (tweets) {
  $("#tweets-container").empty();
  for (tweet of tweets) {
    const $tweet = createTweetElement(tweet);
    $("#tweets-container").prepend($tweet);
  }
}


/**
 * This function checksk if the tweet is empty or exceeds the 140 character limit. 
 * If either of these conditions is met, the function should return false and display an appropriate alert message to the user. 
 * If the tweet is valid, the function should return true.
 * @param {string} tweet 
 * @returns {string} Returns an error message if the tweet is not valid
 */
const isTweetValid = function (tweet) {
  let errorMessage = null;

  // Trim whitespace from the Tweet.
  tweet = tweet.trim();

  if (!tweet) {
    return ("Message cannot be empty.");
  }

  if (tweet.length > 140) {
    return ("Message must not exceed 140 characters.");
  }

  return errorMessage;
}


const showErrorMessage = function (errorMessage) {
  console.log(errorMessage);
  $("#error-message-container").slideDown(400);
  $("#error-message").text(errorMessage);
};

const hideErrorMessage = function () {
  $("#error-message-container").slideUp(400);
  $("#error-message").text("");
};