import Search from './components/Search';
import './App.css';

function App() {
  return (
    <div className="App" style={{
      maxWidth: '800px',
      margin: '0 auto',
      padding: '40px 20px',
      textAlign: 'center'
    }}>
      <h1 style={{ 
        color: '#0366d6',
        marginBottom: '10px',
        fontSize: '2.5rem'
      }}>
        GitHub User Search
      </h1>
      <p style={{ 
        color: '#666',
        marginBottom: '40px',
        fontSize: '1.1rem'
      }}>
        Search for GitHub users and view their profiles
      </p>

      <Search />
    </div>
  );
}

export default App;
