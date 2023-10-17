let timer = 60;
let score = 0;
let hitrn = 0;

function increaseScore() {
  score += 10;
  document.querySelector("#scoreval").textContent = score;
}

function getNewHit() {
  hitrn = Math.floor(Math.random() * 10);
  document.querySelector("#hitval").textContent = hitrn;
}

function makeBubble() {
  let clutter = "";

  for (let i = 1; i <= 176; i++) {
    let rn = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${rn}</div>`;
  }

  document.querySelector("#cbtm").innerHTML = clutter;
}

function runTimer() {
  let timerint = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerval").textContent = timer;
    } else {
      clearInterval(timerint);
      document.querySelector("#cbtm").innerHTML = `<h2>Game Over</h2>`;
    }
  }, 1000);
}

document.querySelector("#cbtm").addEventListener("click", function (num) {
  let bubblenum = Number(num.target.textContent);
  if (bubblenum === hitrn) {
    increaseScore();
    makeBubble();
    getNewHit();
  }
});

runTimer();
makeBubble();
getNewHit();

// hover function

function changeInnerHTML(element) {
  // Change the inner HTML when hovered
  element.innerHTML = `<section class="stage">
  <figure class="ball bubble-l text">
    Bubble
  </figure>
</section>`;
}

function restoreInnerHTML(element) {
  // Restore the original inner HTML when the mouse leaves
  element.innerHTML = `<div>
    <p class="text">Bubble</p>
    </div>`;
}
