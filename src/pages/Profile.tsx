const mockUserStats = {
  quizzesTaken: 15,
  averageScore: 75,
  totalPoints: 1250,
  achievements: [
    { id: 1, name: "Quick Learner", description: "Complete 5 quizzes", icon: "🎯" },
    { id: 2, name: "Knowledge Seeker", description: "Score 80% or higher", icon: "🏆" },
    { id: 3, name: "Quiz Master", description: "Perfect score on any quiz", icon: "⭐" },
  ],
  recentQuizzes: [
    { id: 1, title: "Science Quiz", score: 8, total: 10, date: "2024-02-20" },
    { id: 2, title: "History Challenge", score: 7, total: 10, date: "2024-02-18" },
    { id: 3, title: "Geography Test", score: 9, total: 10, date: "2024-02-15" },
  ],
};

const Profile = () => {
  return (
    <div className="min-h-screen bg-gray-50 animate-fade-in">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-xl shadow-md p-8 mb-8">
            <div className="flex items-center mb-8">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center text-primary text-2xl font-bold">
                US
              </div>
              <div className="ml-6">
                <h1 className="text-2xl font-bold">User Profile</h1>
                <p className="text-gray-500">Quiz enthusiast</p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <p className="text-2xl font-bold text-primary">{mockUserStats.quizzesTaken}</p>
                <p className="text-sm text-gray-500">Quizzes Taken</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <p className="text-2xl font-bold text-primary">{mockUserStats.averageScore}%</p>
                <p className="text-sm text-gray-500">Average Score</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <p className="text-2xl font-bold text-primary">{mockUserStats.totalPoints}</p>
                <p className="text-sm text-gray-500">Total Points</p>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Achievements</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {mockUserStats.achievements.map((achievement) => (
                  <div key={achievement.id} className="bg-gray-50 p-4 rounded-lg text-center">
                    <div className="text-3xl mb-2">{achievement.icon}</div>
                    <p className="font-semibold">{achievement.name}</p>
                    <p className="text-sm text-gray-500">{achievement.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">Recent Quizzes</h2>
              <div className="space-y-4">
                {mockUserStats.recentQuizzes.map((quiz) => (
                  <div key={quiz.id} className="bg-gray-50 p-4 rounded-lg flex justify-between items-center">
                    <div>
                      <p className="font-semibold">{quiz.title}</p>
                      <p className="text-sm text-gray-500">{quiz.date}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-primary">
                        {quiz.score}/{quiz.total}
                      </p>
                      <p className="text-sm text-gray-500">
                        {Math.round((quiz.score / quiz.total) * 100)}%
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;