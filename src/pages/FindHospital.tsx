import React, { useState } from 'react';
import { MapPin, Search, Phone, Clock } from 'lucide-react';

const mockHospitals = [
  {
    id: 1,
    name: "Medicover Hospital",
    image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&q=80",
    address: "123 Healthcare Ave, City Center",
    phone: "+1 234-567-8900",
    specialties: ["Cardiology", "Neurology", "Pediatrics"],
    timing: "24/7"
  },
  {
    id: 2,
    name: "Narayana Hospital",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80",
    address: "456 Medical Park, Downtown",
    phone: "+1 234-567-8901",
    specialties: ["Cardiology", "Oncology", "Orthopedics"],
    timing: "24/7"
  },
  {
    id: 3,
    name: "Apollo Hospital",
    image: "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&q=80",
    address: "789 Health Boulevard, Uptown",
    phone: "+1 234-567-8902",
    specialties: ["Multi-Specialty", "Emergency Care", "Surgery"],
    timing: "24/7"
  }
];

function FindHospital() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Find Hospitals Near You</h1>
      
      {/* Search Section */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <div className="flex gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search hospitals, specialties..."
                className="w-full pl-10 pr-4 py-2 border rounded-lg"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          <button className="bg-rose-600 text-white px-6 py-2 rounded-lg hover:bg-rose-700">
            Search
          </button>
        </div>
      </div>

      {/* Hospital List */}
      <div className="grid md:grid-cols-2 gap-6">
        {mockHospitals.map(hospital => (
          <div key={hospital.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={hospital.image}
              alt={hospital.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-4">{hospital.name}</h2>
              
              <div className="space-y-3">
                <div className="flex items-center text-gray-600">
                  <MapPin className="h-5 w-5 mr-2" />
                  <span>{hospital.address}</span>
                </div>
                
                <div className="flex items-center text-gray-600">
                  <Phone className="h-5 w-5 mr-2" />
                  <span>{hospital.phone}</span>
                </div>
                
                <div className="flex items-center text-gray-600">
                  <Clock className="h-5 w-5 mr-2" />
                  <span>{hospital.timing}</span>
                </div>

                <div className="mt-4">
                  <h3 className="font-semibold mb-2">Specialties:</h3>
                  <div className="flex flex-wrap gap-2">
                    {hospital.specialties.map(specialty => (
                      <span
                        key={specialty}
                        className="bg-rose-100 text-rose-700 px-3 py-1 rounded-full text-sm"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FindHospital;