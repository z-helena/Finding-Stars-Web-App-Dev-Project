
let bottomText = document.getElementById("bottomText");
bottomText.style.display = "none";

const makeAppearButton = document.getElementById("bottomTextButton");
makeAppearButton.addEventListener("click", function(e){
    let x = document.getElementById("bottomText");
    if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
})