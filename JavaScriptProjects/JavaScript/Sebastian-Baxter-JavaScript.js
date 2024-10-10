
let bottomText = document.getElementById("bottomText");
bottomText.style.display = "none";

const MakeAppearButton = document.getElementById("bottomTextButton");
MakeAppearButton.addEventListener("click", function(e){
    let o = document.getElementById("bottomText");
    if (o.style.display === "none") {
        o.style.display = "block";
      } else {
        o.style.display = "none";
      }
})

const H4TextButton = document.getElementById("h4TextButton");
H4TextButton.addEventListener("click", function(f){
    let p = document.getElementById("h4Text");
    p.innerText++;
})

let q = document.getElementById("colorP");

const aquamarineButton = document.getElementById("aquamarineButton");
aquamarineButton.addEventListener("click", function(g){  
    q.style.color = "aquamarine";
    if(q.style.animationName != null){
      q.style.animationIterationCount = "0";
    }
})

const flamingoButton = document.getElementById("flamingoButton");
flamingoButton.addEventListener("click", function(h){
  q.style.color = "rgb(252,142,172)";
  if(q.style.animationName != null){
    q.style.animationIterationCount = "0";
  }
})

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