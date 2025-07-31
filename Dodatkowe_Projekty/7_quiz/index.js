const questionData = [
  ['Które z tych imion jest brzydkie?', ['Kunegunda', 'Helga', 'Wanda'], 1],
  ['Z kim graniczy Polska?', ['z Madagaskarem', 'z Antarktydą', 'z Litwą'], 2],
];

class Question {
  #title;
  #answers;
  #correctAnswer;
  constructor(title, answers, correctAnswer) {
    this.#title = title;
    this.#answers = answers;
    this.#correctAnswer = correctAnswer;
  }
  get title() {
    return this.#title;
  }
  set title(newValue) {
    this.#title = newValue;
  }
  get answers() {
    return this.#answers;
  }
  //   get correctAnswer() {
  //     return this.#correctAnswer;
  //   }

  checkAnswer(answer) {
    return this.#correctAnswer === answer;
  }
}

class Quiz {
  #questions;
  #currentQuestionIndex;
  #score;
  constructor(questions) {
    this.#questions = questions.map(
      (question) => new Question(question[0], question[1], question[2])
    );
    console.log(this.#questions);
    this.#currentQuestionIndex = 0;
    this.#score = 0;
    document
      .getElementById('next')
      .addEventListener('click', () => this.nextQuestion());
  }
  displayQuestion() {
    const questionElement = document.getElementById('question');
    const answersElement = document.getElementById('answers');
    answersElement.textContent = '';

    // this.#questions[this.#currentQuestionIndex].title = 'jak tam u cb?'; // efekt settera
    questionElement.textContent =
      this.#questions[this.#currentQuestionIndex].title;
    this.#questions[this.#currentQuestionIndex].answers.forEach(
      (answer, index) => {
        const answerElement = document.createElement('li');
        answerElement.innerHTML = `<label><input type="radio" value=${index} name="answer"> ${answer}</label>`;
        answersElement.appendChild(answerElement);
      }
    );
    console.log(questionElement);
    // console.log(answersElement);
  }
  nextQuestion() {
    const selectedAnswer = document.querySelector(
      'input[name="answer"]:checked'
    );
    // console.log(selectedAnswer);

    if (selectedAnswer) {
      console.log(selectedAnswer.value);

      if (
        this.#questions[this.#currentQuestionIndex].checkAnswer(
          parseInt(selectedAnswer.value)
        )
      ) {
        console.log('brawo');
        this.#score += 1;
      } else {
        console.log('złą odp');
      }
      this.#currentQuestionIndex++;
      if (this.#currentQuestionIndex < this.#questions.length) {
        // this.displayQuestion();
      } else {
        this.displayResult();
        this.#currentQuestionIndex = 0;
      }
      this.displayQuestion();
    } else {
      alert('nie udzieliłeś odpowiedzi');
    }
  }

  displayResult() {
    const resultElement = document.getElementById('result');
    resultElement.textContent = `koniec, liczba punktów: ${this.#score} na ${
      this.#questions.length
    }`;
  }
}

const quiz = new Quiz(questionData);
quiz.displayQuestion();

// pytanie[0]
// odpowiedzi[1]
// prawidłowa odpowiedź [2]
