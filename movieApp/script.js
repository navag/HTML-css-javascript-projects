const apiUrl = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=e11e2a94d6ae781f7a246c9c0b06a157&page=1';

const imgPath = 'https://image.tmdb.org/t/p/w1280/neMZH82Stu91d3iqvLdNQfqPPyl.jpg';

const searchUrl = 'https://api.themoviedb.org/3/search/movie?api_key=e11e2a94d6ae781f7a246c9c0b06a157&query="';

const form = document.getElementById('form');
const main = document.getElementById('main');
const getVoteClass = (vote) => {
  if (vote > 8) {
    return 'green'
  } else if (vote < 8 && vote >= 6) {
    return 'orange'
  } else {
    return 'red'
  }
}

const showDetails = (movieArr) => {
  main.innerHTML = '';
  movieArr.forEach(movie => {
    const { title, poster_path, vote_average, overview } = movie;
    const movieElement = document.createElement('div');
    movieElement.classList.add('movie');
    movieElement.innerHTML = `
          <img src="https://source.unsplash.com/FbxhG_8cXfs" alt="">
          <div class="movie-info">
          <h3 id="movie-title">
          ${title}
            </h3>
          <span class="${getVoteClass(vote_average)} rating">${vote_average}<span class="fa fa-star checked orange"></span>
          </span>
        </div>
        <div class="overview">
            <h3>Overview</h3>
            ${overview}
        </div>
        `
    main.appendChild(movieElement);
  })
}
const getMovies = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  showDetails(data.results)
}
getMovies(apiUrl);

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const searchText = search.value;
  if (searchText) {
    const url = searchUrl + searchText;
    getMovies(url);
  } else {
    window.location.reload()
  }
})

