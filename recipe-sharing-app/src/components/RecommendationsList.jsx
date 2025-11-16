// src/components/RecommendationsList.jsx

import React, { useEffect } from 'react';
import useRecipeStore from '../store/useRecipeStore';

const RecommendationsList = () => {
  // Select state and action
  const recommendations = useRecipeStore(state => state.recommendations);
  const generateRecommendations = useRecipeStore(state => state.generateRecommendations);

  // Generate recommendations when the component mounts or favorites change
  // Note: For a real app, this should be triggered after a favorite action.
  useEffect(() => {
    generateRecommendations();
    // Re-run if favorites change to simulate real-time updates
  }, [generateRecommendations]); 
  
  const listStyle = {
    padding: '10px',
    borderLeft: '3px solid #007bff', // Visual separator
    backgroundColor: '#e6f2ff',
    listStyleType: 'none',
  };
  
  const itemStyle = {
    padding: '5px 0',
    fontSize: '1.1em',
  };

  return (
    <div style={{ marginTop: '40px' }}>
      <h2 style={{ color: '#007bff' }}>💡 Personalized Recommendations</h2>
      {recommendations.length === 0 ? (
        <p>No new recommendations right now. Try favoriting more recipes!</p>
      ) : (
        <ul style={listStyle}>
          {recommendations.map(recipe => (
            <li key={recipe.id} style={itemStyle}>
              {recipe.title}
            </li>
          ))}
        </ul>
      )}
      <button 
        onClick={generateRecommendations}
        style={{ marginTop: '10px', padding: '8px 15px', background: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
      >
        Refresh Recommendations
      </button>
    </div>
  );
};

export default RecommendationsList;
