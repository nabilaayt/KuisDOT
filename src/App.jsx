import { Routes, Route } from "react-router-dom";

// Pages
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Home from "./pages/Home";
import QuizAnimals from "./pages/QuizAnimals";
import QuizMusic from "./pages/QuizMusic";
import QuizResult from "./pages/QuizResult";

function App() {

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/quizAnimals" element={<QuizAnimals />} />
      <Route path="/quizMusic" element={<QuizMusic />} />
      <Route path="/quizResult" element={<QuizResult />} />
    </Routes>
  );
};

export default App;