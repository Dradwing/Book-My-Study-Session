import React from "react"
import "./App.css";
import Navbar from "./components/Navbar/Navbar"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from "./pages/HomePage/HomePage.jsx";
import Footer from "./components/Footer/Footer.jsx";
import SessionsPage from "./pages/SessionsPage/SessionsPage.jsx";
import SessionDetailPage from "./pages/SessionDetailPage/SessionDetailPage.jsx";

function App() {
  return (
    <div className="app">
       <Navbar></Navbar>
       <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Routes>
        <Route path="/sessions" element={<SessionsPage />} />
      </Routes>
      <Routes>
        <Route path="/sessionDetails" element={<SessionDetailPage />} />
      </Routes>
    </BrowserRouter>
    <Footer></Footer>
    </div>
  )
}

export default App
