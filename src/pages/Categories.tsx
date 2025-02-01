const categories = [
  { id: 1, name: "Science", quizCount: 15, icon: "🔬" },
  { id: 2, name: "History", quizCount: 12, icon: "📚" },
  { id: 3, name: "Geography", quizCount: 10, icon: "🌍" },
  { id: 4, name: "Mathematics", quizCount: 8, icon: "🔢" },
  { id: 5, name: "Literature", quizCount: 14, icon: "📖" },
  { id: 6, name: "Technology", quizCount: 11, icon: "💻" },
];

const Categories = () => {
  return (
    <div className="min-h-screen bg-gray-50 animate-fade-in">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Quiz Categories</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 cursor-pointer"
            >
              <div className="text-4xl mb-4">{category.icon}</div>
              <h2 className="text-xl font-semibold mb-2">{category.name}</h2>
              <p className="text-gray-500">{category.quizCount} quizzes</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;