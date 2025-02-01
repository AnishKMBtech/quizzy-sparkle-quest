import { useState } from "react";
import { useNavigate } from "react-router-dom";

const mockQuestions = [
  {
    id: 1,
    question: "What is the capital of France?",
    options: ["London", "Berlin", "Paris", "Madrid"],
    correctAnswer: "Paris",
  },
  {
    id: 2,
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Jupiter", "Saturn"],
    correctAnswer: "Mars",
  },
];

const ActiveQuiz = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState(0);

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswer(answer);
    if (answer === mockQuestions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    setTimeout(() => {
      if (currentQuestion < mockQuestions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
      } else {
        navigate("/results", { state: { score, total: mockQuestions.length } });
      }
    }, 1000);
  };

  const question = mockQuestions[currentQuestion];

  return (
    <div className="min-h-screen bg-gray-50 animate-fade-in">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="mb-8">
            <div className="bg-white rounded-full h-2 mb-4">
              <div
                className="bg-primary h-2 rounded-full transition-all duration-300"
                style={{
                  width: `${((currentQuestion + 1) / mockQuestions.length) * 100}%`,
                }}
              />
            </div>
            <p className="text-right text-sm text-gray-500">
              Question {currentQuestion + 1} of {mockQuestions.length}
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-6">{question.question}</h2>
            <div className="space-y-4">
              {question.options.map((option) => (
                <button
                  key={option}
                  onClick={() => handleAnswerSelect(option)}
                  disabled={selectedAnswer !== null}
                  className={`w-full p-4 rounded-lg text-left transition-colors ${
                    selectedAnswer === option
                      ? option === question.correctAnswer
                        ? "bg-green-100 border-green-500"
                        : "bg-red-100 border-red-500"
                      : "bg-gray-50 hover:bg-gray-100"
                  } ${selectedAnswer !== null ? "cursor-not-allowed" : ""}`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActiveQuiz;