"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ChevronRight, Facebook, Linkedin, Instagram, Twitter, Mail, Phone, MapPin, Clock, Send } from "lucide-react"

export default function ContactPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  })

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    alert("Thank you for your message! I'll get back to you soon.")
    setFormData({
      name: "",
      email: "",
      company: "",
      service: "",
      message: "",
    })
  }

  const services = [
    "Administrative Support",
    "Calendar & Scheduling",
    "Customer Service",
    "Social Media Management",
    "Content Creation",
    "Project Management",
    "Research & Analysis",
    "Digital Marketing Support",
    "Custom Package",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="text-2xl font-bold text-amber-900">
              Ijeoma Queensly Ogbonna
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-amber-800 hover:text-amber-600 transition-colors font-medium">
                Home
              </Link>
              <Link href="/about" className="text-amber-800 hover:text-amber-600 transition-colors font-medium">
                About
              </Link>
              <Link href="/services" className="text-amber-800 hover:text-amber-600 transition-colors font-medium">
                Services
              </Link>
              <Link href="/contact" className="text-amber-600 font-medium">
                Contact
              </Link>
            </div>
            <div className="flex space-x-4">
              <a
                href="https://web.facebook.com/ijeoma.ogbonna.7334"
                className="text-amber-700 hover:text-amber-500 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a href="#" className="text-amber-700 hover:text-amber-500 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-amber-700 hover:text-amber-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-amber-700 hover:text-amber-500 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1
            className={`text-5xl lg:text-6xl font-bold text-amber-900 mb-6 transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            Get In Touch
          </h1>
          <p
            className={`text-xl text-amber-700 max-w-3xl mx-auto mb-8 transform transition-all duration-1000 delay-300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            Ready to streamline your business operations? Let's discuss how I can help you achieve your goals.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div
              className={`transform transition-all duration-1000 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}
            >
              <div className="bg-white p-8 rounded-2xl shadow-xl">
                <h2 className="text-3xl font-bold text-amber-900 mb-6">Send Me a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-amber-900 font-medium mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-amber-900 font-medium mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-amber-900 font-medium mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300"
                        placeholder="Your company name"
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-amber-900 font-medium mb-2">
                        Service Interested In
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300"
                      >
                        <option value="">Select a service</option>
                        {services.map((service, index) => (
                          <option key={index} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-amber-900 font-medium mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Tell me about your project and how I can help..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-amber-800 text-white px-8 py-4 rounded-lg hover:bg-amber-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center font-semibold"
                  >
                    Send Message
                    <Send className="ml-2" size={20} />
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div
              className={`transform transition-all duration-1000 delay-300 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}
            >
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-amber-900 mb-6">Contact Information</h2>
                  <p className="text-lg text-amber-800 mb-8">
                    I'm here to help you succeed. Reach out through any of these channels, and I'll get back to you
                    promptly.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-lg">
                    <Mail className="text-amber-600 flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h3 className="font-semibold text-amber-900 mb-1">Email</h3>
                      <p className="text-amber-800">ijeoma.ogbonna@email.com</p>
                      <p className="text-amber-700 text-sm">I typically respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-lg">
                    <Phone className="text-amber-600 flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h3 className="font-semibold text-amber-900 mb-1">Phone</h3>
                      <p className="text-amber-800">+2349067017303</p>
                      <p className="text-amber-700 text-sm">Available for scheduled calls</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-lg">
                    <MapPin className="text-amber-600 flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h3 className="font-semibold text-amber-900 mb-1">Location</h3>
                      <p className="text-amber-800">Remote Services Worldwide</p>
                      <p className="text-amber-700 text-sm">Serving clients globally</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-lg">
                    <Clock className="text-amber-600 flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h3 className="font-semibold text-amber-900 mb-1">Business Hours</h3>
                      <p className="text-amber-800">Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                      <p className="text-amber-700 text-sm">Flexible hours available for urgent projects</p>
                    </div>
                  </div>
                </div>

                <div className="bg-amber-900 text-white p-8 rounded-xl">
                  <h3 className="text-2xl font-bold mb-4">Let's Connect on Social Media</h3>
                  <p className="text-amber-200 mb-6">
                    Follow me for business tips, industry insights, and updates on my services.
                  </p>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="bg-white/20 p-3 rounded-lg hover:bg-white/30 transition-all duration-300 transform hover:scale-110"
                    >
                      <Facebook size={24} />
                    </a>
                    <a
                      href="#"
                      className="bg-white/20 p-3 rounded-lg hover:bg-white/30 transition-all duration-300 transform hover:scale-110"
                    >
                      <Linkedin size={24} />
                    </a>
                    <a
                      href="#"
                      className="bg-white/20 p-3 rounded-lg hover:bg-white/30 transition-all duration-300 transform hover:scale-110"
                    >
                      <Instagram size={24} />
                    </a>
                    <a
                      href="#"
                      className="bg-white/20 p-3 rounded-lg hover:bg-white/30 transition-all duration-300 transform hover:scale-110"
                    >
                      <Twitter size={24} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-amber-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-amber-700">Quick answers to common questions</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-amber-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-amber-900 mb-3">How do you handle confidentiality?</h3>
              <p className="text-amber-800">
                I take confidentiality very seriously and am happy to sign NDAs. All client information is kept strictly
                confidential and secure.
              </p>
            </div>
            <div className="bg-amber-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-amber-900 mb-3">What are your payment terms?</h3>
              <p className="text-amber-800">
                I offer flexible payment options including hourly rates and monthly packages. Payment is typically due
                within 30 days of invoice.
              </p>
            </div>
            <div className="bg-amber-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-amber-900 mb-3">How quickly can you start?</h3>
              <p className="text-amber-800">
                Depending on my current workload, I can typically start new projects within 1-2 weeks of our initial
                consultation.
              </p>
            </div>
            <div className="bg-amber-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-amber-900 mb-3">Do you work with international clients?</h3>
              <p className="text-amber-800">
                Yes! I work with clients worldwide and am experienced in managing different time zones and communication
                preferences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-amber-100 to-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-amber-900 mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-amber-700 mb-8 max-w-2xl mx-auto">
            Don't let administrative tasks hold your business back. Let's discuss how I can help you focus on what
            matters most.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/services"
              className="bg-amber-800 text-white px-8 py-4 rounded-lg hover:bg-amber-700 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center font-semibold"
            >
              View My Services
              <ChevronRight className="ml-2" size={20} />
            </Link>
            <a
              href="mailto:ijeoma.ogbonna@email.com"
              className="border-2 border-amber-800 text-amber-800 px-8 py-4 rounded-lg hover:bg-amber-800 hover:text-white transition-all duration-300 transform hover:scale-105 inline-flex items-center font-semibold"
            >
              Email Me Directly
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Let's Work Together</h2>
            <p className="text-xl text-amber-200 mb-8">
              Ready to take your business to the next level? Let's discuss how I can help you succeed.
            </p>
            <Link
              href="/contact"
              className="bg-white text-amber-900 px-8 py-4 rounded-lg hover:bg-amber-100 transition-all duration-300 transform hover:scale-105 inline-flex items-center font-semibold"
            >
              Start Your Project
              <ChevronRight className="ml-2" size={20} />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Ijeoma Queensly Ogbonna</h3>
              <p className="text-amber-200">
                Professional Virtual Assistant dedicated to helping businesses grow and succeed.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <Link href="/" className="block text-amber-200 hover:text-white transition-colors">
                  Home
                </Link>
                <Link href="/about" className="block text-amber-200 hover:text-white transition-colors">
                  About
                </Link>
                <Link href="/services" className="block text-amber-200 hover:text-white transition-colors">
                  Services
                </Link>
                <Link href="/contact" className="block text-amber-200 hover:text-white transition-colors">
                  Contact
                </Link>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Connect With Me</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-amber-200 hover:text-white transition-colors transform hover:scale-110">
                  <Facebook size={24} />
                </a>
                <a href="#" className="text-amber-200 hover:text-white transition-colors transform hover:scale-110">
                  <Linkedin size={24} />
                </a>
                <a href="#" className="text-amber-200 hover:text-white transition-colors transform hover:scale-110">
                  <Instagram size={24} />
                </a>
                <a href="#" className="text-amber-200 hover:text-white transition-colors transform hover:scale-110">
                  <Twitter size={24} />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-amber-800 pt-8 text-center">
            <p className="text-amber-200">
              © 2024 Ijeoma Queensly Ogbonna. All rights reserved. | Empowering businesses through exceptional virtual
              assistance.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
