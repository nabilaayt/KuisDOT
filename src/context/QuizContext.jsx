import { createContext, useContext, useEffect, useState } from "react";

const QuizContext = createContext();

export function QuizProvider({ children }) {
    const [quizState, setQuizState] = useState(() => {
        const saved = localStorage.getItem("quizState");
        return saved
            ? JSON.parse(saved)
            : {
                index: 0,
                correct: 0,
                incorrect: 0,
                answered: 0,
                total: 10,
                player: {
                    name: "Melisa",
                    avatar: "assets/image/kirby.png"
                }
            };
    });

    // Persist ke localStorage
    useEffect(() => {
        localStorage.setItem("quizState", JSON.stringify(quizState));
    }, [quizState]);

    const answerQuestion = (isCorrect) => {
        setQuizState((prev) => ({
            ...prev,
            correct: prev.correct + (isCorrect ? 1 : 0),
            incorrect: prev.incorrect + (!isCorrect ? 1 : 0),
            answered: prev.answered + 1,
            index: prev.index + 1
        }));
    };

    const resetQuiz = () => {
        const reset = {
            index: 0,
            correct: 0,
            incorrect: 0,
            answered: 0,
            total: 10,
            player: quizState.player
        };

        localStorage.setItem("quizState", JSON.stringify(reset));
        setQuizState(reset);
    };

    return (
        <QuizContext.Provider value={{ quizState, answerQuestion, resetQuiz }}> 
            {children}
        </QuizContext.Provider>
    );
}

export const useQuizContext = () => useContext(QuizContext);