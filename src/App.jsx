import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Import Page Components
import Home from './Home';
import About from './About';
import Services from './Services';
import Contact from './Contact';
// Import Layout Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  const contentStyle = {
    paddingBottom: '50px', // Ensure content doesn't get covered by the fixed footer
    minHeight: '100vh',
    boxSizing: 'border-box',
  };

  return (
    <Router>
      <Navbar />
      <div style={contentStyle}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;