import { NavLink } from "react-router-dom";

export default function QuizResult() {
    return(
        <section id="quizResult" className="font-fredoka bg-result bg-repeat bg-cover bg-bottom w-full h-screen">
            <div className="w-full min-h-screen flex flex-col gap-6 sm:gap-8 md:gap-10 justify-center items-center px-4">
                <NavLink 
                    to="/"
                    className="absolute top-6 left-6 z-20"
                >
                    <img 
                        src="/assets/icons/btnBack.png" 
                        className="w-14 sm:w-16 cursor-pointer hover:scale-110 transition-transform duration-200" 
                    />
                </NavLink>
            </div>
        </section>
    );
};