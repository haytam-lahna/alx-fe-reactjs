import Search from './components/Search';
import './index.css';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            GitHub User Search
          </h1>
          <p className="text-xl text-gray-600">
            Discover GitHub users with advanced search filters
          </p>
        </div>

        <Search />
      </div>
    </div>
  );
}

export default App;
