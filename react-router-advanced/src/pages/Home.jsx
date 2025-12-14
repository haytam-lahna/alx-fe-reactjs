import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h2>Home</h2>
      <nav>
        <Link to="/profile">Profile</Link> |{" "}
        <Link to="/posts/1">Post 1</Link>
      </nav>
    </div>
  );
}

export default Home;
