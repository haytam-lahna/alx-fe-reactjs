import { useState } from 'react';

function AddRecipeForm() {
  const [formData, setFormData] = useState({
    title: '',
    ingredients: '',
    steps: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  // Validate form
  const validate = () => {
    const newErrors = {};

    // Validate title
    if (!formData.title.trim()) {
      newErrors.title = 'Recipe title is required';
    } else if (formData.title.trim().length < 3) {
      newErrors.title = 'Recipe title must be at least 3 characters';
    }

    // Validate ingredients
    if (!formData.ingredients.trim()) {
      newErrors.ingredients = 'Ingredients are required';
    } else {
      const ingredientsList = formData.ingredients.split('\n').filter(item => item.trim());
      if (ingredientsList.length < 2) {
        newErrors.ingredients = 'Please provide at least 2 ingredients (one per line)';
      }
    }

    // Validate steps
    if (!formData.steps.trim()) {
      newErrors.steps = 'Preparation steps are required';
    } else if (formData.steps.trim().length < 10) {
      newErrors.steps = 'Please provide more detailed preparation steps';
    }

    return newErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = validate();

    if (Object.keys(newErrors).length === 0) {
      // Form is valid, submit data
      console.log('Form submitted:', formData);
      setSubmitted(true);

      // Reset form after successful submission
      setTimeout(() => {
        setFormData({
          title: '',
          ingredients: '',
          steps: ''
        });
        setSubmitted(false);
      }, 3000);
    } else {
      // Form has errors
      setErrors(newErrors);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Add New Recipe</h1>
          <p className="text-gray-600">Share your culinary creations with the community</p>
        </div>

        {/* Success Message */}
        {submitted && (
          <div className="mb-6 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg animate-pulse">
            <p className="font-semibold">✓ Recipe submitted successfully!</p>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8">
          {/* Recipe Title */}
          <div className="mb-6">
            <label htmlFor="title" className="block text-gray-700 font-semibold mb-2">
              Recipe Title <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all duration-200 ${
                errors.title
                  ? 'border-red-500 focus:ring-red-500'
                  : 'border-gray-300 focus:ring-orange-500'
              }`}
              placeholder="e.g., Chocolate Chip Cookies"
            />
            {errors.title && (
              <p className="mt-2 text-sm text-red-600 flex items-center">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                {errors.title}
              </p>
            )}
          </div>

          {/* Ingredients */}
          <div className="mb-6">
            <label htmlFor="ingredients" className="block text-gray-700 font-semibold mb-2">
              Ingredients <span className="text-red-500">*</span>
            </label>
            <textarea
              id="ingredients"
              name="ingredients"
              value={formData.ingredients}
              onChange={handleChange}
              rows="6"
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all duration-200 resize-none ${
                errors.ingredients
                  ? 'border-red-500 focus:ring-red-500'
                  : 'border-gray-300 focus:ring-orange-500'
              }`}
              placeholder="Enter each ingredient on a new line:&#10;2 cups flour&#10;1 cup sugar&#10;3 eggs"
            />
            <p className="mt-1 text-sm text-gray-500">
              Enter one ingredient per line (minimum 2 ingredients)
            </p>
            {errors.ingredients && (
              <p className="mt-2 text-sm text-red-600 flex items-center">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                {errors.ingredients}
              </p>
            )}
          </div>

          {/* Preparation Steps */}
          <div className="mb-8">
            <label htmlFor="steps" className="block text-gray-700 font-semibold mb-2">
              Preparation Steps <span className="text-red-500">*</span>
            </label>
            <textarea
              id="steps"
              name="steps"
              value={formData.steps}
              onChange={handleChange}
              rows="8"
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all duration-200 resize-none ${
                errors.steps
                  ? 'border-red-500 focus:ring-red-500'
                  : 'border-gray-300 focus:ring-orange-500'
              }`}
              placeholder="Describe the preparation steps in detail..."
            />
            {errors.steps && (
              <p className="mt-2 text-sm text-red-600 flex items-center">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                {errors.steps}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              type="submit"
              className="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 shadow-md hover:shadow-lg"
            >
              Submit Recipe
            </button>
            <button
              type="button"
              onClick={() => {
                setFormData({ title: '', ingredients: '', steps: '' });
                setErrors({});
              }}
              className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-3 px-6 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
            >
              Clear Form
            </button>
          </div>
        </form>

        {/* Tips Section */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-lg font-bold text-blue-900 mb-3">📝 Tips for a Great Recipe</h3>
          <ul className="space-y-2 text-sm text-blue-800">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Use clear, descriptive titles that tell what the dish is</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>List ingredients with specific measurements</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Write step-by-step instructions in order</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Include cooking times and temperatures when relevant</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AddRecipeForm;
