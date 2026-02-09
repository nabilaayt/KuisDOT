export default function AnswerOption({ 
    answer, 
    onClick, 
    isSelected = false,
    isCorrect = false,
    isWrong = false,
    disabled = false
}) {

    const stateStyle =
        isCorrect ? "bg-blue text-cream" :
        isWrong ? "bg-red text-cream" :
        isSelected ? "ring-8 ring-primaryOrange" :
        "bg-cream text-primaryOrange";

    return(
        <button
            onClick={onClick}
            disabled={disabled}
            className={`
                text-nunito w-full text-center px-3 py-3 sm:px-5 sm:py-4 md:px-6 md:py-5 rounded-2xl font-bold text-xl md:text-2xl
                transition-all duration-200 hover:scale-105 disabled:cursor-not-allowed cursor-pointer ${stateStyle}    
            `}
        >
            {answer}
        </button>
    );
};