import React, { useState } from 'react';
import { Calendar, Clock, User, Phone, FileText } from 'lucide-react';

type AppointmentType = 'in-person' | 'online';

function BookAppointment() {
  const [appointmentType, setAppointmentType] = useState<AppointmentType>('in-person');

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Book an Appointment</h1>

      {/* Appointment Type Selection */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-semibold mb-4">Select Appointment Type</h2>
        <div className="flex gap-4">
          <button
            className={`flex-1 p-4 rounded-lg border-2 ${
              appointmentType === 'in-person'
                ? 'border-rose-600 bg-rose-50 text-rose-700'
                : 'border-gray-200 hover:border-gray-300'
            }`}
            onClick={() => setAppointmentType('in-person')}
          >
            <User className="h-6 w-6 mx-auto mb-2" />
            <span className="block font-medium">In-Person Visit</span>
          </button>
          <button
            className={`flex-1 p-4 rounded-lg border-2 ${
              appointmentType === 'online'
                ? 'border-rose-600 bg-rose-50 text-rose-700'
                : 'border-gray-200 hover:border-gray-300'
            }`}
            onClick={() => setAppointmentType('online')}
          >
            <FileText className="h-6 w-6 mx-auto mb-2" />
            <span className="block font-medium">Online Consultation</span>
          </button>
        </div>
      </div>

      {/* Appointment Form */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-6">Patient Information</h2>
        <form className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500"
                placeholder="Enter your full name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500"
                placeholder="Enter your phone number"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Preferred Date
              </label>
              <input
                type="date"
                className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Preferred Time
              </label>
              <input
                type="time"
                className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Reason for Visit
            </label>
            <textarea
              className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500"
              rows={4}
              placeholder="Please describe your symptoms or reason for visit"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-rose-600 text-white py-3 rounded-lg font-semibold hover:bg-rose-700 transition"
          >
            Book Appointment
          </button>
        </form>
      </div>
    </div>
  );
}

export default BookAppointment;