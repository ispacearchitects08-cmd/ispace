"use client";

import React, { useState } from 'react';
import { Phone, Mail } from 'lucide-react';

export default function AppointmentSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    service: '',
    date: '',
    time: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic to handle form submission would go here
    console.log('Form submitted:', formData);
    alert('Thank you for booking an appointment! We will contact you shortly.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="container mx-auto px-4 lg:px-8 py-20" id="contact_us">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* Left Side: Info */}
        <div>
          <h4 className="text-primary uppercase tracking-widest font-bold mb-3">Appointment</h4>
          <h2 className="text-4xl lg:text-5xl font-heading text-dark-text leading-tight mb-6">
            Make An Appointment To Start Your Dream Project
          </h2>
          <p className="text-gray-500 mb-8 leading-relaxed">
            Engage in a comprehensive design and build consultation with our skilled architect and construction team. Transform your vision into reality with expert guidance and efficient project execution. Schedule today!
          </p>
          
          <div className="space-y-6">
            <div className="flex items-center">
              <div className="w-16 h-16 bg-light-bg rounded-2xl flex items-center justify-center flex-shrink-0">
                <Phone className="w-8 h-8 text-primary" />
              </div>
              <div className="ml-6">
                <p className="text-gray-500 mb-1">Call Us Now</p>
                <h3 className="text-2xl font-heading text-dark-text m-0">+91 70103 08898</h3>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-16 h-16 bg-light-bg rounded-2xl flex items-center justify-center flex-shrink-0">
                <Mail className="w-8 h-8 text-primary" />
              </div>
              <div className="ml-6">
                <p className="text-gray-500 mb-1">Mail Us Now</p>
                <h3 className="text-xl lg:text-2xl font-heading text-dark-text m-0 break-all">contact@ispacearchitects.com</h3>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="bg-white">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="sm:col-span-1">
              <input 
                type="text" 
                name="name"
                placeholder="Your Name" 
                className="w-full h-14 px-4 border-2 border-gray-100 rounded-xl bg-gray-50/50 focus:bg-white focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                onChange={handleChange}
                required
              />
            </div>
            <div className="sm:col-span-1">
              <input 
                type="email" 
                name="email"
                placeholder="Your Email" 
                className="w-full h-14 px-4 border-2 border-gray-100 rounded-xl bg-gray-50/50 focus:bg-white focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                onChange={handleChange}
                required
              />
            </div>
            <div className="sm:col-span-1">
              <input 
                type="text" 
                name="mobile"
                placeholder="Your Mobile" 
                className="w-full h-14 px-4 border-2 border-gray-100 rounded-xl bg-gray-50/50 focus:bg-white focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                onChange={handleChange}
                required
              />
            </div>
            <div className="sm:col-span-1">
              <select 
                name="service"
                className="w-full h-14 px-4 border-2 border-gray-100 rounded-xl bg-gray-50/50 focus:bg-white focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-gray-500"
                onChange={handleChange}
                required
              >
                <option value="">Choose Service</option>
                <option value="Architecture">Architecture</option>
                <option value="Interior Design">Interior Design</option>
                <option value="Construction">Construction</option>
              </select>
            </div>
            <div className="sm:col-span-1">
              <input 
                type="date" 
                name="date"
                className="w-full h-14 px-4 border-2 border-gray-100 rounded-xl bg-gray-50/50 focus:bg-white focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-gray-500"
                onChange={handleChange}
                required
              />
            </div>

            <div className="sm:col-span-2">
              <textarea 
                name="message"
                rows={5} 
                placeholder="Message" 
                className="w-full p-4 border-2 border-gray-100 rounded-xl bg-gray-50/50 focus:bg-white focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-y"
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="sm:col-span-2">
              <button 
                type="submit" 
                className="w-full bg-primary text-white py-4 font-medium text-lg rounded-xl shadow-lg hover:bg-[#c79d75] hover:-translate-y-0.5 active:scale-95 transition-all duration-300"
              >
                Book Appointment
              </button>
            </div>
          </form>
        </div>

      </div>
    </div>
  );
}
