import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Navbar";
import Homepage from "./Homepage";
import State from "./State";
import State2 from "./State2";
import Kanyakumari from "./kanyakumari";
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
          <Route path="/bangalore" element={isLoggedIn ? <State search={search} /> : <Navigate to="/login" />} />
          <Route path="/chennai" element={isLoggedIn ? <State2 search={search} /> : <Navigate to="/login" />} />
          <Route path="/kanyakumari" element={isLoggedIn ? <Kanyakumari search={search} /> : <Navigate to="/login" />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      <div id="about">
        <About />
      </div>
      <Footer />
    </Router>
  );
}

export default App;
