import { useState } from 'react';
import useRecipeStore from '../recipeStore';

const AddRecipeForm = () => {
  const addRecipe = useRecipeStore(state => state.addRecipe);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    addRecipe({ id: Date.now(), title, description });
    setTitle('');
    setDescription('');
  };

  // Function to add sample recipes
  const addSampleRecipes = () => {
    const samples = [
      {
        id: Date.now() + 1,
        title: 'Chocolate Cake',
        description: 'A rich and moist chocolate cake with chocolate frosting. Perfect for birthdays and celebrations.'
      },
      {
        id: Date.now() + 2,
        title: 'Spaghetti Carbonara',
        description: 'Classic Italian pasta dish with eggs, cheese, bacon, and black pepper. Ready in 20 minutes.'
      },
      {
        id: Date.now() + 3,
        title: 'Caesar Salad',
        description: 'Fresh romaine lettuce with parmesan cheese, croutons, and creamy Caesar dressing.'
      },
      {
        id: Date.now() + 4,
        title: 'Chicken Tikka Masala',
        description: 'Tender chicken pieces in a creamy tomato-based curry sauce with aromatic spices.'
      }
    ];
    samples.forEach(recipe => addRecipe(recipe));
  };

  return (
    <div style={{ marginBottom: '30px' }}>
      <h2>Add a New Recipe</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Recipe Title"
            required
            style={{ width: '100%', padding: '8px', marginBottom: '10px', fontSize: '16px' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Recipe Description"
            required
            style={{ width: '100%', padding: '8px', minHeight: '100px', fontSize: '16px' }}
          />
        </div>
        <button 
          type="submit" 
          style={{ 
            padding: '10px 20px', 
            cursor: 'pointer',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            fontSize: '16px',
            marginRight: '10px'
          }}
        >
          Add Recipe
        </button>
        <button 
          type="button"
          onClick={addSampleRecipes}
          style={{ 
            padding: '10px 20px', 
            cursor: 'pointer',
            backgroundColor: '#FF9800',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            fontSize: '16px'
          }}
        >
          Add Sample Recipes
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
