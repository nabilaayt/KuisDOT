const BASE_URL = "https://opentdb.com";

function decode(text) {
  try {
    return decodeURIComponent(text);
  } catch {
    return text;
  }
}

// shuffle answers
function shuffle(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

function normalizeQuestions(results) {
  return results.map(q => {
    const answers = shuffle([
      q.correct_answer,
      ...q.incorrect_answers
    ]);

    return {
      ...q,
      question: decode(q.question),
      correct_answer: decode(q.correct_answer),
      incorrect_answers: q.incorrect_answers.map(decode),
      answers: answers.map(decode)
    };
  });
}

export async function fetchQuestions({
  amount = 10,
  category,
  difficulty = "easy",
  type = "multiple"
} = {}) {

  const params = new URLSearchParams({
    amount,
    difficulty,
    type,
    encode: "url3986",
    ...(category && { category })
  });

  const res = await fetch(`${BASE_URL}/api.php?${params}`);

  if (!res.ok) {
    throw new Error("Network error while fetching quiz");
  }

  const data = await res.json();

  if (data.response_code !== 0) {
    throw new Error(`API Error Code: ${data.response_code}`);
  }

  return normalizeQuestions(data.results);
}