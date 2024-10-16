

//Idnetifying the bottom text
let bottomText = document.getElementById("bottomText");
bottomText.style.display = "none";

//Making the bottom text apear or dissapear when the button is clicked
const MakeAppearButton = document.getElementById("bottomTextButton");
MakeAppearButton.addEventListener("click", function(e){
    let o = document.getElementById("bottomText");
    if (o.style.display === "none") {
        o.style.display = "block";
      } else {
        o.style.display = "none";
      }
})

//making the h4 element increase when clicked
const H4TextButton = document.getElementById("h4TextButton");
H4TextButton.addEventListener("click", function(f){
    let p = document.getElementById("h4Text");
    p.innerText++;
})

//And decrease with another button
const H4TextButtonSmall = document.getElementById("h4TextButtonSmall");
H4TextButtonSmall.addEventListener("click", function(k){
    let p = document.getElementById("h4Text");
    p.innerText--;
})


//The text to change the color of
let q = document.getElementById("colorP");

//The buttons to change the color on click

//Aquamarine
const aquamarineButton = document.getElementById("aquamarineButton");
aquamarineButton.addEventListener("click", function(g){  
    q.style.color = "aquamarine";
    if(q.style.animationName != null){
      q.style.animationIterationCount = "0";
    }
})

//Famlingo
const flamingoButton = document.getElementById("flamingoButton");
flamingoButton.addEventListener("click", function(h){
  q.style.color = "rgb(252,142,172)";
  if(q.style.animationName != null){
    q.style.animationIterationCount = "0";
  }
})

//And the Rainbow button!
const rainbowButton = document.getElementById("rainbowButton");
rainbowButton.addEventListener("click", function(i){

    if(q.style.animationName != null){
    q.style.animationName = "rainbow";
    q.style.animationDuration = "5s";
    q.style.animationDelay = "-2s";
    q.style.animationIterationCount = "infinite";
    q.style.animationPlayState = "running";
    } else {
      q.style.animationPlayState = "paused";
      q.style.color = "black";
    }

})

//Identifying the two pieces for the text interaction
let s = document.getElementById("yourText");
let t = document.getElementById("changedText")

//Changing the text to the value of the text box when the button is clicked.
const inputTextButton = document.getElementById("inputTextButton");
inputTextButton.addEventListener("click", function(j){
  
  t.innerText = s.value;
})




//Elements for changing the font
let r = document.getElementById("fontSelectP");
const fontDropdown = document.getElementById("fontSelect");


//A function to change the font that is called from within the html element, I just wanted to change up my aproach.
function fontChanger(){

  r.style.fontFamily = fontDropdown.value;
  r.innerText = "Experimenting with fonts!";
}

