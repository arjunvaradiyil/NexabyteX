'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
            About NexabyteX
          </h1>
          <p className="text-xl text-gray-400">
            Pioneering the future of digital innovation
          </p>
        </motion.div>

        {/* Mission Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 text-white">Our Mission</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            At NexabyteX, our mission is to empower businesses and individuals
            with cutting-edge digital solutions that drive growth, efficiency,
            and innovation. We believe in transforming complex challenges into
            elegant, scalable solutions that make a real impact.
          </p>
        </motion.section>

        {/* Vision Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 text-white">Our Vision</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            We envision a future where technology seamlessly integrates into
            every aspect of business and life, making processes more efficient,
            experiences more engaging, and solutions more intelligent. NexabyteX
            aims to be at the forefront of this digital transformation, leading
            the way with innovative products and services.
          </p>
        </motion.section>

        {/* Story Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 text-white">Our Story</h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            NexabyteX was born from a passion for technology and a vision to
            create solutions that matter. As a startup, we understand the
            challenges that businesses face in today's fast-paced digital
            landscape. We combine technical expertise with creative thinking to
            deliver solutions that are not just functional, but transformative.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            Based in Kerala, India, we're building a team of talented developers
            and designers who share our commitment to excellence and innovation.
            Every project we undertake is an opportunity to push boundaries and
            create something extraordinary.
          </p>
        </motion.section>

        {/* Why Choose Us Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-dark-800/50 p-8 rounded-lg border border-primary-500/20"
        >
          <h2 className="text-3xl font-bold mb-6 text-white">
            Why Choose NexabyteX?
          </h2>
          <ul className="space-y-4">
            {[
              'Expert team with years of experience in modern web technologies',
              'Agile development process that adapts to your needs',
              'Focus on quality, performance, and user experience',
              'Transparent communication and collaborative approach',
              'Cost-effective solutions without compromising on quality',
              'Commitment to staying ahead of technology trends',
            ].map((point, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
                className="flex items-start text-gray-300"
              >
                <span className="text-primary-400 mr-3 mt-1">✓</span>
                <span>{point}</span>
              </motion.li>
            ))}
          </ul>
        </motion.section>
      </div>
    </div>
  )
}
