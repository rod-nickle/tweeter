$(document).ready(function () {
  // Make an HTTP GET request to fetch the tweets from the database and display them in our web page.
  loadTweets();
});


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
 * Make an HTTP GET request to fetch the tweets from the database  and display them in our web page.
 */
const loadTweets = function () { 
  $.ajax({
    url: "http://localhost:8080/tweets",
    method: 'GET',
    success: function (data) {
      console.log(data);
      renderTweets(data);
    },
    error: function (xhr, status, error) {
      console.log("ERROR", xhr.status, status, error);
    }
  });
}


