import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import ProductSelection from './components/ProductSelection';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/products" element={<ProductSelection />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
