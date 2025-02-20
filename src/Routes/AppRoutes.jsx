import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import QuizPage from "../pages/QuizPage";
import HistoryPage from "../pages/HistoryPage";
import ContactUs from "../pages/ContactUs";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/quiz" element={<QuizPage />} />
      <Route path="/history" element={<HistoryPage />} />
      <Route path="/contact" element={<ContactUs />} />
    </Routes>
  );
};

export default AppRoutes;
