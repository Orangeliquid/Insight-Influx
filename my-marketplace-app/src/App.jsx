import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CyberSecurity from './pages/CyberSecurity';
import DataManagement from './pages/DataManagement';
import SoftwareEngineering from './pages/SoftwareEngineering';
import BusinessAdministration from './pages/BusinessAdministration';
import Accounting from './pages/Accounting';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Pricing from './pages/Pricing';
import About from './pages/About';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/CyberSecurity" element={<CyberSecurity />} />
          <Route path="/DataManagement" element={<DataManagement />} />
          <Route path="/SoftwareEngineering" element={<SoftwareEngineering />} />
          <Route path="/BusinessAdministration" element={<BusinessAdministration />} />
          <Route path="/Accounting" element={<Accounting />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/Pricing" element={<Pricing />} />
          <Route path="/About" element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
