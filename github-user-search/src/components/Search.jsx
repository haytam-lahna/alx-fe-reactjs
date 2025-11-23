import { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!username.trim()) {
      return;
    }

    setLoading(true);
    setError(false);
    setUserData(null);

    try {
      const data = await fetchUserData(username);
      setUserData(data);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const formStyle = {
    marginBottom: '30px'
  };

  const inputStyle = {
    padding: '10px',
    fontSize: '16px',
    width: '300px',
    border: '2px solid #ddd',
    borderRadius: '5px 0 0 5px',
    outline: 'none'
  };

  const buttonStyle = {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#0366d6',
    color: 'white',
    border: 'none',
    borderRadius: '0 5px 5px 0',
    cursor: 'pointer'
  };

  const userCardStyle = {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '30px',
    marginTop: '20px',
    maxWidth: '400px',
    margin: '20px auto',
    textAlign: 'center',
    backgroundColor: '#f9f9f9',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  };

  const avatarStyle = {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    marginBottom: '20px',
    border: '3px solid #0366d6'
  };

  const linkStyle = {
    display: 'inline-block',
    padding: '10px 20px',
    backgroundColor: '#0366d6',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '5px',
    marginTop: '15px'
  };

  return (
    <div>
      <form onSubmit={handleSubmit} style={formStyle}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username..."
          style={inputStyle}
        />
        <button type="submit" style={buttonStyle}>
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}

      {error && <p style={{ color: 'red' }}>Looks like we cant find the user</p>}

      {userData && !loading && !error && (
        <div style={userCardStyle}>
          <img src={userData.avatar_url} alt={userData.login} style={avatarStyle} />
          <h2>{userData.name || userData.login}</h2>
          <p style={{ color: '#666', margin: '10px 0' }}>@{userData.login}</p>
          {userData.bio && <p style={{ margin: '15px 0' }}>{userData.bio}</p>}
          <div style={{ margin: '15px 0' }}>
            <p><strong>Public Repos:</strong> {userData.public_repos}</p>
            <p><strong>Followers:</strong> {userData.followers}</p>
            <p><strong>Following:</strong> {userData.following}</p>
          </div>
          <a href={userData.html_url} target="_blank" rel="noopener noreferrer" style={linkStyle}>
            View Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default Search;
