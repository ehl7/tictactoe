'use strict';

(function() {

  const GAME_BOARD = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];

  window.addEventListener('load', init);

  function init() {
    let sqaures = qsa('body > p');
    for (let i = 0; i < sqaures.length; i++) {
      let sq = sqaures[i];
      sq.addEventListener('click', playTurn);
      sq.id = i;
    }
    console.log(GAME_BOARD);
  }

  function playTurn() {
    this.textContent = 'X';
    let num = this.id;
    let row = Math.floor(parseInt(num) / 3);
    let colOffset = 3 * row;
    let col = num - colOffset;
    GAME_BOARD[row][col] = 'X';
    console.log(GAME_BOARD);
    //next do computer move with random num from available ones to pick
  }

  function cat() {

  }

 /**
   * Shorthand function for document.getElementById()
   * @param {String} id - The id of the DOM element to select
   * @return {Element} The selected Dom element
   */
  function id(id) {
    return document.getElementById(id);
  }

  /**
   * Shorthand function for document.querySelector()
   * @param {String} selector - The selector for the DOM element to select
   * @return {Element} The selected Dom element
   */
  function qs(selector) {
    return document.querySelector(selector);
  }

  /**
   * Shorthand function for document.querySelectorAll()
   * @param {String} selector - The selector for the DOM elements to select
   * @return {Array} The selected Dom elements
   */
  function qsa(selector) {
    return document.querySelectorAll(selector);
  }

  /**
   * Shorthand function for document.createElement()
   * @param {String} tagName - The tag name of the html element to be created
   * @return {Element} The newely created html element
   */
  function gen(tagName) {
    return document.createElement(tagName);
  }

})();