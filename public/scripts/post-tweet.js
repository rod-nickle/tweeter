$(document).ready(function () {
  
  /**
   *  Handle the Form Submission.
   */
  $('.new-tweet-form').on('submit', function (event) {
    event.preventDefault();
    
    const data = $('#tweet-text').serialize()
    const url = `http://localhost:8080/tweets`;

    postTweet(url, data);
  })

});

/**
 * Asynchronous Ajax POST to create a tweet.
 * @param {*} url 
 * @param {*} data 
 */
const postTweet = function (url, data) {
  console.log(url, data);

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