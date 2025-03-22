import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import FindHospital from './pages/FindHospital';
import BookAppointment from './pages/BookAppointment';
import BloodDonors from './pages/BloodDonors';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/find-hospital" element={<FindHospital />} />
          <Route path="/book-appointment" element={<BookAppointment />} />
          <Route path="/blood-donors" element={<BloodDonors />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;