import { useContext } from 'react';
import UserContext from './UserContext';

function UserProfile() {
  const userData = useContext(UserContext);

  return (
    <div style={{ 
      border: '1px solid gray', 
      padding: '15px', 
      margin: '15px',
      borderRadius: '8px',
      backgroundColor: '#f9f9f9',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <h2 style={{ color: 'blue', fontSize: '24px', marginBottom: '10px' }}>{userData.name}</h2>
      <p style={{ fontSize: '16px', color: '#555' }}>
        Age: <span style={{ fontWeight: 'bold', color: '#333' }}>{userData.age}</span>
      </p>
      <p style={{ fontSize: '14px', color: '#666', lineHeight: '1.6' }}>Bio: {userData.bio}</p>
    </div>
  );
}

export default UserProfile;
