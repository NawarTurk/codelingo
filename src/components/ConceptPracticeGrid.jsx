import React, { useState } from "react";

export default function ConceptPracticeGrid({ questions }) {
  const [answersState, setAsnwersState] = useState(
    new Array(questions.length).fill(null)
  );

  function handleButtonClick(isCorrect, index) {
    let tempAnswersState = [...answersState];
    tempAnswersState[index] = isCorrect;
    setAsnwersState(tempAnswersState);
  }

  function handleReset() {
    setAsnwersState(new Array(questions.length).fill(null));
  }

  function countCorrectResult() {
    const result = answersState.reduce(
      (acc, answer) => {
        if (answer) {
          acc.correct++;
        } else if (answer === false) {
          acc.wrong++;
        }
        return acc;
      },
      {
        correct: 0,
        wrong: 0,
      }
    );

    const totalAnswers = result.wrong + result.correct;

    if (totalAnswers === 0) {
      return "0%";
    }

    const resultPercentage =
      Math.floor((result.correct / totalAnswers) * 100) + "%";

    return resultPercentage;
  }

  return (
    <div>
      <button onClick={() => handleReset()}>Reset</button>
      <p>{countCorrectResult()}</p>
      {questions.map((question, questionIndex) => (
        <div key={questionIndex}>
          <h1>{question.questionText}</h1>
          {question.answers.map((answer, answerIndex) => (
            <div>
              <button
                onClick={() =>
                  handleButtonClick(answer.isCorrect, questionIndex)
                }
                key={answerIndex}
              >
                {answer.answerText}
              </button>
            </div>
          ))}
          {answersState[questionIndex] != null &&
            (answersState[questionIndex] ? "correct" : "try again!")}
        </div>
      ))}
    </div>
  );
}
