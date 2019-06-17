class TriviaApi {
  const baseUrl = 'https://opentdb.com/api.php?amount=5&type=multiple';

 

const getQuestions = function() {
  return fetch(baseUrl)
    .then (res => {
      if (res.status !== 200) {
        return resizeTo;
      }
      return res.json();
    })
    .then (data => {
      if (data.results) {
        console.log(data.results);
        return data.results;
      }
      return {errorCode: data.status};
    })
}
 
}

export default TriviaApi;