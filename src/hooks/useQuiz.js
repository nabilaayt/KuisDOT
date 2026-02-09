import { useEffect, useState } from "react";

export default function useQuiz() {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/quiz/animals")
      .then(res => res.json())
      .then(data => {
        setQuestions(data);
        setLoading(false);
      });
  }, []);

  return { questions, loading };
};