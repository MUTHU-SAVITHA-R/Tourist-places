import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ setIsLoggedIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

 
  const validEmail = "savitha@gmail.com";
  const validPassword = "12345";

  function handleLogin(e) {
    e.preventDefault();

    if (email === validEmail && password === validPassword) {
      setIsLoggedIn(true);
      navigate("/");
    } else {
      alert("Invalid Credentials!");
    }
  }

  return (
    <div style={{ textAlign: "center", marginTop: "120px" }}>
      <h2>Login Here</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ padding: "10px", borderRadius: "8px", width: "250px" }}
        /><br /><br />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ padding: "10px", borderRadius: "8px", width: "250px" }}
        /><br /><br />

        <button
          type="submit"
          style={{
            padding: "10px 25px",
            borderRadius: "10px",
            cursor: "pointer",
            background: "blue",
            color: "white"
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
