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
                        className="w-14 sm:w-16 cursor-pointer" 
                    />
                </NavLink>
                <img 
                    src="/assets/image/headingLogin.png" 
                    className="max-w-lg "
                />
                <div className="w-full relative max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl rounded-3xl sm:rounded-4xl p-6 sm:p-8 md:p-10 border-8 border-cream bg-secondOrange items-center flex flex-col gap-10 z-10">
                    <div className="flex flex-col gap-6 items-center">
                        <p className="text-cream text-2xl font-nunito font-semibold text-center">Hello welcome back, Enter your email and password to log in</p>
                    </div>
                    <form className="flex flex-col gap-6 sm:gap-8 items-center w-full">
                        <div className="flex flex-col gap-4 w-full">
                            <label htmlFor="email" className="text-2xl font-nunito font-medium text-cream">Email</label>
                            <input 
                                type="text" 
                                id="email"
                                // value={form.email}
                                // onChange={handleChange}
                                placeholder="Enter your email address"
                                className="w-full rounded-full px-5 py-3 text-2xl font-nunito text-gray-500 bg-cream focus:outline-none focus:ring-2 focus:ring-cream"
                            />
                        </div>
                        <div className="flex flex-col gap-4 w-full">
                            <label htmlFor="password" className="text-2xl font-nunito font-medium text-cream">Password</label>
                            <input 
                                type="password" 
                                id="password"
                                // value={form.password}
                                // onChange={handleChange}
                                placeholder="Enter your password"
                                className="w-full rounded-full px-5 py-3 text-2xl font-nunito text-gray-500 bg-cream focus:outline-none focus:ring-2 focus:ring-cream"
                            />
                        </div>
                    </form>
                </div>
                <div className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl flex flex-col gap-10 items-center">
                    <button 
                        // to="/login"
                        type="submit"
                        className="w-full py-3 sm:py-4 bg-yellow rounded-3xl cursor-pointer border-4 text-center border-cream text-white font-semibold text-2xl sm:text-3xl md:text-4xl hover:opacity-90 transition-transform duration-300 ease-in-out hover:shadow-lg"
                    >
                        LOG IN
                    </button>
                </div>
            </div>
        </section>
    );
};