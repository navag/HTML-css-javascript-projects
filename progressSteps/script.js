const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let currentActiveCir = 1;

next.addEventListener('click', () => {
  currentActiveCir++;
  const length = circles.length;
  if (currentActiveCir > length) {
    currentActiveCir = length;
  }
  updateDom();
});

prev.addEventListener('click', () => {
  currentActiveCir--;
  const length = circles.length;
  if (currentActiveCir < 1) {
    currentActiveCir = 1;
  }
  updateDom();
});

const updateDom = () => {
  progress.style.width = `${((currentActiveCir-1)/(circles.length-1))*100}%`;
  circles.forEach((circle, id) => {
    if (id < currentActiveCir) {
      circle.classList.add('active');
    } else {
      circle.classList.remove('active');
    }
  })
  if (currentActiveCir === 1) {
    prev.disabled = true;
  } else if(currentActiveCir === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}
