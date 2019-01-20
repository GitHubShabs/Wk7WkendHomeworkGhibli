const Films = require('./models/films.js');
const SelectView = require('./views/select_view.js');
const FilmView = require('./views/film_view.js');




document.addEventListener('DOMContentLoaded', function () {
  console.log('JavaScript is now loaded!');
});


// fetch('https://ghibliapi.herokuapp.com/films')
//   .then(function(response) {
//     return response.json();
//   })
//   .then(function(myJson) {
//     console.log(JSON.stringify(myJson));
//   });



  document.addEventListener('DOMContentLoaded', () => {
    const selectElement = document.querySelector('select#films');
    const selectView = new SelectView(selectElement);
    selectView.bindEvents();

    const filmContainer = document.querySelector('#film');
    const filmView = new FilmView(filmContainer);
    filmView.bindEvents();

    const films = new Films('https://ghibliapi.herokuapp.com/films');
    films.bindEvents();
    films.getData();
  });
