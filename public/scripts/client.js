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
        <textarea class="tweet-text-box">${tweet.content.text}</textarea>
      </div>
      <footer class="tweets-footer">
        <span class="tweets-timestamp">${tweet.created_at}</span>
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
    $('#tweets-container').append($tweet);
  }
}

// Fake Data for testing purposes.
const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]

// Display the tweets on our page.
renderTweets(data);

