// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
var charName = "";
function myFunction(){
    fetch('https://thesimpsonsquoteapi.glitch.me/quotes')
      .then(function(response) {
        return response.json();
      })
      .then(function(myArray) {
          console.log(myArray[0]);
          var obj = myArray[0];
          var imgElm = document.getElementById("generated_image");
          imgElm.src = obj.image;
            console.log(obj.characterDirection + " ("+(obj.characterDirection === "Right")+")");
           if(obj.characterDirection === "Left"){
            console.log(imgElm);
            imgElm.style.transform = "scaleX(-1)";
          } else { 
            imgElm.style.transform = "scaleX(1)";
          }

          charName = obj.character;
          document.getElementById("name").innerHTML = charName;
          document.getElementById("quote").innerHTML = obj.quote;
      });






// Your use of the YouTube API must comply with the Terms of Service:
// https://developers.google.com/youtube/terms
// Called automatically when JavaScript client library is loaded.

    gapi.client.load('youtube', 'v3', onYouTubeApiLoad);
}
// Called automatically when YouTube API interface is loaded (see line 9).
function onYouTubeApiLoad() {
    gapi.client.setApiKey('AIzaSyBcBWFdUBCkw5sNhQopziqh6vbrILyq-qE');
    //var query = document.getElementById('video').value;
    // Use the JavaScript client library to create a search.list() API call.

    var request = gapi.client.youtube.search.list({
        part: 'snippet',
        q: charName
});
    // Send the request to the API server, call the onSearchResponse function when the data is returned
    console.log(onSearchResponse);
    request.execute(onSearchResponse);
}
// Triggered by this line: request.execute(onSearchResponse);
function onSearchResponse(response) {
    console.log(response);
    var videos = response;
    console.log(videos.items[0].id.videoId);
    console.log(document.getElementById('video'));
    document.getElementById('video').src = "https://www.youtube.com/embed/" + videos.items[0].id.videoId;

    //document.getElementById('video').innerHTML = videos.items[0].id.videoId;
}







//AIzaSyBcBWFdUBCkw5sNhQopziqh6vbrILyq-qE













