import { Link } from "react-router-dom";
import QuestionImage from "../assets/QuestionImage.png"; // Adjust path if needed

const Home = () => {
  return (
    <section className="flex items-center justify-center min-h-[85vh] bg-gradient-to-br from-blue-100 to-purple-100 px-4 sm:px-6 lg:px-8 pt-20 pb-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 items-center">
        {/* Left Side: Text */}
        <div className="text-center md:text-left px-4 sm:px-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Test your knowledge with fun quizzes!
          </h1>
          <p className="text-base sm:text-lg text-gray-600 mt-4">
            Interactive Quiz Platform
          </p>
          <Link
            to="/quiz"
            className="mt-6 inline-block bg-[#4E22FC] text-white px-4 py-2 sm:px-6 sm:py-3 text-base sm:text-lg font-medium rounded-lg shadow-md hover:bg-[#3B1AD9] transition-all duration-200"
          >
            Start Quiz
          </Link>
        </div>

        {/* Right Side: Image */}
        <div className="flex justify-center mt-8 md:mt-0">
          <img
            src={QuestionImage}
            alt="Quiz Illustration"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;