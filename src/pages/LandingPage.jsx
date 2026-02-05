import { NavLink } from "react-router-dom";

export default function LandingPage () {
    return(
        <section id="landingPage" className="font-fredoka bg-landing bg-repeat bg-cover bg-bottom w-full h-screen">
            <div className="w-full min-h-screen flex justify-center items-center px-4">
                <div className="flex flex-col justify-between gap-10 md:gap-15 items-center w-full">
                    <div className="flex flex-col gap-6 items-center">
                        <h3 className="text-red text-outline-cream text-4xl sm:text-5xl lg:text-6xl font-semibold">LET'S PLAY</h3>
                        <h1 className="font-bold flex gap-1 leading-none text-[6rem] sm:text-[8rem] md:text-[10rem] lg:text-[11rem] xl:text-[14rem] -mt-6">
                            <span className="text-purple text-outline-cream">Q</span>
                            <span className="text-primaryOrange text-outline-cream">U</span>
                            <span className="text-blue text-outline-cream">I</span>
                            <span className="text-green text-outline-cream">Z</span>
                            <span className="text-red text-outline-cream">O</span>
                        </h1>
                    </div>
                    <NavLink 
                        to="/login"
                        className="w-full max-w-50 sm:max-w-xs md:max-w-sm py-3 sm:py-4 bg-yellow rounded-3xl border-4 text-center border-cream text-white font-semibold text-2xl sm:text-3xl md:text-4xl hover:opacity-90 transition-transform duration-300 ease-in-out hover:shadow-lg"
                    >
                        START
                    </NavLink>
                </div>
            </div>
        </section>
    );
};