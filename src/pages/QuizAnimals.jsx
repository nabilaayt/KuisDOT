import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AnswerOption from "../components/AnswerOption";
import QuestionCard from "../components/QuestionCard";
import useQuiz from "../hooks/useQuiz";
import { useQuizContext } from "../context/QuizContext";

export default function QuizAnimals() {
    const { quizState, answerQuestion } = useQuizContext();
    // const { question, loading } = useQuiz();
    const [selected, setSelected] = useState(null);
    const navigate = useNavigate();

    const dummyQuestion = {
        question: "Panic! At the Disco’s sixth album 'Pray for the Wicked' was released on which date?",
        answers: [
            "June 15, 2017",
            "July 13, 2018",
            "June 22, 2018",
            "August 3, 2019"
    ],
        correctIndex: 1
    };

    const handleAnswer = (i) => {
        setSelected(i);

        const isCorrect = i === dummyQuestion.correctIndex;
        answerQuestion(isCorrect);

        setTimeout(() => {
            setSelected(null);

            if(quizState.index + 1 >= quizState.total) {
                navigate("/quizResult");
            }
        }, 800);
    };

    // if(loading) return <p>Loading...</p>;

    return(
        <section id="quizAnimals" className="font-nunito bg-quiz bg-repeat bg-cover bg-bottom w-full h-screen">
            <div className="w-full min-h-screen flex flex-col px-4 py-6 sm:py-8">
                <div className="w-full grid grid-cols-3 items-center gap-4 mb-8">
                    <div className="hidden sm:block"></div>

                    {/* Section Header */}
                    <div className="col-span-3 sm:col-span-1 relative px-6 sm:px-8 md:px-10 lg:px-16 py-2.5 sm:py-3.5 bg-purple rounded-2xl flex items-center justify-center mx-auto"
                        style={{ 
                            boxShadow: '0 10px 0 0 #D597F1'
                        }}
                    >
                        <p className="font-fredoka text-cream text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-center whitespace-nowrap">
                            QUIZ ANIMALS
                        </p>
                    </div>
                    
                    <div className="col-span-3 sm:col-span-1 flex flex-row gap-3 sm:gap-4 md:gap-6 items-center justify-center sm:justify-end">
                        <div className="px-4 sm:px-6 py-4 sm:py-5 bg-cream rounded-2xl">
                            <p className="text-red font-extrabold text-xl sm:text-2xl md:text-3xl whitespace-nowrap">
                                {quizState.index + 1}/{quizState.total}
                            </p>
                        </div>
                        <div className="relative px-6 sm:px-8 py-2.5 sm:py-3.5 bg-pink rounded-2xl flex items-center justify-center"
                            style={{ 
                                boxShadow: '0 10px 0 0 #F68AAD'
                            }}
                        >
                            <p className="text-cream text-2xl sm:text-3xl md:text-4xl font-extrabold text-center">
                                12:00
                            </p>
                        </div>
                    </div>
                </div>

                {/* Section Quiz */}
                <div className="flex-1 flex flex-col gap-10 items-center justify-center">
                    <QuestionCard question={dummyQuestion.question} />
                    <div className="w-full max-w-3xl grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                        {dummyQuestion.answers.map((ans, i) => (
                            <AnswerOption 
                                key={i}
                                answer={ans}
                                onClick={() => handleAnswer(i)}
                                disabled={selected !== null}
                                isSelected={selected === i}
                                isCorrect={selected !== null && i === dummyQuestion.correctIndex}
                                isWrong={selected === i && i !== dummyQuestion.correctIndex}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};