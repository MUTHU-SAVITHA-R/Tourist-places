import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Navbar";
import Homepage from "./Homepage";
import State from "./State";
import State2 from "./State2";
import Kanyakumari from "./Kanyakumari";
import Login from "./Login";
import { useState } from "react";
import Footer from "./Footer";
import About from "./About";

function App() {
  const [search, setSearch] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <Navbar search={search} setSearch={setSearch} />

      <Routes>

        <Route  path="/" element={<Homepage />} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />

        <Route
          path="/bangalore"
          element={isLoggedIn ? <State search={search} /> : <Navigate to="/login" />}
        />
        <Route
          path="/chennai"
          element={isLoggedIn ? <State2 search={search} /> : <Navigate to="/login" />}
        />
        <Route
          path="/kanyakumari"
          element={isLoggedIn ? <Kanyakumari search={search} /> : <Navigate to="/login" />}
        />
        <Route
          path="/about" element={<About />} />
      </Routes>
      <div id="about">
        <About />
      </div>

      <Footer />

    </Router>
  );
}

export default App;
