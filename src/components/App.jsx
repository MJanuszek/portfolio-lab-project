// import { useState } from "react";
import "../styles/App.scss";
import React from "react";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Test from "./Register";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-account" element={<Test />} />
      </Routes>
    </Router>
  );
}

export default App;
