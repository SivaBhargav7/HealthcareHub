import React from 'react';
import { Heart, Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Heart className="h-6 w-6 text-rose-500" />
              <span className="text-xl font-bold">HealthCare Hub</span>
            </div>
            <p className="text-gray-400">
              Your trusted partner in healthcare services. Making quality healthcare accessible to everyone.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/find-hospital" className="text-gray-400 hover:text-white">
                  Find Hospitals
                </Link>
              </li>
              <li>
                <Link to="/book-appointment" className="text-gray-400 hover:text-white">
                  Book Appointment
                </Link>
              </li>
              <li>
                <Link to="/blood-donors" className="text-gray-400 hover:text-white">
                  Blood Donors
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Online Consultation</li>
              <li className="text-gray-400">Emergency Services</li>
              <li className="text-gray-400">Lab Tests</li>
              <li className="text-gray-400">Health Checkups</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                <span>support@healthcarehub.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                <span>123 Healthcare Ave, Medical District</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} HealthCare Hub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;