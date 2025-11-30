import UserProfile from './components/UserProfile';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-800 mb-4">
          Responsive User Profiles
        </h1>
        <p className="text-center text-gray-600 mb-10 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
          This component adapts to different screen sizes. Try resizing your browser window to see the responsive design in action!
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          <UserProfile />
          <UserProfile />
          <UserProfile />
        </div>
        
        <div className="mt-16 bg-white rounded-lg shadow-md p-6 max-w-4xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">
            Responsive Features
          </h2>
          <ul className="space-y-2 text-gray-600 text-sm sm:text-base">
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">✓</span>
              <span><strong>Mobile (< 640px):</strong> Compact layout with p-4 padding, text-lg heading, and 96px image</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">✓</span>
              <span><strong>Tablet (640px - 767px):</strong> Medium layout with p-6 padding, text-xl heading, and 128px image</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">✓</span>
              <span><strong>Desktop (≥ 768px):</strong> Spacious layout with p-8 padding, text-2xl heading, and 144px image</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
