"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ChevronRight, CheckCircle, Facebook, Linkedin, Instagram, Twitter, Award, Users, Clock } from "lucide-react"

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const expertise = [
    "Administrative Support & Management",
    "Email Management & Organization",
    "Calendar Scheduling & Coordination",
    "Data Entry & Database Management",
    "Customer Service & Support",
    "Social Media Management",
    "Content Creation & Writing",
    "Project Management & Coordination",
    "Research & Analysis",
    "Digital Marketing Support",
  ]

  const skills = [
    { name: "Microsoft Office Suite", level: 95 },
    { name: "Google Workspace", level: 90 },
    { name: "Project Management", level: 88 },
    { name: "Social Media Marketing", level: 85 },
    { name: "Customer Service", level: 92 },
    { name: "Data Analysis", level: 80 },
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
              <Link href="/about" className="text-amber-600 font-medium">
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
          <div className="text-center mb-16">
            <h1
              className={`text-5xl lg:text-6xl font-bold text-amber-900 mb-6 transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              About Me
            </h1>
            <p
              className={`text-xl text-amber-700 max-w-3xl mx-auto transform transition-all duration-1000 delay-300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              Passionate virtual assistant dedicated to helping businesses thrive through exceptional support and
              service
            </p>
          </div>
        </div>
      </section>

      {/* Main About Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div
              className={`transform transition-all duration-1000 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}
            >
              <img
                src="/images/ijeoma-portrait.jpg"
                alt="Ijeoma Queensly Ogbonna - Professional Portrait"
                className="rounded-2xl shadow-2xl w-full max-w-md mx-auto"
              />
            </div>
            <div
              className={`transform transition-all duration-1000 delay-300 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}
            >
              <h2 className="text-4xl font-bold text-amber-900 mb-6">My Story</h2>
              <p className="text-lg text-amber-800 mb-6 leading-relaxed">
                Hello! I'm Ijeoma Queensly Ogbonna, a passionate and dedicated virtual assistant with over 3 years of
                experience in providing comprehensive administrative and business support services. My journey began
                when I discovered my love for helping businesses streamline their operations and achieve their goals.
              </p>
              <p className="text-lg text-amber-800 mb-6 leading-relaxed">
                I believe that every business deserves exceptional support, and I'm committed to delivering just that.
                My approach combines professionalism, attention to detail, and a genuine desire to see my clients
                succeed. Whether you're a startup founder, small business owner, or established entrepreneur, I'm here
                to help you focus on what you do best.
              </p>
              <p className="text-lg text-amber-800 mb-8 leading-relaxed">
                When I'm not helping clients achieve their business goals, I enjoy reading, learning new technologies,
                and spending time with family. I'm always looking for ways to improve my skills and provide even better
                service to my clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Expertise */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-amber-900 mb-4">Key Expertise</h2>
            <p className="text-xl text-amber-700">Areas where I excel and can add immediate value to your business</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertise.map((skill, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 p-4 bg-amber-50 rounded-lg transform hover:scale-105 transition-all duration-300"
              >
                <CheckCircle className="text-amber-600 flex-shrink-0" size={24} />
                <span className="text-amber-900 font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Progress */}
      <section className="py-16 bg-gradient-to-r from-amber-100 to-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-amber-900 mb-4">Professional Skills</h2>
            <p className="text-xl text-amber-700">My proficiency levels in key areas</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex justify-between items-center mb-3">
                  <span className="font-semibold text-amber-900">{skill.name}</span>
                  <span className="text-amber-700 font-medium">{skill.level}%</span>
                </div>
                <div className="w-full bg-amber-200 rounded-full h-3">
                  <div
                    className="bg-amber-600 h-3 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: isVisible ? `${skill.level}%` : "0%" }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-amber-900 mb-4">My Values</h2>
            <p className="text-xl text-amber-700">The principles that guide my work</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
              <Award className="mx-auto mb-4 text-amber-600" size={48} />
              <h3 className="text-xl font-bold text-amber-900 mb-3">Excellence</h3>
              <p className="text-amber-800">
                I strive for excellence in every task, ensuring the highest quality of work for all my clients.
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
              <Users className="mx-auto mb-4 text-amber-600" size={48} />
              <h3 className="text-xl font-bold text-amber-900 mb-3">Reliability</h3>
              <p className="text-amber-800">
                You can count on me to deliver consistent, dependable service that meets your expectations.
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
              <Clock className="mx-auto mb-4 text-amber-600" size={48} />
              <h3 className="text-xl font-bold text-amber-900 mb-3">Efficiency</h3>
              <p className="text-amber-800">
                I optimize processes and workflows to save you time and increase your productivity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-amber-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Work Together?</h2>
          <p className="text-xl text-amber-200 mb-8 max-w-2xl mx-auto">
            Let's discuss how my expertise can help streamline your business operations and drive growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/services"
              className="bg-white text-amber-900 px-8 py-4 rounded-lg hover:bg-amber-100 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center font-semibold"
            >
              View My Services
              <ChevronRight className="ml-2" size={20} />
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-amber-900 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center font-semibold"
            >
              Get In Touch
            </Link>
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
