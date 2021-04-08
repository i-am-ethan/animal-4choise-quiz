window.onload = function () {
  getDownLoadImgs();
};

function getDownLoadImgs() {
  for (let i = 0; i < imgArray.length; i++) {
    let img = document.createElement("img");
    img.src = `./img/${imgArray[i]}.png`;
  }
}

const container = document.getElementById("container");
const imgs = document.getElementById("imgs");
const quizText = document.getElementById("quiz-text");
const randomImg = Math.floor(Math.random() * 5);
const randomA = Math.floor(Math.random() * 5);
const randomB = Math.floor(Math.random() * 5);
const randomC = Math.floor(Math.random() * 5);
const randomD = Math.floor(Math.random() * 5);
const img = document.createElement("img");
const answerA = document.getElementById("answer-a");
const answerB = document.getElementById("answer-b");
const answerC = document.getElementById("answer-c");
const answerD = document.getElementById("answer-d");

img.src = `./img/${imgArray[randomImg]}.png`;
imgs.appendChild(img);

if (imgArray[randomImg] == animalName[randomA]) {
  console.log("正解");
}

answerA.innerText = animalName[randomA];
answerB.innerText = animalName[randomB];
answerC.innerText = animalName[randomC];
answerD.innerText = animalName[randomD];

function buttonClick(btn, seconds) {
  btn.addEventListener("click", () => {
    quizText.innerText = imgArray[randomImg];
    clearTimeout(startId);
    setTimeout(() => {
      location.reload();
    }, 1000 * seconds);
  });
}
buttonClick(answerA, 1);
buttonClick(answerB, 1);
buttonClick(answerC, 1);
buttonClick(answerD, 1);
