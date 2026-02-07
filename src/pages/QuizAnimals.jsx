import AnswerOption from "../components/AnswerOption";
import QuestionCard from "../components/QuestionCard";

export default function QuizAnimals() {
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
                                1/10
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
                <div className="flex-1 flex items-center justify-center">
                    <QuestionCard />
                    <AnswerOption />
                </div>
            </div>
        </section>
    );
};