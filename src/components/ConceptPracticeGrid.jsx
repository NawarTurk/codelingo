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

  function getResults() {
    const result = answersState.reduce(
      (acc, answer, index) => {
        if (answer) {
          acc.correct++;
          acc.remainingQuestions--;
        } else if (answer === false) {
          acc.wrong++;
          acc.remainingQuestions--;
          acc.conceptsToRevise.push(questions[index].category);
        }
        return acc;
      },
      {
        correct: 0,
        wrong: 0,
        remainingQuestions: questions.length,
        conceptsToRevise: [],
      }
    );

    const totalAnswers = result.wrong + result.correct;

    if (totalAnswers === 0) {
      return {
        score: "0%",
        remainingQuestions: result.remainingQuestions,
        conceptsToRevise: result.conceptsToRevise,
      };
    }

    const resultPercentage =
      Math.floor((result.correct / totalAnswers) * 100) + "%";

    return {
      score: resultPercentage,
      remainingQuestions: result.remainingQuestions,
      conceptsToRevise: result.conceptsToRevise,
    };
  }

  const { score, remainingQuestions, conceptsToRevise } = getResults();

  return (
    <div>
      <button onClick={() => handleReset()}>Reset</button>
      <p>Score: {score}</p>
      <p>
        remaining questions:{" "}
        {remainingQuestions === 0 ? "All Done! Good Job" : remainingQuestions}
      </p>
      <div>
        <h3>Concepts you got wrong:</h3>
        <div>
          {conceptsToRevise.map((concept) => (
            <span> {concept},</span>
          ))}
        </div>
      </div>
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
