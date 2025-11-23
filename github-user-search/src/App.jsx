import { useState } from 'react';
import Search from './components/Search';
import UserCard from './components/UserCard';
import { searchUsers } from './services/githubService';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (username) => {
    setLoading(true);
    setError(null);
    setUsers([]);

    try {
      const data = await searchUsers(username);
      setUsers(data.items || []);
      if (data.items.length === 0) {
        setError('No users found');
      }
    } catch (err) {
      setError('Error fetching users. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App" style={{
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '20px',
      textAlign: 'center'
    }}>
      <h1 style={{ color: '#0366d6' }}>GitHub User Search</h1>
      <p style={{ color: '#666', marginBottom: '30px' }}>
        Search for GitHub users and view their profiles
      </p>

      <Search onSearch={handleSearch} />

      {loading && <p>Loading...</p>}

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '20px',
        marginTop: '20px'
      }}>
        {users.map(user => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}

export default App;
