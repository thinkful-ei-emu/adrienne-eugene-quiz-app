class Question {

  constructor() {

    this.text = '';
    this.answers = [];
    this.correctAnswer = '';
    this.userAnswer = '';

  }

  submitAnswer(answer) {
    this.userAnswer = answer;
  }
  //- sets the userAnswer prop
  answerStatus() {
    if(this.userAnswer === this.correctAnswer) {
      return 1;
    } else if (this.userAnswer !== this.correctAnswer) {
      return -1;
    }
    return 0;
  }                
  //- returns {Integer} indicating question's state-1: unanswered, 0: answered incorrectly, 1: answered correctly
}

export default Question;
