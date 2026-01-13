'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary-900/20 via-dark-900 to-dark-900" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,121,230,0.1),transparent_50%)]" />
        
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary-400 via-primary-500 to-primary-600 bg-clip-text text-transparent"
          >
            NexabyteX
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl md:text-4xl font-semibold mb-4 text-white"
          >
            Building the Future of Digital Solutions
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12"
          >
            We are a next-generation technology startup specializing in Web
            Development, Full Stack Solutions, and AI-driven digital products.
            Transform your ideas into reality with cutting-edge technology.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              href="/services"
              className="px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-lg hover:from-primary-600 hover:to-primary-700 transition-all duration-300 shadow-lg shadow-primary-500/50 hover:shadow-primary-500/70 transform hover:scale-105"
            >
              Our Services
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 bg-transparent border-2 border-primary-500 text-primary-400 font-semibold rounded-lg hover:bg-primary-500/10 transition-all duration-300 transform hover:scale-105"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary-500/20 rounded-full blur-xl animate-pulse-slow" />
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-primary-400/20 rounded-full blur-xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-800/50">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-center mb-12 text-white"
          >
            Why Choose NexabyteX?
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Innovation First',
                description:
                  'We leverage the latest technologies and frameworks to build cutting-edge solutions.',
                icon: '🚀',
              },
              {
                title: 'Full Stack Expertise',
                description:
                  'From frontend to backend, we deliver complete end-to-end solutions.',
                icon: '💻',
              },
              {
                title: 'AI-Powered',
                description:
                  'Harness the power of AI and automation to transform your business processes.',
                icon: '🤖',
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-dark-700/50 p-6 rounded-lg border border-primary-500/20 hover:border-primary-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
