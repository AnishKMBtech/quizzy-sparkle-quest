import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const QuizDetails = () => {
  const { id } = useParams();

  // Mock quiz data
  const quiz = {
    id,
    title: "General Knowledge Quiz",
    description: "Test your knowledge across various topics!",
    questions: 10,
    timeLimit: "10 minutes",
    difficulty: "Medium",
    topics: ["Science", "History", "Geography"],
  };

  return (
    <div className="min-h-screen bg-gray-50 animate-fade-in">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md p-8">
          <h1 className="text-3xl font-bold mb-4">{quiz.title}</h1>
          <p className="text-gray-600 mb-6">{quiz.description}</p>
          
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-500">Questions</p>
              <p className="text-lg font-semibold">{quiz.questions}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-500">Time Limit</p>
              <p className="text-lg font-semibold">{quiz.timeLimit}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-500">Difficulty</p>
              <p className="text-lg font-semibold">{quiz.difficulty}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-500">Topics</p>
              <p className="text-lg font-semibold">{quiz.topics.join(", ")}</p>
            </div>
          </div>
          
          <Link
            to={`/quiz/${id}/start`}
            className="block w-full bg-primary text-white text-center py-3 rounded-lg hover:bg-primary/90 transition-colors"
          >
            Start Quiz
          </Link>
        </div>
      </div>
    </div>
  );
};

export default QuizDetails;