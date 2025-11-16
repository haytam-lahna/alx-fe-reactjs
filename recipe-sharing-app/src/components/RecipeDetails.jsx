import { useParams, useNavigate } from 'react-router-dom';
import useRecipeStore from '../recipeStore';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';
  import useRecipeStore from "../recipeStore";
  import EditRecipeForm from "./EditRecipeForm";
  import DeleteRecipeButton from "./DeleteRecipeButton";
                                   ^
 const RecipeDetails = () => {
  _s();
const RecipeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const recipe = useRecipeStore(state =>
    state.recipes.find(recipe => recipe.id === parseInt(id))
  );

  if (!recipe) {
    return (
      <div style={{ padding: '20px' }}>
        <h2>Recipe Not Found</h2>
        <button onClick={() => navigate('/')}>Back to Recipes</button>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <button onClick={() => navigate('/')} style={{ marginBottom: '20px', padding: '10px 20px' }}>
        ← Back to Recipes
      </button>
      <h1>{recipe.title}</h1>
      <p style={{ fontSize: '18px', lineHeight: '1.6', marginBottom: '30px' }}>
        {recipe.description}
      </p>
      <div style={{ borderTop: '1px solid #ddd', paddingTop: '20px' }}>
        <h2>Edit Recipe</h2>
        <EditRecipeForm recipe={recipe} />
        <DeleteRecipeButton recipeId={recipe.id} />
      </div>
    </div>
  );
};

export default RecipeDetails;
