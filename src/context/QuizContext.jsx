import { createContext, useContext, useReducer, useEffect } from "react";

const QuizContext = createContext();

const INITIAL_TIME = 5 * 60; // 10 menit

const initialState = {
  index: 0,
  total: 10,
  correct: 0,
  incorrect: 0,
  answered: 0,
  timeLeft: INITIAL_TIME,
  finished: false,
  categoryName: null
};

// Reducer
function reducer(state, action) {
  switch (action.type) {

    case "LOAD_STATE":
      return action.payload;

    case "SET_TOTAL":
      return {
        ...state,
        total: action.total
      };

    case "SET_CATEGORY":
      return {
        ...state,
        categoryName: action.name
    };

    case "ANSWER":
      const nextIndex = state.index + 1;

      return {
        ...state,
        index: nextIndex,
        answered: state.answered + 1,
        correct: action.isCorrect ? state.correct + 1 : state.correct,
        incorrect: !action.isCorrect ? state.incorrect + 1 : state.incorrect,
        finished: nextIndex >= state.total
      };

    case "TICK":
      if (state.timeLeft <= 1) {
        return { ...state, timeLeft: 0, finished: true };
      }
      return { ...state, timeLeft: state.timeLeft - 1 };

    case "RESET":
      return initialState;

    default:
      return state;
  }
}

// Provider
export function QuizProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Load dari storage
  useEffect(() => {
    const saved = localStorage.getItem("quizState");
    if (saved) {
      dispatch({ type: "LOAD_STATE", payload: JSON.parse(saved) });
    }
  }, []);

  // Save ke storage
  useEffect(() => {
    localStorage.setItem("quizState", JSON.stringify(state));
  }, [state]);

  // Timer countdown
  useEffect(() => {
    if (state.finished) return;

    const timer = setInterval(() => {
      dispatch({ type: "TICK" });
    }, 1000);

    return () => clearInterval(timer);
  }, [state.finished]);

  const setCategory = (name) => {
    dispatch({ type: "SET_CATEGORY", name });
  };

  const answerQuestion = (isCorrect) =>
    dispatch({ type: "ANSWER", isCorrect });

  const setTotalQuestions = (total) => {
    dispatch({ type: "SET_TOTAL", total });
  };

  const resetQuiz = () => {
    localStorage.removeItem("quizState");
    dispatch({ type: "RESET" });
  };

  return (
    <QuizContext.Provider
      value={{ 
          quizState: state, 
          answerQuestion, 
          setTotalQuestions,
          resetQuiz,
          setCategory 
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}

export const useQuizContext = () => useContext(QuizContext);