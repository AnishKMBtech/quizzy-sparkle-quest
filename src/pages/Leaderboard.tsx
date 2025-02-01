const mockLeaderboard = [
  { id: 1, name: "John Doe", points: 2500, rank: 1, avatar: "JD" },
  { id: 2, name: "Jane Smith", points: 2350, rank: 2, avatar: "JS" },
  { id: 3, name: "Mike Johnson", points: 2200, rank: 3, avatar: "MJ" },
  { id: 4, name: "Sarah Wilson", points: 2100, rank: 4, avatar: "SW" },
  { id: 5, name: "David Brown", points: 2000, rank: 5, avatar: "DB" },
];

const Leaderboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 animate-fade-in">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Leaderboard</h1>

        <div className="max-w-2xl mx-auto">
          {mockLeaderboard.map((user) => (
            <div
              key={user.id}
              className={`bg-white rounded-xl shadow-md p-6 mb-4 flex items-center ${
                user.rank <= 3 ? "border-l-4" : ""
              } ${
                user.rank === 1
                  ? "border-yellow-400"
                  : user.rank === 2
                  ? "border-gray-400"
                  : user.rank === 3
                  ? "border-orange-400"
                  : ""
              }`}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold mr-4">
                {user.avatar}
              </div>
              <div className="flex-1">
                <h3 className="font-semibold">{user.name}</h3>
                <p className="text-sm text-gray-500">{user.points} points</p>
              </div>
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                  user.rank === 1
                    ? "bg-yellow-100 text-yellow-600"
                    : user.rank === 2
                    ? "bg-gray-100 text-gray-600"
                    : user.rank === 3
                    ? "bg-orange-100 text-orange-600"
                    : "bg-gray-50 text-gray-600"
                }`}
              >
                {user.rank}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;