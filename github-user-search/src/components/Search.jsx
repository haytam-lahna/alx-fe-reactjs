import { useState } from 'react';
import { searchUsers, fetchUserData } from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [totalCount, setTotalCount] = useState(0);
  const [page, setPage] = useState(1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setPage(1);
    await performSearch(1);
  };

  const performSearch = async (pageNum) => {
    if (!username.trim() && !location.trim() && !minRepos) {
      return;
    }

    setLoading(true);
    setError(false);
    if (pageNum === 1) {
      setUsers([]);
    }

    try {
      const searchParams = {
        username: username.trim(),
        location: location.trim(),
        minRepos: minRepos
      };

      const data = await searchUsers(searchParams);
      
      if (pageNum === 1) {
        setUsers(data.items || []);
      } else {
        setUsers(prev => [...prev, ...(data.items || [])]);
      }
      
      setTotalCount(data.total_count || 0);
    } catch (err) {
      setError(true);
      setUsers([]);
    } finally {
      setLoading(false);
    }
  };

  const handleLoadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    performSearch(nextPage);
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      {/* Search Form */}
      <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
              Username
            </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="e.g., octocat"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
            />
          </div>

          <div>
            <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
              Location
            </label>
            <input
              id="location"
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="e.g., San Francisco"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
            />
          </div>

          <div>
            <label htmlFor="minRepos" className="block text-sm font-medium text-gray-700 mb-2">
              Minimum Repositories
            </label>
            <input
              id="minRepos"
              type="number"
              value={minRepos}
              onChange={(e) => setMinRepos(e.target.value)}
              placeholder="e.g., 10"
              min="0"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Search Users
        </button>
      </form>

      {/* Loading State */}
      {loading && (
        <div className="text-center py-8">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      )}

      {/* Error State */}
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-center">
          Looks like we cant find the user
        </div>
      )}

      {/* Results Count */}
      {!loading && !error && users.length > 0 && (
        <div className="mb-4 text-gray-600">
          Found {totalCount} user{totalCount !== 1 ? 's' : ''} matching your criteria
        </div>
      )}

      {/* Search Results */}
      {!loading && !error && users.length > 0 && (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {users.map((user) => (
              <div
                key={user.id}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex flex-col items-center">
                    <img
                      src={user.avatar_url}
                      alt={user.login}
                      className="w-24 h-24 rounded-full border-4 border-blue-100 mb-4"
                    />
                    <h3 className="text-xl font-semibold text-gray-800 mb-1">
                      {user.login}
                    </h3>
                    
                    {user.location && (
                      <p className="text-sm text-gray-600 mb-2 flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        {user.location}
                      </p>
                    )}

                    <div className="w-full mt-4 pt-4 border-t border-gray-200">
                      <div className="flex justify-around text-center">
                        <div>
                          <p className="text-2xl font-bold text-blue-600">
                            {user.public_repos || 0}
                          </p>
                          <p className="text-xs text-gray-500">Repos</p>
                        </div>
                        <div>
                          <p className="text-2xl font-bold text-blue-600">
                            {user.followers || 0}
                          </p>
                          <p className="text-xs text-gray-500">Followers</p>
                        </div>
                      </div>
                    </div>

                    
                      href={user.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition duration-200 text-center block"
                    >
                      View Profile
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          {users.length < totalCount && (
            <div className="mt-8 text-center">
              <button
                onClick={handleLoadMore}
                disabled={loading}
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 px-8 rounded-lg transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Loading...' : 'Load More'}
              </button>
            </div>
          )}
        </div>
      )}

      {/* No Results */}
      {!loading && !error && users.length === 0 && (username || location || minRepos) && (
        <div className="text-center py-8 text-gray-600">
          No users found matching your criteria. Try adjusting your search parameters.
        </div>
      )}
    </div>
  );
};

export default Search;
