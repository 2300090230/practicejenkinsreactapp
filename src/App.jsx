import React from "react";
import { BrowserRouter, Route,Routes } from "react-router-dom";
import Home from "./Home";
import Hello from "./Hello";
import Demo from "./Demo";
import Profile from "./Profile";
import "./App.css";
export default function App() {
  return (
    <div>
      <h1>Welcome to My React App</h1>
      <div>
        <nav>
          <a href="/">Home</a> |
          <a href="/hello">Hello</a> |
          <a href="/demo">Demo</a> |
          <a href="/profile">Profile</a>
        </nav>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hello" element={<Hello />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
