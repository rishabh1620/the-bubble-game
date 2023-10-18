

let timer = 60;
let score = 0;
let hitrn = 0;

const reset = () => {
  window.location.reload()
}
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
  const bubbleCount = window.innerWidth <= 400 ? 50 : 176;
  for (let i = 1; i <= bubbleCount; i++) {
    let rn = Math.floor(Math.random() * 10);
    clutter += `<div id=${i} class="bubble">${rn}</div>`;
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
      document.querySelector("#cbtm").innerHTML = `<div class="reset">
      <h2>Game Over</h2><button class="btn" onClick="reset()">Play Again</button></div>`;

    }
  }, 1000);
}

document.querySelector("#cbtm").addEventListener("click", function (num) {
  console.log(num.target);
  let bubblenum = Number(num.target.textContent);
  if (bubblenum === hitrn) {
    num.target.classList.add("shake");
    num.target.style.opacity = 0;
    num.target.style.scale = 2;
    setTimeout(() => {
      increaseScore();
      makeBubble();
      getNewHit();
      num.target.classList.remove("shake");
    }, 500);
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
