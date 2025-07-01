"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ChevronRight, Star, Users, Clock, Award, Facebook, Linkedin, Instagram, Twitter } from "lucide-react"

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      content:
        "Ijeoma transformed our administrative processes completely. Her attention to detail and proactive approach saved us countless hours. Highly recommended!",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Marketing Director",
      content:
        "Working with Ijeoma has been a game-changer for our business. She handles everything with professionalism and delivers exceptional results every time.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Small Business Owner",
      content:
        "Ijeoma's virtual assistance services are top-notch. She's reliable, efficient, and always goes above and beyond. I couldn't run my business without her!",
      rating: 5,
    },
    {
      name: "David Thompson",
      role: "Consultant",
      content:
        "Professional, reliable, and incredibly skilled. Ijeoma has been instrumental in helping me manage my growing client base. Five stars!",
      rating: 5,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md shadow-sm z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-amber-900">Ijeoma Queensly Ogbonna</div>
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
              <Link href="/contact" className="text-amber-800 hover:text-amber-600 transition-colors font-medium">
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
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div
              className={`transform transition-all duration-1000 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}
            >
              <h1 className="text-5xl lg:text-6xl font-bold text-amber-900 mb-6 leading-tight">
                Your Trusted
                <span className="block text-amber-700">Virtual Assistant</span>
              </h1>
              <p className="text-xl text-amber-800 mb-8 leading-relaxed">
                Empowering businesses with professional virtual assistance services. Let me handle the details while you
                focus on growing your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/services"
                  className="bg-amber-800 text-white px-8 py-4 rounded-lg hover:bg-amber-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center group"
                >
                  View Services
                  <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-amber-800 text-amber-800 px-8 py-4 rounded-lg hover:bg-amber-800 hover:text-white transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                >
                  Get In Touch
                </Link>
              </div>
            </div>
            <div
              className={`transform transition-all duration-1000 delay-300 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}
            >
              <div className="relative">
                <img
                  src="/images/ijeoma-portrait.jpg"
                  alt="Ijeoma Queensly Ogbonna - Professional Virtual Assistant"
                  className="rounded-2xl shadow-2xl w-full max-w-md mx-auto"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
                  <div className="flex items-center space-x-2">
                    <Star className="text-yellow-500 fill-current" size={20} />
                    <span className="font-bold text-amber-900">5.0 Rating</span>
                  </div>
                  <p className="text-amber-700 text-sm">50+ Happy Clients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-amber-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="transform hover:scale-105 transition-transform duration-300">
              <Users size={48} className="mx-auto mb-4 text-amber-300" />
              <div className="text-3xl font-bold mb-2">50+</div>
              <div className="text-amber-200">Happy Clients</div>
            </div>
            <div className="transform hover:scale-105 transition-transform duration-300">
              <Clock size={48} className="mx-auto mb-4 text-amber-300" />
              <div className="text-3xl font-bold mb-2">1000+</div>
              <div className="text-amber-200">Hours Saved</div>
            </div>
            <div className="transform hover:scale-105 transition-transform duration-300">
              <Award size={48} className="mx-auto mb-4 text-amber-300" />
              <div className="text-3xl font-bold mb-2">3+</div>
              <div className="text-amber-200">Years Experience</div>
            </div>
            <div className="transform hover:scale-105 transition-transform duration-300">
              <Star size={48} className="mx-auto mb-4 text-amber-300" />
              <div className="text-3xl font-bold mb-2">5.0</div>
              <div className="text-amber-200">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/images/ijeoma-portrait.jpg"
                alt="About Ijeoma Queensly Ogbonna"
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-amber-900 mb-6">About Me</h2>
              <p className="text-lg text-amber-800 mb-6 leading-relaxed">
                Hi, I'm Ijeoma Queensly Ogbonna, a dedicated virtual assistant with over 3 years of experience helping
                businesses streamline their operations and achieve their goals. I specialize in administrative support,
                project management, and digital marketing assistance.
              </p>
              <p className="text-lg text-amber-800 mb-8 leading-relaxed">
                My mission is to provide exceptional virtual assistance services that allow business owners to focus on
                what they do best while I handle the rest.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center text-amber-800 hover:text-amber-600 font-semibold group"
              >
                Learn More About Me
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gradient-to-r from-amber-100 to-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-amber-900 mb-4">What Clients Say</h2>
            <p className="text-xl text-amber-700">Don't just take my word for it</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-500 fill-current" size={20} />
                  ))}
                </div>
                <p className="text-amber-800 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-amber-900">{testimonial.name}</div>
                  <div className="text-amber-700 text-sm">{testimonial.role}</div>
                </div>
              </div>
            ))}
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
                <a
                  href="https://web.facebook.com/ijeoma.ogbonna.7334"
                  className="text-amber-200 hover:text-white transition-colors transform hover:scale-110"
                >
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
