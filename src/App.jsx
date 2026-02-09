import { Routes, Route } from "react-router-dom";

// Pages
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Home from "./pages/Home";
import QuizAnimals from "./pages/QuizAnimals";
import QuizMusic from "./pages/QuizMusic";
import QuizResult from "./pages/QuizResult";

// Components
import ProtectedRoute from "./components/ProtectedRoute";

function App() {

  return (
    <Routes>

      {/* Public Page */}
      <Route 
        path="/" 
        element={
          <ProtectedRoute>
            <LandingPage />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/login" 
        element={
          <ProtectedRoute publicOnly>
            <Login />
          </ProtectedRoute>
        } 
      />

      {/* Protected Page */}
      <Route 
        path="/home" 
        element={
          <ProtectedRoute requireAuth>
            <Home />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/quizAnimals" 
        element={
          <ProtectedRoute requireAuth>
            <QuizAnimals />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/quizMusic" 
        element={
          <ProtectedRoute requireAuth>
            <QuizMusic />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/quizResult" 
        element={
          <ProtectedRoute requireAuth>
            <QuizResult />
          </ProtectedRoute>
        } 
      />
    </Routes>
  );
};

export default App;