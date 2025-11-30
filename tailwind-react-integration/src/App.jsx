import UserProfile from './components/UserProfile';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 py-10">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
        User Profiles
      </h1>
      <UserProfile />
    </div>
  );
}

export default App;
