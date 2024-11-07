$(document).ready(function () {
  
  /**
   *  Handle the Form Submission.
   */
  $('.new-tweet-form').on('submit', function (event) {
    event.preventDefault();
    
    const text = $('#tweet-text').val()

    if (!text) {
      alert("Message cannot be empty.");
      return;
    }    
   
    if (text.length > 140) {
      alert("Message must not exceed 140 characters.");
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