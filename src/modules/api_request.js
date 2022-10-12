const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/w5H6szVjLJnxg4RoIDTw/scores/';

const getScores = async () => {
  const { result } = await fetch(url).then((response) => response.json());
  return result;
};

const postScore = () => {
  
}

export default getScores;