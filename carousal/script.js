const imagContainer = document.getElementById('image-container');
const leftArrow = document.getElementById('leftArrow');
const rightArrow = document.getElementById('rightArrow');
// const caption = document.getElementById('caption');
const changer = document.getElementById('image-changer');
const imgArr = [
  {
    // url: 'https://source.unsplash.com/KonWFWUaAuk',
    url: './assets/2022_05_24_19_29_58_92_Recommendations_Navnath_Galande_LinkedIn.jpg',
    caption: 'second image'
  },
  {
    // url: 'https://source.unsplash.com/kdsA7f3WmFQ',
    url: './assets/2022_05_24_19_35_14_92_Recommendations_Navnath_Galande_LinkedIn.png',
    caption: 'third image'
  },
  {
    // url: 'https://source.unsplash.com/D76DklsG-5U',
    url: './assets/2022_05_24_19_38_11_92_Recommendations_Navnath_Galande_LinkedIn.jpg',
    caption: 'fourth image'
  },
  {
    url: './assets/2022_05_24_19_39_29_92_Recommendations_Navnath_Galande_LinkedIn.jpg',
    caption: 'fifth image'
  }
];
let id = 0;

const renderCircles = () => {
  changer.innerHTML = '';
  imgArr.forEach((item, index) => {
    const circle = document.createElement('span');
    circle.classList.add('circle');
    circle.id = index;
    if (id === index) {
      circle.classList.add('active');
    }
    circle.addEventListener('click', (e) => {
      id = Number(e.target.id);
      renderImg(id);
    })
    changer.appendChild(circle);
  });
}

const renderImg = (id) => {
  imagContainer.style.backgroundImage = `url(${imgArr[id].url})`;
  // caption.innerHTML = imgArr[id].caption;
  renderCircles();
}

const getPreviousImg = () => {
  id--;
  if (id < 0) {
    id = imgArr.length - 1;
  }
  renderImg(id);
};

const getNextImg = () => {
  id++;
  if (id >= imgArr.length) {
    id = 0;
  }
  renderImg(id);
};

leftArrow.addEventListener('click', getPreviousImg);

rightArrow.addEventListener('click', getNextImg);

setInterval(getNextImg, 10000);
renderCircles();