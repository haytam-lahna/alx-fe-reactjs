// src/components/FavoritesList.jsx

import React from 'react';
import useRecipeStore from '../store/useRecipeStore';

const FavoritesList = () => {
  // Use a selector function to get and map the favorite recipes
  const favoriteRecipes = useRecipeStore(state => 
    state.favorites.map(id => state.recipes.find(recipe => recipe.id === id))
  );
  
  // Action to remove favorite
  const removeFavorite = useRecipeStore(state => state.removeFavorite);
  
  const listStyle = {
    listStyleType: 'none',
    padding: '0',
  };
  
  const itemStyle = {
    border: '1px solid #ffcc00', // Highlighted border
    padding: '10px',
    margin: '10px 0',
    borderRadius: '4px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  return (
    <div>
      <h2 style={{ color: '#ff9900' }}>⭐ My Favorites</h2>
      {favoriteRecipes.length === 0 ? (
        <p>You haven't added any recipes to your favorites yet.</p>
      ) : (
        <ul style={listStyle}>
          {favoriteRecipes.map(recipe => (
            <li key={recipe.id} style={itemStyle}>
              <div>
                <h3 style={{ margin: '0 0 5px 0' }}>{recipe.title}</h3>
                <p style={{ margin: 0, fontSize: '0.9em' }}>{recipe.description}</p>
              </div>
              <button 
                onClick={() => removeFavorite(recipe.id)}
                style={{ background: '#f44336', color: 'white', border: 'none', padding: '5px 10px', cursor: 'pointer', borderRadius: '4px' }}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FavoritesList;
