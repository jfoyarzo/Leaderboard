import './style.css';
import { displayScores, addScore } from './modules/dom_manipulation.js';

const refreshBtn = document.querySelector('#refresh');
const submitBtn = document.querySelector('#submit');

displayScores();

refreshBtn.addEventListener('click', displayScores);
submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  addScore();
  displayScores();
});
