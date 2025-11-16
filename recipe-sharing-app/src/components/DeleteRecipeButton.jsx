import { useNavigate } from 'react-router-dom';
import useRecipeStore from '../recipeStore';

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore(state => state.deleteRecipe);
  const navigate = useNavigate();

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this recipe?')) {
      deleteRecipe(recipeId);
      navigate('/');
    }
  };

  return (
    <button 
      onClick={handleDelete}
      style={{ 
        padding: '10px 20px', 
        cursor: 'pointer', 
        backgroundColor: '#f44336', 
        color: 'white', 
        border: 'none', 
        borderRadius: '4px',
        marginTop: '10px'
      }}
    >
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;
