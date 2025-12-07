function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-100">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-800 mb-4">
              Recipe Sharing Platform
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Discover, share, and cook amazing recipes from around the world
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Browse Recipes Card */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-4">📖</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Browse Recipes
              </h3>
              <p className="text-gray-600">
                Explore a wide variety of delicious recipes from different cuisines
              </p>
            </div>

            {/* Share Recipes Card */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Share Your Recipes
              </h3>
              <p className="text-gray-600">
                Contribute your favorite recipes and inspire others to cook
              </p>
            </div>

            {/* Community Card */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Join Community
              </h3>
              <p className="text-gray-600">
                Connect with fellow food enthusiasts and share cooking tips
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-12 text-center">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors duration-300 shadow-md hover:shadow-lg">
              Get Started
            </button>
          </div>

          {/* Tailwind Test Section */}
          <div className="mt-16 p-6 bg-blue-50 rounded-lg border-2 border-blue-200">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">
              ✅ Tailwind CSS is Working!
            </h2>
            <p className="text-blue-600 mb-2">
              If you can see styled elements with colors, shadows, and responsive design, 
              Tailwind CSS has been successfully integrated.
            </p>
            <div className="flex gap-2 mt-4">
              <span className="px-3 py-1 bg-red-500 text-white rounded">Red</span>
              <span className="px-3 py-1 bg-green-500 text-white rounded">Green</span>
              <span className="px-3 py-1 bg-blue-500 text-white rounded">Blue</span>
              <span className="px-3 py-1 bg-yellow-500 text-white rounded">Yellow</span>
              <span className="px-3 py-1 bg-purple-500 text-white rounded">Purple</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
