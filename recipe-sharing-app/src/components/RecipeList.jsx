import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useRecipeStore from '../recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore(state => state.recipes);
  const filteredRecipes = useRecipeStore(state => state.filteredRecipes);
  const searchTerm = useRecipeStore(state => state.searchTerm);
  const filterRecipes = useRecipeStore(state => state.filterRecipes);

  // Filter recipes whenever recipes or searchTerm changes
  useEffect(() => {
    filterRecipes();
  }, [recipes, searchTerm, filterRecipes]);

  // Use filtered recipes if there's a search term, otherwise show all recipes
  const displayRecipes = searchTerm ? filteredRecipes : recipes;

  return (
    <div>
      <h2>Recipe List</h2>
      {displayRecipes.length === 0 ? (
        <p>
          {searchTerm 
            ? `No recipes found matching "${searchTerm}". Try a different search term.`
            : 'No recipes yet. Add one above!'
          }
        </p>
      ) : (
        <>
          {searchTerm && (
            <p style={{ marginBottom: '15px', color: '#666' }}>
              Found {displayRecipes.length} recipe(s) matching "{searchTerm}"
            </p>
          )}
          {displayRecipes.map(recipe => (
            <div 
              key={recipe.id} 
              style={{ 
                marginBottom: '20px', 
                padding: '15px', 
                border: '1px solid #ddd', 
                borderRadius: '5px',
                backgroundColor: '#f9f9f9',
                transition: 'transform 0.2s',
              }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <h3 style={{ marginTop: 0 }}>{recipe.title}</h3>
              <p style={{ color: '#555' }}>
                {recipe.description.length > 100 
                  ? `${recipe.description.substring(0, 100)}...` 
                  : recipe.description
                }
              </p>
              <Link 
                to={`/recipe/${recipe.id}`}
                style={{
                  display: 'inline-block',
                  marginTop: '10px',
                  padding: '8px 16px',
                  backgroundColor: '#2196F3',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '4px',
                  transition: 'background-color 0.2s'
                }}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#0b7dda'}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#2196F3'}
              >
                View Details
              </Link>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default RecipeList;
