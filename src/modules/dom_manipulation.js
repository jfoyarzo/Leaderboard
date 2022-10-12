import { getScores, postScore } from './api_request.js';

const displayScores = async () => {
  const scores = await getScores();
  const resultsBox = document.querySelector('.results');
  const fragment = new DocumentFragment();
  const paragraph = document.createElement('p');
  if (scores.length === 0) {
    paragraph.innerText = 'No scores yet, submit yours using the form!';
    resultsBox.append(paragraph);
  } else {
    scores.forEach((element) => {
      const { user, score } = element;
      paragraph.classList.add('score');
      paragraph.innerText = `${user}: ${score}`;
      fragment.append(paragraph);
    });
    resultsBox.append(fragment);
  }
};

const addScore = () => {
  
}

export default displayScores;