/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import questions from "../data/questions.json";
import Timer from "./Timer";

const Quiz = ({ onComplete }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [inputValue, setInputValue] = useState(""); // For integer input
  const [timerKey, setTimerKey] = useState(0); // To force timer reset

  useEffect(() => {
    setFeedback(null);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setInputValue(""); // Reset input for integer questions
    setTimerKey((prev) => prev + 1); // Increment key to reset Timer
  }, [currentIndex]);

  const handleAnswer = (option) => {
    if (isAnswered) return;

    setSelectedAnswer(option);
    setIsAnswered(true);
    if (option === questions[currentIndex].answer) {
      setScore(score + 1);
      setFeedback({ correct: true, message: "✅ Great job! Correct answer!" });
    } else {
      setFeedback({
        correct: false,
        message: "❌ Oops! That's incorrect!",
      });
    }
  };

  const handleIntegerSubmit = (e) => {
    e.preventDefault();
    if (isAnswered) return;

    const userAnswer = inputValue.trim();
    setSelectedAnswer(userAnswer);
    setIsAnswered(true);
    if (userAnswer === questions[currentIndex].answer) {
      setScore(score + 1);
      setFeedback({ correct: true, message: "✅ Great job! Correct answer!" });
    } else {
      setFeedback({
        correct: false,
        message: "❌ Oops! That's incorrect!",
      });
    }
  };

  const nextQuestion = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      onComplete(score);
    }
  };

  const handleTimeUp = () => {
    if (!isAnswered) {
      setFeedback({
        correct: false,
        message: "⌛ Time's up! Moving to next question.",
      });
      setIsAnswered(true); // Mark as answered to disable input/options
    }
    // Move to next question immediately after a short delay to show feedback
    setTimeout(nextQuestion, 1000); // 1-second delay to display feedback
  };

  const isIntegerQuestion = questions[currentIndex].options.length === 0;

  return (
    <div className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-lg">
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-800">
            Question {currentIndex + 1} of {questions.length}
          </h2>
          <Timer
            key={timerKey} // Force re-render to reset timer
            duration={30}
            onTimeUp={handleTimeUp} // Updated handler
            className="text-blue-600 font-medium"
          />
        </div>
        <p className="text-lg text-gray-700">
          {questions[currentIndex].question}
        </p>
      </div>

      {/* Conditional Rendering for Question Type */}
      {isIntegerQuestion ? (
        <form onSubmit={handleIntegerSubmit} className="space-y-3">
          <input
            type="number"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            disabled={isAnswered}
            className={`w-full p-4 rounded-lg border-2 ${
              isAnswered
                ? selectedAnswer === questions[currentIndex].answer
                  ? "bg-green-100 border-green-500"
                  : "bg-red-100 border-red-500"
                : "bg-gray-100 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            } transition-all duration-200 ${
              isAnswered ? "cursor-not-allowed opacity-75" : "cursor-text"
            }`}
            placeholder="Enter your answer"
          />
          {!isAnswered && (
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Submit Answer
            </button>
          )}
        </form>
      ) : (
        <div className="space-y-3">
          {questions[currentIndex].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(option)}
              disabled={isAnswered}
              className={`w-full p-4 rounded-lg text-left transition-all duration-200
                ${
                  selectedAnswer === option
                    ? selectedAnswer === questions[currentIndex].answer
                      ? "bg-green-100 border-green-500"
                      : "bg-red-100 border-red-500"
                    : "bg-gray-100 hover:bg-gray-200"
                }
                border-2 ${
                  isAnswered ? "cursor-not-allowed opacity-75" : "cursor-pointer"
                }`}
            >
              {option}
            </button>
          ))}
        </div>
      )}

      {feedback && (
        <div
          className={`mt-4 p-3 rounded-lg ${
            feedback.correct ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"
          }`}
        >
          {feedback.message}
        </div>
      )}

      <button
        onClick={nextQuestion}
        disabled={!isAnswered}
        className="mt-6 w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        {currentIndex === questions.length - 1 ? "Finish" : "Next"}
      </button>
    </div>
  );
};

export default Quiz;