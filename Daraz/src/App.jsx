import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero Section/Hero";
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/login" element={<h1>Login</h1>} />
        <Route path="/signup" element={<h1>Signup</h1>} />
        <Route path="/cart" element={<h1>Cart</h1>} />
      </Routes>
    </>
  );
}

export default App;
