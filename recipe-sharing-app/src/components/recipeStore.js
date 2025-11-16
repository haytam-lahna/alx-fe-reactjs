// src/store/useRecipeStore.js

import { create } from 'zustand';

const useRecipeStore = create((set, get) => ({
  // --- Existing State (Expanded Example) ---
  recipes: [
    { id: 1, title: "Spaghetti Bolognese", description: "Classic Italian pasta dish.", tags: ["italian", "pasta", "meat"] },
    { id: 2, title: "Chicken Curry", description: "A rich and spicy weeknight favorite.", tags: ["indian", "chicken", "spicy"] },
    { id: 3, title: "Tomato Soup", description: "Simple, warming tomato soup.", tags: ["vegetarian", "soup"] },
    { id: 4, title: "Tacos al Pastor", description: "Spicy Mexican pork tacos.", tags: ["mexican", "pork", "spicy"] },
  ],
  searchTerm: '',
  filteredRecipes: [],

  // --- New State for Favorites and Recommendations ---
  favorites: [1, 3], // Initialize with some favorite IDs for testing
  recommendations: [],

  // --- New Actions ---
  
  // Action to add a recipe ID to the favorites array
  addFavorite: (recipeId) => set(state => {
    // Prevent duplicates
    if (!state.favorites.includes(recipeId)) {
      return { favorites: [...state.favorites, recipeId] };
    }
    return state;
  }),
  
  // Action to remove a recipe ID from the favorites array
  removeFavorite: (recipeId) => set(state => ({
    favorites: state.favorites.filter(id => id !== recipeId)
  })),

  // Action to generate recommendations (Mock Logic)
  generateRecommendations: () => set(state => {
    // 1. Get IDs of recipes the user HAS NOT favorited
    const nonFavoriteRecipes = state.recipes.filter(recipe => 
      !state.favorites.includes(recipe.id)
    );
    
    // 2. Mock Logic: Recommend a random sample of non-favorites
    // In a real app, this would use tags, ingredients, or collaborative filtering.
    const recommendations = nonFavoriteRecipes
      .filter(() => Math.random() > 0.6) // Select about 40% of the non-favorites
      .slice(0, 3); // Limit to 3 recommendations
      
    return { recommendations: recommendations };
  }),
  
  // ... (Keep existing filterRecipes, setSearchTerm, and initializeFilter actions)
}));

export default useRecipeStore;
