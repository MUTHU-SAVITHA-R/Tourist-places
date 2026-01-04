import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ setIsLoggedIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

 
  
  function handleLogin(e) {
    e.preventDefault();

    const users=JSON.parse(localStorage.getItem("users"))||[];
    
    const matcheduser=users.find(user=>user.email===email && user.password===password );
    if(matcheduser){
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("userEmail", email);
      setIsLoggedIn(true);
         navigate("/");
          
    }
    else{
        alert("Invalid credentials");
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
