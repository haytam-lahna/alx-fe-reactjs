function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-2xl p-8 max-w-md">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Tailwind CSS + React
        </h1>
        <p className="text-gray-600 mb-6">
          Tailwind CSS has been successfully integrated with your React application!
        </p>
        <div className="flex gap-4">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition duration-200">
            Primary Button
          </button>
          <button className="bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 px-4 rounded transition duration-200">
            Secondary Button
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
