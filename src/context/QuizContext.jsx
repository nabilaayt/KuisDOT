import { createContext, useContext, useReducer, useEffect } from "react";

const QuizContext = createContext();

const INITIAL_TIME = 12 * 60; // 12 menit

const initialState = {
  index: 0,
  total: 10,
  correct: 0,
  wrong: 0,
  answered: 0,
  timeLeft: INITIAL_TIME,
  finished: false
};

// Reducer
function reducer(state, action) {
  switch (action.type) {

    case "LOAD_STATE":
      return action.payload;

    case "ANSWER":
      const nextIndex = state.index + 1;

      return {
        ...state,
        index: nextIndex,
        answered: state.answered + 1,
        correct: action.isCorrect ? state.correct + 1 : state.correct,
        wrong: !action.isCorrect ? state.wrong + 1 : state.wrong,
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

  const answerQuestion = (isCorrect) =>
    dispatch({ type: "ANSWER", isCorrect });

  const resetQuiz = () => {
    localStorage.removeItem("quizState");
    dispatch({ type: "RESET" });
  };

  return (
    <QuizContext.Provider
      value={{ quizState: state, answerQuestion, resetQuiz }}
    >
      {children}
    </QuizContext.Provider>
  );
}

export const useQuizContext = () => useContext(QuizContext);