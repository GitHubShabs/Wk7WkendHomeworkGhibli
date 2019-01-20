const PubSub = require('../helpers/pub_sub.js');

const FilmView = function (container) {
  this.container = container;
};

FilmView.prototype.bindEvents = function () {
  PubSub.subscribe('Films:selected-film-ready', (evt) => {
    this.clearFilm();
    this.render(evt.detail);
  });
};

FilmView.prototype.render = function (film) {
  const filmName = this.createTextElement('h2', film.name);
  this.container.appendChild(filmName);

  const filmDescription = this.createTextElement('p', film.description);
  this.container.appendChild(filmDescription);

  const filmDirector = this.createTextElement('p', film.director);
  this.container.appendChild(filmDirector);


  };


FilmView.prototype.clearFilm = function () {
  this.container.innerHTML = '';
};

module.exports = FilmView;
