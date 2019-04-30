var h1 = document.querySelector("h1");
h1.addEventListener("click", function() {
  alert("h1 was clicked");
  h1.style.background = "orange";
});

// document.querySelector("ul").addEventListener("click", function() {
//   console.log("YOU CLICKED THE UL!");
// });

var lis = document.querySelectorAll("li");
for (var i = 0; i < lis.length; i++) {
  lis[i].addEventListener("click", function() {
    this.style.color = "pink";
  });
}

// var button = document.querySelector("button");
// var isPurple = false;

// button.addEventListener("click", function() {
//   if (isPurple) {
//     document.body.style.background = "white";
//   } else {
//     document.body.style.background = "purple";
//   }
//   isPurple = !isPurple;
// });

var button = document.querySelector("button");

button.addEventListener("click", function() {
  document.body.classList.toggle("purple");
});
