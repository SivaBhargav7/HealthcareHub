import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Guitar as Hospital, Calendar, Droplet, Pill } from 'lucide-react';

function Navbar() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-rose-600" />
              <div className="flex flex-col">
                <span className="text-xl font-bold text-gray-800">HealthCare Hub</span>
                <span className="text-sm font-bold text-gray-600">Created by Siva Bhargav</span>
              </div>
            </Link>
          </div>
          
          <div className="flex items-center space-x-8">
            <Link to="/find-hospital" className="flex items-center space-x-1 text-gray-700 hover:text-rose-600">
              <Hospital className="h-5 w-5" />
              <span>Find Hospitals</span>
            </Link>
            <Link to="/book-appointment" className="flex items-center space-x-1 text-gray-700 hover:text-rose-600">
              <Calendar className="h-5 w-5" />
              <span>Book Appointment</span>
            </Link>
            <Link to="/blood-donors" className="flex items-center space-x-1 text-gray-700 hover:text-rose-600">
              <Droplet className="h-5 w-5" />
              <span>Blood Donors</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;