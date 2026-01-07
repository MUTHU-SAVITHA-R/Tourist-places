import { useNavigate } from "react-router-dom";

function Navbar({ search, setSearch, isLoggedIn }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userEmail");
    navigate("/login");
    window.location.reload();
  };

  const handleAboutScroll = () => {
    const about = document.getElementById("about");
    if (about) about.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav style={{
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "12px 30px",
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      zIndex: 20,
      background: "linear-gradient(135deg, #0A2A43, #89CFF0)",
      boxShadow: "0 4px 15px rgba(0,0,0,0.3)"
    }}>
      <div style={{ display: "flex", gap: "20px" }}>
        <h4 style={{ color: "white", cursor: "pointer" }} onClick={() => navigate("/")}>Home</h4>
        <h4 style={{ color: "white", cursor: "pointer" }} onClick={handleAboutScroll}>About</h4>
      </div>

      <input
        style={{
          padding: "8px 15px",
          borderRadius: "25px",
          border: "1px solid #ccc",
          width: "400px",
          maxWidth: "90%",
          fontSize: "14px"
        }}
        type="text"
        placeholder="Search places..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div style={{ display: "flex", gap: "20px" }}>
        {isLoggedIn ? (
          <button style={{
            borderRadius: "20px",
            padding: "8px 18px",
            border: "none",
            background: "#FFD700",
            color: "#0A2A43",
            fontWeight: "bold",
            cursor: "pointer"
          }} onClick={handleLogout}>Logout</button>
        ) : (
          <>
            <button style={{
              borderRadius: "20px",
              padding: "8px 18px",
              border: "none",
              background: "#FFD700",
              color: "#0A2A43",
              fontWeight: "bold",
              cursor: "pointer"
            }} onClick={() => navigate("/login")}>Login</button>
            <button style={{
              borderRadius: "20px",
              padding: "8px 18px",
              border: "none",
              background: "#FFD700",
              color: "#0A2A43",
              fontWeight: "bold",
              cursor: "pointer"
            }} onClick={() => navigate("/signup")}>Signup</button>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
