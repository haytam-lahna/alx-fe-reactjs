// src/components/SearchBar.jsx

import React from 'react';
import useRecipeStore from '../store/useRecipeStore';

const SearchBar = () => {
  // Select the action from the store
  const setSearchTerm = useRecipeStore(state => state.setSearchTerm);
  
  const inputStyle = {
    padding: '10px',
    fontSize: '16px',
    width: '100%',
    maxWidth: '500px',
    margin: '20px auto',
    display: 'block',
    borderRadius: '5px',
    border: '1px solid #ccc',
  };

  return (
    <input
      style={inputStyle}
      type="text"
      placeholder="Search recipes by name or ingredient..."
      // Debouncing is recommended for real apps, but for this task, 
      // we update the state directly on change.
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
};

export default SearchBar;
