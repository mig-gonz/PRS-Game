let paper = "./images/paper.png";
let rock = "./images/rock.png";
let scissor = "./images/scissors.png";
let resetImage = "./images/emoji.jpg";
// dom elements
let firstBtn = document.querySelector("#first-btn");
let secondBtn = document.querySelector("#second-btn");
let image = document.querySelector("#opening-image");

firstBtn.addEventListener("click", function () {
  let randomNum = Math.ceil(Math.random() * 3);
  if (randomNum == 1) {
    console.log(1);
    image.src = paper;
    document.getElementById("text").innerHTML = "paper";
  } else if (randomNum == 2) {
    console.log(2);
    image.src = rock;
    document.getElementById("text").innerHTML = "rock";
  } else if (randomNum == 3) {
    console.log(3);
    image.src = scissor;
    document.getElementById("text").innerHTML = "scissor";
  }

  firstBtn.textContent = "go again";
});
secondBtn.addEventListener("click", function () {
  // console.log("second button");
  image.src = resetImage;
  firstBtn.textContent = "start game";
  document.getElementById("text").innerHTML = "";
});
