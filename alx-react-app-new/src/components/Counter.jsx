import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ 
      textAlign: 'center', 
      padding: '20px',
      margin: '20px',
      border: '2px solid #4CAF50',
      borderRadius: '10px',
      backgroundColor: '#f9f9f9'
    }}>
      <h2 style={{ color: '#333', marginBottom: '20px' }}>Counter Application</h2>
      <p style={{ 
        fontSize: '48px', 
        fontWeight: 'bold',
        color: '#4CAF50',
        margin: '20px 0'
      }}>
        Current Count: {count}
      </p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
        <button 
          onClick={() => setCount(count + 1)}
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          Increment
        </button>
        <button 
          onClick={() => setCount(count - 1)}
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            backgroundColor: '#f44336',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          Decrement
        </button>
        <button 
          onClick={() => setCount(0)}
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            backgroundColor: '#2196F3',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;
```

Commit message: `Add Counter component`

### Step C: Add Other Files

Repeat for each file:

**Header.jsx**: `alx-react-app-new/src/Header.jsx`
**MainContent.jsx**: `alx-react-app-new/src/MainContent.jsx`
**Footer.jsx**: `alx-react-app-new/src/Footer.jsx`
**UserProfile.jsx**: `alx-react-app-new/src/components/UserProfile.jsx`
**WelcomeMessage.jsx**: `alx-react-app-new/src/components/WelcomeMessage.jsx`
**App.jsx**: `alx-react-app-new/src/App.jsx`

## Step 11: Edit Existing Files (If Needed)

If a file already exists and you need to update it:

1. Navigate to the file on GitHub
2. Click the **pencil icon** (Edit this file) on the right
3. Make your changes
4. Scroll down to "Commit changes"
5. Add commit message
6. Click **"Commit changes"**

## Step 12: View Your Repository Structure

After uploading, your repository should look like:
```
alx-fe-reactjs/
├── alx-react-app/
└── alx-react-app-new/
    ├── public/
    ├── src/
    │   ├── components/
    │   │   ├── Counter.jsx
    │   │   ├── UserProfile.jsx
    │   │   └── WelcomeMessage.jsx
    │   ├── App.jsx
    │   ├── Header.jsx
    │   ├── MainContent.jsx
    │   └── Footer.jsx
    ├── package.json
    └── README.md
