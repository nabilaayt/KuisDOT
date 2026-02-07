import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Home () {
    return(
        <section id="home" className="font-fredoka bg-result bg-repeat bg-cover bg-bottom w-full h-screen">
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
                <img 
                    src="/assets/image/headingHome.png" 
                    className="w-3/4 sm:w-2/3 md:w-1/2 lg:max-w-md xl:max-w-lg mx-auto relative z-20"
                />

                <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 md:gap-10 lg:gap-12 w-full max-w-6xl justify-center items-center">
                    <Link
                        to=""
                        className="w-full sm:w-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg transition-all duration-300 ease-out hover:scale-110 hover:-translate-y-2 hover:rotate-2 active:scale-95 cursor-pointer"
                    >
                        <img 
                            src="/assets/image/cardAnimals.png" 
                            className="w-full h-auto drop-shadow-lg hover:drop-shadow-2xl transition-all duration-300"
                            alt="Quiz Animals"
                        />
                    </Link>
                    <Link
                        to=""
                       className="w-full sm:w-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg transition-all duration-300 ease-out hover:scale-110 hover:-translate-y-2 hover:rotate-2 active:scale-95 cursor-pointer"
                    >
                        <img 
                            src="/assets/image/cardMusic.png" 
                            className="w-full h-auto drop-shadow-lg hover:drop-shadow-2xl transition-all duration-300"
                            alt="Quiz Music"
                        />
                    </Link>
                </div>
            </div>
        </section>
    );
};