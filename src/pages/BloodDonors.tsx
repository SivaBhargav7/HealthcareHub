import React, { useState } from 'react';
import { Search, MapPin, Droplet, Phone } from 'lucide-react';

const mockDonors = [
  {
    id: 1,
    name: "John Smith",
    bloodType: "A+",
    location: "Downtown Area",
    lastDonation: "2024-02-15",
    contact: "+1 234-567-8902"
  },
  {
    id: 2,
    name: "Sarah Johnson",
    bloodType: "O-",
    location: "Westside District",
    lastDonation: "2024-01-20",
    contact: "+1 234-567-8903"
  }
];

function BloodDonors() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBloodType, setSelectedBloodType] = useState('');

  const bloodTypes = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex items-center gap-2 mb-8">
        <Droplet className="h-8 w-8 text-rose-600" />
        <h1 className="text-3xl font-bold">Find Blood Donors</h1>
      </div>

      {/* Search Section */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search by location..."
              className="w-full pl-10 pr-4 py-2 border rounded-lg"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <select
            className="w-full px-4 py-2 border rounded-lg"
            value={selectedBloodType}
            onChange={(e) => setSelectedBloodType(e.target.value)}
          >
            <option value="">All Blood Types</option>
            {bloodTypes.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Donors List */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockDonors.map(donor => (
          <div key={donor.id} className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">{donor.name}</h2>
              <span className="bg-rose-100 text-rose-700 px-3 py-1 rounded-full font-medium">
                {donor.bloodType}
              </span>
            </div>
            
            <div className="space-y-3 text-gray-600">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                <span>{donor.location}</span>
              </div>
              
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                <span>{donor.contact}</span>
              </div>
              
              <div className="text-sm">
                Last donation: {new Date(donor.lastDonation).toLocaleDateString()}
              </div>
            </div>

            <button className="mt-4 w-full bg-rose-600 text-white py-2 rounded-lg font-medium hover:bg-rose-700 transition">
              Contact Donor
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BloodDonors;