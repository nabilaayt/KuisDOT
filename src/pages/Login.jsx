import { NavLink } from "react-router-dom";

export default function Login () {
    return(
        <section id="login" className="font-fredoka bg-landing bg-repeat bg-cover bg-bottom w-full h-screen">
            <div className="w-full min-h-screen flex flex-col gap-10 justify-center items-center px-4">
                <NavLink 
                    to="/"
                    className="absolute top-6 left-6 z-20"
                >
                    <img 
                        src="/assets/icons/btnBack.png" 
                        className="w-14 sm:w-16 cursor-pointer hover:scale-110 transition-transform duration-200" 
                    />
                </NavLink>

                <div className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl relative">
                    <img 
                        src="/assets/image/headingLogin.png" 
                        className="w-3/4 sm:w-2/3 md:max-w-md lg:max-w-lg mx-auto relative z-20 -mb-4 sm:-mb-6 md:-mb-8"
                    />
                    <div className="w-full relative rounded-3xl sm:rounded-4xl p-6 sm:p-8 md:p-10 pt-10 sm:pt-12 md:pt-14 border-8 border-cream bg-secondOrange items-center flex flex-col gap-6 sm:gap-8 md:gap-10 z-10">
                        <div className="flex flex-col gap-4 sm:gap-6 items-center">
                            <p className="text-cream text-lg sm:text-xl md:text-2xl font-nunito font-semibold text-center">Hello welcome back, Enter your email and password to log in</p>
                        </div>
                        <form className="flex flex-col gap-5 sm:gap-6 md:gap-8 items-center w-full">
                            <div className="flex flex-col gap-3 sm:gap-4 w-full">
                                <label htmlFor="email" className="text-xl sm:text-2xl font-nunito font-medium text-cream">Email</label>
                                <input 
                                    type="text" 
                                    id="email"
                                    // value={form.email}
                                    // onChange={handleChange}
                                    placeholder="Enter your email address"
                                    className="w-full rounded-full px-4 sm:px-5 py-2.5 sm:py-3 text-lg sm:text-xl md:text-2xl font-nunito text-gray-500 bg-cream focus:outline-none focus:ring-2 focus:ring-cream"
                                />
                            </div>
                            <div className="flex flex-col gap-3 sm:gap-4 w-full">
                                <label htmlFor="password" className="text-xl sm:text-2xl font-nunito font-medium text-cream">Password</label>
                                <input 
                                    type="password" 
                                    id="password"
                                    // value={form.password}
                                    // onChange={handleChange}
                                    placeholder="Enter your password"
                                    className="w-full rounded-full px-4 sm:px-5 py-2.5 sm:py-3 text-lg sm:text-xl md:text-2xl font-nunito text-gray-500 bg-cream focus:outline-none focus:ring-2 focus:ring-cream"
                                />
                            </div>
                        </form>
                    </div>
                </div>
                <div className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl flex flex-col gap-10 items-center">
                    <button 
                        // to="/login"
                        type="submit"
                        className="w-full py-3 sm:py-4 bg-yellow rounded-3xl cursor-pointer border-4 text-center border-cream text-white font-semibold text-2xl sm:text-3xl md:text-4xl hover:scale-110 transition-transform duration-200"
                    >
                        LOG IN
                    </button>
                </div>
            </div>
        </section>
    );
};