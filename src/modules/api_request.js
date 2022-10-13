const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/w5H6szVjLJnxg4RoIDTw/scores/';

const getScores = async () => {
  const { result } = await fetch(url).then((response) => response.json());
  return result;
};

const postScore = async (user, score) => {
  const data = { user, score };
  const result = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json());
  return result;
};

export { getScores, postScore };