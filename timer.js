const timer = document.getElementById("timer");
const timerSlider = document.getElementById("time-slider");

let max = timerSlider.max;
let elapsed = 50; //時間設定

max = elapsed / 10;
timerSlider.setAttribute("max", max);

const countDown = () => {
  elapsed--;
  startId = setTimeout(countDown, 100);
  //   const startId = setTimeout(countDown, 100);
  timer.innerText = elapsed / 10;
  timerSlider.value = elapsed / 10;
  if (elapsed === 0) {
    clearTimeout(startId);
    const timeOut = () => {
      location.reload();
    };
    quizText.innerText = imgArray[randomImg];
    setTimeout(timeOut, 1000);
  }
};
countDown();
