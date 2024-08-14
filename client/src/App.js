import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Add Routes here
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Jobs from './pages/JobListings';
// import Freelancers from './pages/Freelancers';
import Projects from './pages/Projects';
import About from './pages/About';
// import Contact from './pages/Contact';
// import Login from './pages/Login';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes> {/* Use Routes instead of Switch in React Router v6 */}
        <Route path="/" element={<Home />} />
        {/* <Route path="/jobs" element={<Jobs />} /> */}
        {/* <Route path="/freelancers" element={<Freelancers />} /> */}
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/contact" element={<Contact />} /> 
        <Route path="/login" element={<Login />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
