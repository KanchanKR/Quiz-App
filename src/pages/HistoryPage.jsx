// History.jsx
import { useEffect, useState } from "react";
import { openDB } from "idb";

const History = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const fetchHistory = async () => {
      const db = await openDB("QuizDB", 1, {
        upgrade(db) {
          if (!db.objectStoreNames.contains("attempts")) {
            db.createObjectStore("attempts", { keyPath: "id", autoIncrement: true });
          }
        },
      });
      const allAttempts = await db.getAll("attempts");
      setHistory(allAttempts);
    };
    fetchHistory();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100 p-6">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-2xl p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Quiz History
        </h2>
        {history.length === 0 ? (
          <p className="text-gray-600 text-center">No quiz attempts yet!</p>
        ) : (
          <div className="space-y-4">
            {history.map((attempt) => (
              <div
                key={attempt.id}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg shadow-sm hover:bg-gray-100 transition-colors"
              >
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white text-lg font-bold mr-4">
                    {attempt.username.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-gray-800">
                      {attempt.username}
                    </p>
                    <p className="text-sm text-gray-600">
                      {new Date(attempt.date).toLocaleString()}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-lg font-medium text-gray-700">
                    Score: {attempt.score}/{attempt.total}
                  </p>
                  <p className="text-sm text-gray-500">
                    {((attempt.score / attempt.total) * 100).toFixed(1)}%
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
        <a
          href="/"
          className="block mt-6 text-center py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
};

export default History;