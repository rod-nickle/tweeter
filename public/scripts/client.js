$(document).ready(function () {
  /**
   * Make an HTTP GET request to fetch the tweets from the database and display them in our web page.
   */
  loadTweets();

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
 * Asynchronous Ajax GET request to fetch the tweets from the database and display them in our web page.
 */
const loadTweets = function () { 
  $.ajax({
    url: "http://localhost:8080/tweets",
    method: 'GET',
    success: function (data) {
      renderTweets(data);
    },
    error: function (xhr, status, error) {
      console.log("ERROR", xhr.status, status, error);
    }
  });
}


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

      // Refetch the tweets after the tweet has been POSTed.
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
        <p class="tweet-text-box">${tweet.content.text}</p>
      </div>
      <footer class="tweets-footer">
        <span class="tweets-timestamp">${timeago.format(tweet.created_at)}</span>
        <div class="tweets-button-bar">
          <i class="fa-solid fa-flag fa-2xs hover-button"></i>
          <i class="fa-solid fa-retweet fa-2xs hover-button"></i>
          <i class="fa-solid fa-heart fa-2xs hover-button"></i>
      </footer>
    </article>`);

  return $tweet;
}


/**
 * loops through tweets
 * calls createTweetElement for each tweet
 * takes return value and appends it to the tweets container
 * @param {[object]} tweets 
 */
const renderTweets = function (tweets) {
  for (tweet of tweets){
    const $tweet = createTweetElement(tweet);
    $('#tweets-container').prepend($tweet);
  }
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