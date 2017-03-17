/* globals $ */

/* 

Create a function that takes an id or DOM element and:
  

*/

function solve() {
  return function (selector) {
    if (!(selector instanceof HTMLElement)) {
      selector = document.getElementById(selector);
      if (!selector) {
        throw Error('invalid selector');
      }
    }

    var buttons = selector.getElementsByClassName('button');

    for (var index = 0; index < buttons.length; index += 1) {
      buttons[index].addEventListener('click', changeVisibility);
      buttons[index].innerHTML = 'hide';
    }
    // BGCoder dont like this
    // Object.keys(buttons).map(x => buttons[x].innerHTML = 'hide');
    function changeVisibility(event) {
      var nextSibl = event.target.nextElementSibling;
      while (nextSibl && nextSibl.className !== 'content') {
        nextSibl = nextSibl.nextElementSibling;
      }
      if (nextSibl) {
        if (nextSibl.style.display === "none") {
          nextSibl.style.display = '';
          event.target.innerHTML = 'hide'
        } else {
          nextSibl.style.display = 'none';
          event.target.innerHTML = 'show'
        }
      }
    }
  };
};

module.exports = solve;