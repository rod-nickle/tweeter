/**
 * 
 * @param {*} tweet 
 * @returns 
 */
const createTweetElement = function (tweet) {
  // const $tweet = $(`<article class="tweets-article">Hello world</article>`);


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


// Test / driver code (temporary). Eventually will get this from the server.
const tweetData = {
  "user": {
    "name": "Newton",
    "avatars": "https://i.imgur.com/73hZDYK.png",
    "handle": "@SirIsaac"
    },
  "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
  "created_at": 1461116232227
}

const $tweet = createTweetElement(tweetData);

// Test / driver code (temporary)
// console.log("I am here");
// console.log($tweet); // to see what it looks like
$('#tweets-container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.
