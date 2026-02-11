import { useEffect, useState, useRef } from "react";
import { fetchQuestions } from "../service/quiz";

export function useQuiz(options) {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const fetchedRef = useRef(false);

  useEffect(() => {

    // Mencegah double fetch
    if(fetchedRef.current) return;
    fetchedRef.current = true;

    let cancelled = false;

    async function load() {
      setLoading(true);
      setError(null);

      try {
        const data = await fetchQuestions(options);
        if (!cancelled) setQuestions(data);
      } catch (err) {
        if (!cancelled) setError(err.message);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    load();

    return () => {
      cancelled = true;
    };
  }, [JSON.stringify(options)]);

  return { questions, loading, error };
}