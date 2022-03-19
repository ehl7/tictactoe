'use strict';

(function() {

  const GAME_BOARD = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
  const AVAILABLE = []; //could maybe be a param passed to playturn

  window.addEventListener('load', init);

  function init() {
    let sqaures = qsa('#board > p');
    for (let i = 0; i < sqaures.length; i++) {
      let sq = sqaures[i];
      sq.addEventListener('click', playTurn);
      sq.id = i;
      AVAILABLE.push(i);
    }
    console.log(GAME_BOARD);
  }

  function playTurn() {
    let num = parseInt(this.id);
    updateBoard(this, num, 'X');
    let index = Math.floor(Math.random() * AVAILABLE.length);
    num = AVAILABLE[index];
    let h2 = qs('h2');
    h2.textContent = 'CPU Turn';
    setTimeout(function() {
      updateBoard(id(num.toString()), num, 'O');
      h2.textContent = 'Your Turn';
    }, 1000);
  }

  function updateBoard(space, num, symbol) {
    space.textContent = symbol;
    let position = getPosition(num);
    GAME_BOARD[position.row][position.col] = symbol;
    removeSpace(num);
  }

  function removeSpace(num) {
    let index = AVAILABLE.indexOf(num);
    //console.log(AVAILABLE);
    AVAILABLE.splice(index, 1);
  }

  function getPosition(num) {
    let row = Math.floor(num / 3);
    let colOffset = 3 * row;
    let col = num - colOffset;
    return {
      'row': row,
      'col': col
    };
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