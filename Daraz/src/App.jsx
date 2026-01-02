import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero Section/Hero";
import Login from "./Components/Auth/Login";
import Signup from "./Components/Auth/Signup";
import Product from "./Components/Firstproduct.jsx/Prodect";

import "./App.css";

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);


  useEffect(() => {
    if (location.pathname === "/login") {
      setShowLogin(true);
      setShowSignup(false);

    }
    else if (location.pathname === "/signup") {
      setShowSignup(true);
      setShowLogin(false);
    }
    else {
      setShowLogin(false);
      setShowSignup(false);
    }
  }, [location.pathname]);


  return (
    <div className="relative">

      {/* Hero + Navbar section */}
      <div
        className={`transition duration-300 ${showLogin || showSignup ? "opacity-50 " : "opacity-100 bg-white"}`}
      >
        <Navbar />
        <Hero />
        <Product />
      </div>


      {/* Routes */}
      <Routes>
        <Route path="/" element={null} />
        {/* <Route path="/signup" element={<Signup />} /> */}
        {/* <Route path="/cart" element={<Cart />} /> */}
      </Routes>

      {/* Login Modal */}
      {showLogin && (
        <div className="fixed inset-0  flex items-center justify-center z-50">
          <Login closeLogin={() => navigate("/")} />
        </div>
      )}
      {/* Signup Modal */}
      {showSignup && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <Signup closeSignup={() => navigate("/")} />
        </div>
      )}

    </div>
  );
}

export default App;
