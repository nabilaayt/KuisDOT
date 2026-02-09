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
                <div className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl relative">
                    <img 
                        src="/assets/image/headingComplate.png" 
                        className="w-4/5 sm:w-3/4 md:max-w-md lg:max-w-lg mx-auto relative z-20 -mb-4 sm:-mb-6 md:-mb-8"
                    />
                    <div className="w-full max-w-4xl xl:max-w-5xl relative rounded-3xl sm:rounded-4xl p-6 sm:p-8 md:p-10 pt-10 sm:pt-12 md:pt-14 border-8 border-cream bg-secondOrange items-center flex flex-col md:flex-row gap-6 md:gap-10 z-10">
                        <div className="flex flex-col items-center gap-8">
                                <div
                                    className="w-32 h-32 rounded-full flex items-center justify-center text-cream text-fredoka text-3xl font-bold"
                                    style={{ background: user?.avatarColor || "#999" }}
                                >
                                    {user?.initials || "?"}
                                </div>
                            <div className="px-4 py-4 bg-primaryOrange ring-4 ring-cream rounded-2xl items-center justify-center">
                                <p className="font-nunito text-center text-cream text-xl lg:text-2xl font-bold">{user?.name || user?.email?.split("@")[0] || "Player"}</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-8">
                            <h2 className="text-fredoka text-cream text-center lg:text-left font-extrabold text-2xl md:text-3xl lg:text-5xl">QUIZ MUSIC</h2>
                            <ul className="w-full flex flex-col px-6 py-4 rounded-2xl gap-3 bg-primaryOrange ring-4 ring-cream">
                                <li className="flex flex-row justify-between">
                                    <h3 className="text-nunito text-cream font-semibold text-xl md:text-2xl lg:text-3xl">Correct Answer</h3>
                                    <p className="text-nunito text-cream font-semibold text-xl md:text-2xl lg:text-3xl">{quizState.correct}</p>
                                </li>
                                <li className="flex flex-row justify-between">
                                    <h3 className="text-nunito text-cream font-semibold text-xl md:text-2xl lg:text-3xl">Incorrect Answer</h3>
                                    <p className="text-nunito text-cream font-semibold text-xl md:text-2xl lg:text-3xl">{quizState.incorrect}</p>
                                </li>
                                <li className="flex flex-row justify-between">
                                    <h3 className="text-nunito text-cream font-semibold text-xl md:text-2xl lg:text-3xl">Answered Question</h3>
                                    <p className="text-nunito text-cream font-semibold text-xl md:text-2xl lg:text-3xl">{quizState.answered}</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl flex flex-col gap-10 items-center">
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