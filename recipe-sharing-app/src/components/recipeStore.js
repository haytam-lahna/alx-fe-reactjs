// src/store/useRecipeStore.js

import { create } from 'zustand';

const useRecipeStore = create((set, get) => ({
  // --- Existing State ---
  recipes: [
    // Add some sample data for testing the filter
    { id: 1, title: "Spaghetti Bolognese", ingredients: ["pasta", "meat", "tomato"], time: 45 },
    { id: 2, title: "Chicken Curry", ingredients: ["chicken", "curry paste", "rice"], time: 30 },
    { id: 3, title: "Tomato Soup", ingredients: ["tomato", "cream", "bread"], time: 20 },
  ],
  
  // --- New Search/Filter State ---
  searchTerm: '',
  filteredRecipes: [],

  // --- New Actions ---
  
  // Action to update the search term
  setSearchTerm: (term) => {
    set({ searchTerm: term });
    // IMPORTANT: Call the filter function immediately after setting the term
    get().filterRecipes(term);
  },

  // Action to compute filtered recipes
  filterRecipes: (term) => {
    // Use the term passed in or the current state's searchTerm
    const currentTerm = term !== undefined ? term : get().searchTerm;
    const lowerCaseTerm = currentTerm.toLowerCase();
    
    set(state => ({
      filteredRecipes: state.recipes.filter(recipe =>
        // Filter by title (case-insensitive)
        recipe.title.toLowerCase().includes(lowerCaseTerm) ||
        // Optional: Filter by ingredients for advanced search
        recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(lowerCaseTerm))
      ),
    }));
  },
  
  // Action to initialize filteredRecipes on load
  initializeFilter: () => {
      set(state => ({ filteredRecipes: state.recipes }));
  },
  
  // Add other existing actions here (e.g., addRecipe, deleteRecipe, etc.)
}));

export default useRecipeStore;
