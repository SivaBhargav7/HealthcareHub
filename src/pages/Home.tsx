import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Video, Stethoscope, Clock, Pill, Heart } from 'lucide-react';

const featuredImages = [
  "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1504813184591-01572f98c85f?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80"
];

function Home() {
  return (
    <div className="space-y-16 py-8">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&q=80"
            alt="Healthcare"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gray-900/60"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl font-bold mb-6">Welcome to Siva Bhargav HealthCare Hub <Heart className="inline h-8 w-8 text-rose-500" /></h1>
            <p className="text-xl mb-8">Access quality healthcare services, book appointments, and connect with top medical professionals near you.</p>
            <Link
              to="/book-appointment"
              className="inline-block bg-rose-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-rose-700 transition"
            >
              Book an Appointment
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Images Section */}
      <section className="max-w-7xl mx-auto px-4 overflow-hidden">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Healthcare Services</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {featuredImages.map((image, index) => (
            <div 
              key={index} 
              className="relative h-64 overflow-hidden rounded-lg transform transition-transform hover:scale-105"
            >
              <img
                src={image}
                alt={`Healthcare service ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <Calendar className="h-12 w-12 text-rose-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Book Appointments</h3>
            <p className="text-gray-600">Schedule appointments with specialists at your convenience</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <Video className="h-12 w-12 text-rose-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Online Consultation</h3>
            <p className="text-gray-600">Connect with doctors virtually from the comfort of your home</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <Stethoscope className="h-12 w-12 text-rose-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Find Specialists</h3>
            <p className="text-gray-600">Locate specialized doctors based on your medical needs</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <Clock className="h-12 w-12 text-rose-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
            <p className="text-gray-600">Round-the-clock medical assistance and emergency support</p>
          </div>
        </div>
      </section>

      {/* Medicines Section */}
      <section className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Medicine Delivery</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              name: "Paracetamol",
              image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80",
              use: "Pain reliever and fever reducer",
              price: "₹50"
            },
            {
              name: "Pantoprazole",
              image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&q=80",
              use: "Gastric acid regulation",
              price: "₹120"
            },
            {
              name: "Telma 20",
              image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&q=80",
              use: "Blood pressure management",
              price: "₹85"
            }
          ].map((medicine, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={medicine.image}
                alt={medicine.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{medicine.name}</h3>
                <p className="text-gray-600 mb-4">{medicine.use}</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-rose-600">{medicine.price}</span>
                  <button className="bg-rose-600 text-white px-4 py-2 rounded-lg hover:bg-rose-700">
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;