// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

function myFunction(){
    fetch('https://thesimpsonsquoteapi.glitch.me/quotes')
      .then(function(response) {
        return response.json();
      })
      .then(function(myArray) {
          console.log(myArray[0]);
          var obj = myArray[0];
          document.getElementById("generated_image").src = obj.image;
          document.getElementById("name").innerHTML = obj.character;
          document.getElementById("quote").innerHTML = obj.quote;
      });
}








