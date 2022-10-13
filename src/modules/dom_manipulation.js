import { getScores, postScore } from './api_request.js';

const displayScores = async () => {
  const scores = await getScores();
  const resultsBox = document.querySelector('.results');
  const fragment = new DocumentFragment();
  resultsBox.innerHTML = '';
  if (scores.length === 0) {
    const paragraph = document.createElement('p');
    paragraph.innerText = 'No scores yet, submit yours using the form!';
    resultsBox.append(paragraph);
  } else {
    scores.forEach((element) => {
      const { user, score } = element;
      const paragraph = document.createElement('p');
      paragraph.classList.add('score');
      paragraph.innerText = `${user}: ${score}`;
      fragment.append(paragraph);
    });
    resultsBox.append(fragment);
  }
};

const addScore = () => {
  const inputs = document.querySelector('form').elements;
  const [user, score] = [inputs[0].value, inputs[1].value];
  postScore(user, score);
  inputs[0].value = '';
  inputs[1].value = '';
  displayScores();
};

export { displayScores, addScore };