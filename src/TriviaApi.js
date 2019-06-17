

class TriviaApi {
  constructor() {
    this.baseUrl = 'https://opentdb.com/api.php?amount=5&type=multiple';
  }

  listApiFetch(...args) {
    let error;
    return fetch(...args)
      .then(res => {
        if (!res.ok) {
          error = { code: res.status };
          if (!res.headers.get('content-type').includes('json')) {
            error.message = res.statusText;
            return Promise.reject(error);
          }
        }
        return res.json();
      })
      .then(data => {
        if (error) {
          error.message = data.message;
          return Promise.reject(error);
        }
        return data;
      });
  };
  

  getQuestions() {
    return listApiFetch(this.baseUrl)
      // .then (res => {
      //   if (res.status !== 200) {
      //     return res;
      //   }
      //   return res.json();
      // })
      // .then (data => {
      //   if (data.results) {
      //     return data.results;
      //   }
      //   return {errorCode: data.status};
      // });
  }
 
}

export default TriviaApi;