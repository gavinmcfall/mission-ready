import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h2>Home</h2>
      <Link to="/" style={{ marginRight: "16px" }}>
        Home
      </Link>
      <Link to="/about" style={{ marginRight: "16px" }}>
        About
      </Link>
      <Link to="/contact" style={{ marginRight: "16px" }}>
        Contact
      </Link>
      <Link to="/signup" style={{ marginRight: "16px" }}>
        Sign Up
      </Link>
      <Link to="/login" style={{ marginRight: "16px" }}>
        Login
      </Link>
    </div>
  );
}

export default Home;
