const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

const Films = function (url) {
  this.url = url;
  this.films = [];
};

Films.prototype.bindEvents = function () {
  PubSub.subscribe('SelectView:change', (evt) => {
    selectedIndex = evt.detail;
    const selectedFilm = this.films[selectedIndex];
    PubSub.publish('Films:selected-film-ready', selectedFilm);
  });
};

Films.prototype.getData = function () {
  const request = new RequestHelper(this.url);
  request.get(data => this.handleData(data));
};

Films.prototype.handleData = function (data) {
  this.films = data;
  PubSub.publish('Films:films-data-ready', this.films);
};

module.exports = Films;
