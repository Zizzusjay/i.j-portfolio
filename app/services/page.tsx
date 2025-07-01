"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import {
  ChevronRight,
  CheckCircle,
  Facebook,
  Linkedin,
  Instagram,
  Twitter,
  Mail,
  Calendar,
  Users,
  BarChart3,
  MessageSquare,
  FileText,
  Search,
  Zap,
} from "lucide-react"

export default function ServicesPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const services = [
    {
      icon: Mail,
      title: "Administrative Support",
      description: "Comprehensive administrative assistance to keep your business running smoothly.",
      features: [
        "Email management and organization",
        "Document creation and formatting",
        "Data entry and database management",
        "File organization and maintenance",
        "Travel planning and coordination",
      ],
      price: "Starting at $25/hour",
    },
    {
      icon: Calendar,
      title: "Calendar & Scheduling",
      description: "Professional calendar management and appointment scheduling services.",
      features: [
        "Calendar coordination and management",
        "Appointment scheduling",
        "Meeting coordination",
        "Reminder systems",
        "Time zone management",
      ],
      price: "Starting at $20/hour",
    },
    {
      icon: Users,
      title: "Customer Service",
      description: "Exceptional customer support to enhance your client relationships.",
      features: [
        "Live chat support",
        "Email customer service",
        "Order processing",
        "Customer inquiry handling",
        "Follow-up communications",
      ],
      price: "Starting at $22/hour",
    },
    {
      icon: BarChart3,
      title: "Social Media Management",
      description: "Strategic social media management to grow your online presence.",
      features: [
        "Content creation and scheduling",
        "Social media strategy development",
        "Community engagement",
        "Analytics and reporting",
        "Brand voice consistency",
      ],
      price: "Starting at $30/hour",
    },
    {
      icon: MessageSquare,
      title: "Content Creation",
      description: "High-quality content creation for your marketing and communication needs.",
      features: [
        "Blog post writing",
        "Social media content",
        "Email newsletters",
        "Website copy",
        "Marketing materials",
      ],
      price: "Starting at $35/hour",
    },
    {
      icon: FileText,
      title: "Project Management",
      description: "Efficient project coordination to ensure timely completion of your initiatives.",
      features: [
        "Project planning and coordination",
        "Task management and tracking",
        "Team communication facilitation",
        "Progress reporting",
        "Deadline management",
      ],
      price: "Starting at $40/hour",
    },
    {
      icon: Search,
      title: "Research & Analysis",
      description: "Thorough research and analysis services to support your business decisions.",
      features: [
        "Market research",
        "Competitor analysis",
        "Lead generation",
        "Data collection and analysis",
        "Report preparation",
      ],
      price: "Starting at $28/hour",
    },
    {
      icon: Zap,
      title: "Digital Marketing Support",
      description: "Comprehensive digital marketing assistance to boost your online visibility.",
      features: [
        "SEO optimization support",
        "Email marketing campaigns",
        "Online advertising assistance",
        "Analytics monitoring",
        "Marketing automation setup",
      ],
      price: "Starting at $32/hour",
    },
  ]

  const packages = [
    {
      name: "Starter Package",
      price: "$500/month",
      hours: "20 hours",
      description: "Perfect for small businesses getting started",
      features: [
        "Email management",
        "Basic administrative tasks",
        "Calendar scheduling",
        "Customer service support",
        "Weekly progress reports",
      ],
      popular: false,
    },
    {
      name: "Professional Package",
      price: "$1,200/month",
      hours: "40 hours",
      description: "Ideal for growing businesses",
      features: [
        "All Starter features",
        "Social media management",
        "Content creation",
        "Project coordination",
        "Research and analysis",
        "Bi-weekly strategy calls",
      ],
      popular: true,
    },
    {
      name: "Enterprise Package",
      price: "$2,000/month",
      hours: "80 hours",
      description: "Comprehensive support for established businesses",
      features: [
        "All Professional features",
        "Digital marketing support",
        "Advanced project management",
        "Team coordination",
        "Custom reporting",
        "Weekly strategy calls",
        "Priority support",
      ],
      popular: false,
    },
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
              <Link href="/services" className="text-amber-600 font-medium">
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
        <div className="max-w-7xl mx-auto text-center">
          <h1
            className={`text-5xl lg:text-6xl font-bold text-amber-900 mb-6 transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            My Services
          </h1>
          <p
            className={`text-xl text-amber-700 max-w-3xl mx-auto mb-8 transform transition-all duration-1000 delay-300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            Comprehensive virtual assistance services designed to streamline your business operations and drive growth
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
              >
                <service.icon className="text-amber-600 mb-4" size={48} />
                <h3 className="text-xl font-bold text-amber-900 mb-3">{service.title}</h3>
                <p className="text-amber-800 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-2">
                      <CheckCircle className="text-amber-600 flex-shrink-0 mt-0.5" size={16} />
                      <span className="text-amber-800 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="text-amber-900 font-bold text-lg">{service.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Packages */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-amber-900 mb-4">Service Packages</h2>
            <p className="text-xl text-amber-700">Choose the perfect package for your business needs</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`relative p-8 rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-300 ${
                  pkg.popular
                    ? "bg-amber-900 text-white ring-4 ring-amber-300"
                    : "bg-white text-amber-900 border-2 border-amber-200"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-amber-300 text-amber-900 px-4 py-2 rounded-full text-sm font-bold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                  <div className="text-4xl font-bold mb-2">{pkg.price}</div>
                  <div className={`text-lg ${pkg.popular ? "text-amber-200" : "text-amber-700"}`}>
                    {pkg.hours} per month
                  </div>
                  <p className={`mt-4 ${pkg.popular ? "text-amber-200" : "text-amber-700"}`}>{pkg.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <CheckCircle
                        className={`flex-shrink-0 mt-0.5 ${pkg.popular ? "text-amber-300" : "text-amber-600"}`}
                        size={20}
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`block w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    pkg.popular
                      ? "bg-white text-amber-900 hover:bg-amber-100"
                      : "bg-amber-900 text-white hover:bg-amber-800"
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gradient-to-r from-amber-100 to-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-amber-900 mb-4">How It Works</h2>
            <p className="text-xl text-amber-700">Simple steps to get started with my services</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-amber-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold text-amber-900 mb-3">Initial Consultation</h3>
              <p className="text-amber-800">We discuss your needs and determine the best service approach</p>
            </div>
            <div className="text-center">
              <div className="bg-amber-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold text-amber-900 mb-3">Custom Proposal</h3>
              <p className="text-amber-800">I create a tailored proposal based on your specific requirements</p>
            </div>
            <div className="text-center">
              <div className="bg-amber-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold text-amber-900 mb-3">Project Kickoff</h3>
              <p className="text-amber-800">We establish workflows, communication channels, and project timelines</p>
            </div>
            <div className="text-center">
              <div className="bg-amber-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-bold text-amber-900 mb-3">Ongoing Support</h3>
              <p className="text-amber-800">Regular updates, reports, and continuous optimization of services</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-amber-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-amber-200 mb-8 max-w-2xl mx-auto">
            Let's discuss your needs and find the perfect service solution for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-amber-900 px-8 py-4 rounded-lg hover:bg-amber-100 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center font-semibold"
            >
              Get Free Consultation
              <ChevronRight className="ml-2" size={20} />
            </Link>
            <Link
              href="/about"
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-amber-900 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center font-semibold"
            >
              Learn More About Me
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
