const PubSub = require('../helpers/pub_sub.js');

const SelectView = function (selectElement) {
  this.element = selectElement;
};

SelectView.prototype.bindEvents = function () {
  PubSub.subscribe('Films:films-data-ready', (evt) => {
    this.populate(evt.detail)
  });

  this.element.addEventListener('change', (evt) => {
    const selectedIndex = evt.target.value;
    PubSub.publish('SelectView:change', selectedIndex);
  })
};

SelectView.prototype.populate = function (films) {
  films.forEach((film, index) => {
    const filmOption = this.createOption(film.name, index);
    this.element.appendChild(filmOption);
  });
};

SelectView.prototype.createOption = function (title, index) {
  const option = document.createElement('option');
  option.textContent = title;
  option.value = index;
  return option;
};

module.exports = SelectView;
