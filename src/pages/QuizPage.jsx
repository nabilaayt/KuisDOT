import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AnswerOption from "../components/AnswerOption";
import QuestionCard from "../components/QuestionCard";
import { useQuiz } from "../hooks/useQuiz";
import { useQuizContext } from "../context/QuizContext";

// Mapping kategori route
const CATEGORY_MAP = {
  animals: {
    id: 27,
    title: "ANIMALS"
  },
  music: {
    id: 12,
    title: "MUSIC"
  }
};

export default function QuizPage() {

  const { category } = useParams();          
  const config = CATEGORY_MAP[category];

  const navigate = useNavigate();
  const { quizState, answerQuestion, setTotalQuestions, setCategory } = useQuizContext();

  // Fetch soal berdasarkan kategori
  const { questions, loading, error } = useQuiz({
    amount: 10,
    category: config?.id
  });

  const [selected, setSelected] = useState(null);

  // Sync jumlah soal ke context
  useEffect(() => {
    if (questions.length > 0) {
      setTotalQuestions(questions.length);
    }
  }, [questions]);

  // Set nama kategori ke context
  useEffect(() => {
    if (config) {
      setCategory(config.title);
    }
  }, [config]);

  // Redirect kalau quiz selesai
  useEffect(() => {
    if (quizState.finished) {
      navigate("/quizResult");
    }
  }, [quizState.finished]);

  if (!config) return <p>Kategori tidak ditemukan</p>;
  if (loading) return null;
  if (error) return <p>Error {error}</p>;

  const current = questions[quizState.index];
  if (!current) return null;

  // Cari index jawaban benar
  const correctIndex = current.answers.findIndex(
    a => a === current.correct_answer
  );

  const handleAnswer = (i) => {
    setSelected(i);

    const isCorrect = i === correctIndex;
    answerQuestion(isCorrect);

    setTimeout(() => {
      setSelected(null);
    }, 600);
  };

  // Format timer
  const minutes = String(Math.floor(quizState.timeLeft / 60)).padStart(2, "0");
  const seconds = String(quizState.timeLeft % 60).padStart(2, "0");

  return (
    <section id="quizAnimals" className="font-nunito bg-quiz bg-repeat bg-cover bg-bottom w-full h-screen">
      <div className="w-full min-h-screen flex flex-col px-4 py-6 sm:py-8">

        {/* Section Header */}
        <div className="w-full grid grid-cols-3 items-center gap-4 mb-8">
          <div className="hidden sm:block"></div>
          <div className="col-span-3 sm:col-span-1 relative px-6 sm:px-8 md:px-10 lg:px-16 py-2.5 sm:py-3.5 bg-purple rounded-2xl flex items-center justify-center mx-auto"
            style={{ boxShadow: '0 10px 0 0 #D597F1' }}
          >
            <p className="font-fredoka text-cream text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-center whitespace-nowrap">
              QUIZ {config.title}
            </p>
          </div>

          <div className="col-span-3 sm:col-span-1 flex flex-row gap-3 sm:gap-4 md:gap-6 items-center justify-center sm:justify-end">
            <div className="px-4 sm:px-6 py-4 sm:py-5 bg-cream rounded-2xl">
              <p className="text-red font-extrabold text-xl sm:text-2xl md:text-3xl whitespace-nowrap">{quizState.index + 1}/{quizState.total}</p>
            </div>
            <div className="relative px-6 sm:px-8 py-2.5 sm:py-3.5 bg-pink rounded-2xl flex items-center justify-center"
              style={{ boxShadow: '0 10px 0 0 #F68AAD' }}
            >
              <p className="text-cream text-2xl sm:text-3xl md:text-4xl font-extrabold text-center">
                {minutes}:{seconds}
              </p>
            </div>
          </div>
        </div>

        {/* Section Quiz */}
        <div className="flex-1 flex flex-col gap-10 items-center justify-center">
          <QuestionCard question={current.question} />
          <div className="w-full max-w-3xl grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            {current.answers.map((ans, i) => (
              <AnswerOption
                key={i}
                answer={ans}
                onClick={() => handleAnswer(i)}
                disabled={selected !== null}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}