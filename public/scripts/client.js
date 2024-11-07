/**
 * 
 * @param {*} tweet 
 * @returns 
 */
const createTweetElement = function (tweet) {
  const $tweet = $(`<article class="tweet">Hello world</article>`);

  return $tweet;

//   <article>
//   <header class="old-tweet-header">
//     <div class="old-tweet-userid">
//       <img class="avatar-small" src="/images/profile-hex.png">
//       <span>Rossa Frilli</span>
//     </div>
//     <span class="old-tweet-handle">@Frilli20</span>
//   </header>
//   <div class="old-tweet">
//     <textarea class="old-tweet-text-box">All that glitters is not gold.</textarea>
//   </div>
//   <footer class="old-tweet-footer">
//     <span class="old-tweet-timestamp"> just now</span>
//     <div class="old-tweet-button-bar">
//       <i class="fa-solid fa-flag fa-2xs hover-button"></i>
//       <i class="fa-solid fa-retweet fa-2xs hover-button"></i>
//       <i class="fa-solid fa-heart fa-2xs hover-button"></i>
//   </footer>
// </article>
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
console.log("I am here");
console.log($tweet); // to see what it looks like
$('#tweets-container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.
