'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Services() {
  const services = [
    {
      title: 'Web Development',
      description:
        'Custom web applications built with modern frameworks like Next.js, React, and Vue.js. We create responsive, fast, and SEO-friendly websites that deliver exceptional user experiences.',
      icon: '🌐',
      features: [
        'Responsive Design',
        'SEO Optimization',
        'Performance Optimization',
        'Modern Frameworks',
      ],
    },
    {
      title: 'Full Stack Application Development',
      description:
        'End-to-end application development from frontend to backend. We build scalable, secure, and maintainable applications using the latest technologies and best practices.',
      icon: '💻',
      features: [
        'Frontend & Backend',
        'Database Design',
        'API Development',
        'Cloud Deployment',
      ],
    },
    {
      title: 'UI/UX Design',
      description:
        'User-centered design that combines aesthetics with functionality. We create intuitive interfaces that enhance user engagement and drive conversions.',
      icon: '🎨',
      features: [
        'User Research',
        'Wireframing & Prototyping',
        'Visual Design',
        'Usability Testing',
      ],
    },
    {
      title: 'AI & Automation Solutions',
      description:
        'Leverage artificial intelligence and automation to streamline processes, reduce costs, and unlock new possibilities for your business.',
      icon: '🤖',
      features: [
        'AI Integration',
        'Process Automation',
        'Machine Learning',
        'Data Analytics',
      ],
    },
  ]

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
            Our Services
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to your business needs
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-dark-800/50 p-8 rounded-lg border border-primary-500/20 hover:border-primary-500/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h2 className="text-2xl font-bold mb-4 text-white">
                {service.title}
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center text-gray-400"
                  >
                    <span className="text-primary-400 mr-2">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center bg-gradient-to-r from-primary-500/20 to-primary-600/20 p-12 rounded-lg border border-primary-500/30"
        >
          <h2 className="text-3xl font-bold mb-4 text-white">
            Ready to Get Started?
          </h2>
          <p className="text-gray-300 mb-8 text-lg">
            Let's discuss how we can help transform your ideas into reality.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-lg hover:from-primary-600 hover:to-primary-700 transition-all duration-300 shadow-lg shadow-primary-500/50 hover:shadow-primary-500/70 transform hover:scale-105"
          >
            Contact Us
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
