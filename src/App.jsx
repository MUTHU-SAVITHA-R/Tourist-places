import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Navbar";
import Homepage from "./Homepage";
import City from "./City";
import Login from "./Login";
import Signup from "./Signup";
import About from "./About";
import Footer from "./Footer";
import { useState, useEffect } from "react";

function App() {
  const [search, setSearch] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedLogin = localStorage.getItem("isLoggedIn");
    if (storedLogin === "true") setIsLoggedIn(true);
  }, []);

  const NAV_HEIGHT = 80;

  return (
    <Router>
      <Navbar search={search} setSearch={setSearch} isLoggedIn={isLoggedIn} />

      <div style={{ paddingTop: NAV_HEIGHT }}>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn} />} />

          <Route
            path="/city/:cityId"
            element={isLoggedIn ? <City search={search} /> : <Navigate to="/login" />}
          />

          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      <div id="about">
        <About/>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
