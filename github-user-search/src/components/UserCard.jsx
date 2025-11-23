const UserCard = ({ user }) => {
  const cardStyle = {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '20px',
    margin: '10px',
    display: 'inline-block',
    width: '250px',
    textAlign: 'center',
    backgroundColor: '#f9f9f9'
  };

  const imgStyle = {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    marginBottom: '10px'
  };

  const linkStyle = {
    display: 'inline-block',
    padding: '8px 16px',
    backgroundColor: '#0366d6',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '5px',
    marginTop: '10px'
  };

  return (
    <div style={cardStyle}>
      <img src={user.avatar_url} alt={user.login} style={imgStyle} />
      <h3 style={{ margin: '10px 0' }}>{user.login}</h3>
      <a href={user.html_url} target="_blank" rel="noopener noreferrer" style={linkStyle}>
        View Profile
      </a>
    </div>
  );
};

export default UserCard;
