function Services() {
  const listStyle = {
    listStyleType: 'square',
    paddingLeft: '40px'
  };

  const listItemStyle = {
    fontSize: '1.1em',
    margin: '10px 0'
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Our Services</h1>
      <ul style={listStyle}>
        <li style={listItemStyle}>Technology Consulting</li>
        <li style={listItemStyle}>Market Analysis</li>
        <li style={listItemStyle}>Product Development</li>
      </ul>
    </div>
  );
}

export default Services;