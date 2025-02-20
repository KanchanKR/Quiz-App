// QuizPage.jsx
import { useState } from "react";
import Quiz from "../components/Quiz";
import Scoreboard from "../components/Scoreboard";
import { openDB } from "idb";

const QuizPage = () => {
  const [isCompleted, setIsCompleted] = useState(false);
  const [score, setScore] = useState(0);
  const [username, setUsername] = useState("");
  const [showUsernameInput, setShowUsernameInput] = useState(true);
  const totalQuestions = 10;

  const handleQuizCompletion = async (finalScore) => {
    setScore(finalScore);
    setIsCompleted(true);

    const db = await openDB("QuizDB", 1, {
      upgrade(db) {
        db.createObjectStore("attempts", { keyPath: "id", autoIncrement: true });
      },
    });

    await db.add("attempts", {
      username,
      score: finalScore,
      total: totalQuestions,
      date: new Date(),
    });
  };

  const handleUsernameSubmit = (e) => {
    e.preventDefault();
    if (username.trim()) {
      setShowUsernameInput(false);
    }
  };

  const resetQuiz = () => {
    setIsCompleted(false);
    setScore(0);
    setShowUsernameInput(true);
    setUsername("");
  };

  if (showUsernameInput) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100">
        <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
          <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
            Welcome to the Quiz
          </h1>
          <form onSubmit={handleUsernameSubmit} className="space-y-4">
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="w-full py-3 bg-[#4E22FC] text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Start Quiz
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-100 to-purple-100 p-4 pt-16">
      {/* Username Header */}
      <div className="flex items-center justify-center py-4 mt-10">
        <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl font-bold mr-4">
          {username.charAt(0).toUpperCase()}
        </div>
        <h2 className="text-2xl font-semibold text-gray-800">{username}</h2>
      </div>

      <div className="flex-grow flex items-center justify-center">
        {!isCompleted ? (
          <Quiz onComplete={handleQuizCompletion} />
        ) : (
          <Scoreboard
            score={score}
            total={totalQuestions}
            username={username}
            onTryAgain={resetQuiz}
          />
        )}
      </div>
    </div>
  );
};

export default QuizPage;