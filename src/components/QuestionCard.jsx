export default function QuestionCard({ question }) {
    return(
        <div className=" w-full max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-3xl px-4 py-5 sm:px-6 sm:py-8 md:px-8 md:py-8 bg-secondOrange border-8 border-cream text-center rounded-2xl items-center">
            <p className="text-nunito leading-snug break-words text-xl md:text-2xl lg:text-3xl font-bold text-cream">
                {question}
            </p>
        </div>
    );
};