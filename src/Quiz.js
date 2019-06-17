import Question from './Question';



class Quiz {

  static DEFAULT_QUIZ_LENGTH = 2;

  constructor() {
    // Array of Question instances
    this.unasked = [];
    // Array of Question instances
    this.asked = [];
    this.active = false;
    this.score = 0;
    this.scoreHistory= [];
  }

  startGame() {
    this.active = true;
  }

  questionAsked() {
    this.unasked.forEach(function(elem, index) { this.unasked.splice(index, 1); this.asked.push(elem); });
  }

  quizScore() {
    if (Question.answerStatus() === 1) {
      this.score += 1;
    }
  }

  gameScoreHistory() {
    if (this.unasked.length < 1 && active === false) {
      this.scoreHistory.push(this.score);
    }
  }

  highScore() {
    console.log(Math.max(...this.scoreHistory));
    return Math.max(...this.scoreHistory);
  }
}

 
export default Quiz;
