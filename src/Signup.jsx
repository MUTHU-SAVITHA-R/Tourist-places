import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup({ setIsLoggedIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  function handleSignup(e) {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }


    const users = JSON.parse(localStorage.getItem("users")) || [];
    const emailExists = users.some((user) => user.email === email);

    if (emailExists) {
      alert("Email already exists! Please login.");
      navigate("/login");
      return;
    }
    const newUser = { email, password };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("userEmail", email);
    setIsLoggedIn(true);
    navigate("/");
  }

  return (
    <div style={{ textAlign: "center", marginTop: "120px" }}>
      <h2>SignUp Here</h2>

      <form onSubmit={handleSignup}>
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ padding: "10px", borderRadius: "8px", width: "250px" }}
          required
        />
        <br /><br />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ padding: "10px", borderRadius: "8px", width: "250px" }}
          required
        />
        <br /><br />

        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          style={{ padding: "10px", borderRadius: "8px", width: "250px" }}
          required
        />
        <br /><br />

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
          SignUp
        </button>
      </form>
    </div>
  );
}

export default Signup;
