import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useQuizContext } from "../context/QuizContext";
import { useAuth } from "../context/AuthContext";

export default function QuizResult() {
    const { quizState, resetQuiz } = useQuizContext();
    const { user } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            navigate("/login");
        }
    }, [user, navigate]);

    const handlePlayAgain = () => {
        resetQuiz();
        navigate("/home");
    };

    return(
        <section id="quizResult" className="font-fredoka bg-result bg-repeat bg-cover bg-bottom w-full h-screen">
            <div className="w-full min-h-screen flex flex-col gap-6 sm:gap-8 md:gap-10 justify-center items-center px-4">
                <div className="w-full max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl relative">
                    <img 
                        src="/assets/image/headingComplate.png" 
                        className="w-5/6 sm:w-4/5 md:max-w-md lg:max-w-lg mx-auto relative z-20 -mb-4 sm:-mb-6 md:-mb-8"
                    />
                    <div className="w-full max-w-4xl xl:max-w-5xl relative rounded-3xl sm:rounded-4xl p-6 sm:p-8 md:p-10 pt-10 sm:pt-12 md:pt-14 border-8 border-cream bg-secondOrange items-center justify-center flex flex-col md:flex-row gap-6 md:gap-12 z-10">
                        <div className="flex flex-col items-center gap-8">
                                <div
                                    className="w-32 h-32 rounded-full flex items-center justify-center text-cream text-fredoka text-3xl font-bold"
                                    style={{ background: user?.avatarColor || "#A2DDF9" }}
                                >
                                    {user?.initials || "?"}
                                </div>
                            <div className="px-4 py-4 bg-primaryOrange ring-4 ring-cream rounded-2xl items-center justify-center">
                                <p className="font-nunito text-center text-cream text-xl lg:text-2xl font-bold">{user?.name || user?.email?.split("@")[0] || "Player"}</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-6">
                            <h2 className="text-fredoka text-cream text-center lg:text-left font-extrabold text-2xl md:text-3xl lg:text-5xl">QUIZ {quizState.categoryName || "Trivia"}</h2>
                            <ul className="w-full min-w-70 flex flex-col px-6 py-5 md:px-8 md:py-6 lg:px-10 lg:py-7 rounded-2xl gap-4 md:gap-5 bg-primaryOrange ring-4 ring-cream">
                                <li className="flex flex-row justify-between">
                                    <h3 className="text-nunito text-cream font-semibold text-xl md:text-2xl lg:text-3xl flex-1">Correct Answer</h3>
                                    <p className="text-nunito text-cream font-semibold text-xl md:text-2xl lg:text-3xl min-w-[60px] text-right">{quizState.correct}</p>
                                </li>
                                <li className="flex flex-row justify-between">
                                    <h3 className="text-nunito text-cream font-semibold text-xl md:text-2xl lg:text-3xl flex-1">Incorrect Answer</h3>
                                    <p className="text-nunito text-cream font-semibold text-xl md:text-2xl lg:text-3xl min-w-[60px] text-right">{quizState.incorrect}</p>
                                </li>
                                <li className="flex flex-row justify-between">
                                    <h3 className="text-nunito text-cream font-semibold text-xl md:text-2xl lg:text-3xl flex-1">Answered Question</h3>
                                    <p className="text-nunito text-cream font-semibold text-xl md:text-2xl lg:text-3xl min-w-[60px] text-right">{quizState.answered}</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="w-full max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl flex flex-col gap-10 items-center">
                    <NavLink 
                        to="/home"
                        onClick={handlePlayAgain}
                        className="w-full py-3 sm:py-4 bg-yellow rounded-3xl cursor-pointer border-4 text-center border-cream text-white font-semibold text-2xl sm:text-3xl md:text-4xl hover:scale-110 transition-transform duration-200"
                    >
                        PLAY AGAIN
                    </NavLink>
                </div>
            </div>
        </section>
    );
};