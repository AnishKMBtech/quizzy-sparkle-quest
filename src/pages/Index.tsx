import { Link } from "react-router-dom";

const featuredQuizzes = [
  { id: 1, title: "General Knowledge", questions: 10, time: "10 min" },
  { id: 2, title: "Science Quiz", questions: 15, time: "15 min" },
  { id: 3, title: "History Challenge", questions: 12, time: "12 min" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 animate-fade-in">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">Quiz Master</h1>
          <p className="text-gray-600">Test your knowledge with our exciting quizzes!</p>
        </header>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Featured Quizzes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredQuizzes.map((quiz) => (
              <Link
                key={quiz.id}
                to={`/quiz/${quiz.id}`}
                className="block bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6"
              >
                <h3 className="text-xl font-semibold mb-2">{quiz.title}</h3>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>{quiz.questions} questions</span>
                  <span>{quiz.time}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="text-center">
          <Link
            to="/categories"
            className="inline-block bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors"
          >
            Explore All Categories
          </Link>
        </section>
      </div>
    </div>
  );
};

export default Index;