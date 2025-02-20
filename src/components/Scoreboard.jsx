/* eslint-disable react/prop-types */
// Scoreboard.jsx


const Scoreboard = ({ score, total, username, onTryAgain }) => {
  const percentage = (score / total) * 100;

  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md text-center">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Quiz Completed, {username}!
      </h1>
      <div className="mb-6">
        <div className="relative pt-1">
          <div className="flex mb-2 items-center justify-between">
            <span className="text-lg font-semibold text-gray-700">
              Your Score
            </span>
            <span className="text-xl font-bold text-blue-600">
              {score}/{total}
            </span>
          </div>
          <div className="overflow-hidden h-3 mb-4 text-xs flex rounded bg-gray-200">
            <div
              style={{ width: `${percentage}%` }}
              className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-600"
            ></div>
          </div>
        </div>
      </div>
      <p className="text-lg text-gray-600 mb-6">
        You got {score} out of {total} questions correct ({percentage}%)!
      </p>
      <div className="flex space-x-4">
        <button
          onClick={onTryAgain}
          className="flex-1 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
        >
          Try Again
        </button>
        <a
          href="/"
          className="flex-1 py-3 bg-[#4E22FC] text-white rounded-lg hover:bg-blue-700 transition-colors text-center"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
};

export default Scoreboard;