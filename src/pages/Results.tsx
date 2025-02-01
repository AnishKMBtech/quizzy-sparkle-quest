import { useLocation, Link } from "react-router-dom";

const Results = () => {
  const location = useLocation();
  const { score, total } = location.state || { score: 0, total: 0 };
  const percentage = Math.round((score / total) * 100);

  return (
    <div className="min-h-screen bg-gray-50 animate-fade-in">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md p-8 text-center">
          <h1 className="text-3xl font-bold mb-6">Quiz Complete!</h1>
          
          <div className="mb-8">
            <div className="relative w-32 h-32 mx-auto mb-4">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-4xl font-bold text-primary">{percentage}%</span>
              </div>
              <svg className="transform -rotate-90 w-32 h-32">
                <circle
                  cx="64"
                  cy="64"
                  r="60"
                  fill="none"
                  stroke="#E5E7EB"
                  strokeWidth="8"
                />
                <circle
                  cx="64"
                  cy="64"
                  r="60"
                  fill="none"
                  stroke="#8B5CF6"
                  strokeWidth="8"
                  strokeDasharray={`${percentage * 3.77} 377`}
                />
              </svg>
            </div>
            <p className="text-gray-600">
              You scored {score} out of {total} questions correctly
            </p>
          </div>
          
          <div className="space-y-4">
            <Link
              to="/"
              className="block w-full bg-primary text-white py-3 rounded-lg hover:bg-primary/90 transition-colors"
            >
              Back to Home
            </Link>
            <Link
              to="/categories"
              className="block w-full bg-white text-primary border border-primary py-3 rounded-lg hover:bg-primary/5 transition-colors"
            >
              Try Another Quiz
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;