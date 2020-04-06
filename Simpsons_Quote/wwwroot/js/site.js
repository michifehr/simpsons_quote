var charName = "";
function myFunction(){
    if (charName == ""){
        document.getElementById("lanza").removeChild(document.getElementById("image_lanza"));
    }
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

          gapi.client.load('youtube', 'v3', onYouTubeApiLoad);
     });
}


function onYouTubeApiLoad() {
    gapi.client.setApiKey('AIzaSyBcBWFdUBCkw5sNhQopziqh6vbrILyq-qE');
    var request = gapi.client.youtube.search.list({
        part: 'snippet',
        q: charName
    });
    console.log(onSearchResponse);
    request.execute(onSearchResponse);
}


function onSearchResponse(response) {
    console.log(response);
    var videos = response;
    console.log(videos.items[0].id.videoId);
    console.log(document.getElementById('video'));
    document.getElementById('video').src = "https://www.youtube.com/embed/" + videos.items[0].id.videoId;
}
