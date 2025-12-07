import { useState, useEffect } from 'react';
import recipeData from '../data.json';

function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Load recipe data when component mounts
    setRecipes(recipeData);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      {/* Header Section */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-4xl font-bold text-orange-600">
            Recipe Sharing Platform
          </h1>
          <p className="text-gray-600 mt-2">
            Discover and share amazing recipes from around the world
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Popular Recipes
          </h2>
          <p className="text-gray-600">
            Explore our collection of delicious recipes
          </p>
        </div>

        {/* Recipe Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {recipes.map((recipe) => (
            <div
              key={recipe.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 transform hover:scale-105"
            >
              {/* Recipe Image */}
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-48 object-cover"
              />

              {/* Recipe Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2 hover:text-orange-600 transition-colors duration-200">
                  {recipe.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {recipe.summary}
                </p>

                {/* View Details Button */}
                <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">
                  View Recipe
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {recipes.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No recipes found. Check back later!
            </p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white mt-16">
        <div className="container mx-auto px-4 py-8 text-center">
          <p>&copy; 2024 Recipe Sharing Platform. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
