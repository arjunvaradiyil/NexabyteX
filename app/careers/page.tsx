'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Careers() {
  const jobOpenings = [
    {
      title: 'Full Stack Developer',
      vacancies: 2,
      location: 'Kerala, India / Remote',
      description:
        'We are looking for talented Full Stack Developers to join our growing team. You will work on exciting projects using modern technologies and contribute to building innovative digital solutions.',
      requirements: [
        'Strong experience with React, Next.js, or similar frameworks',
        'Proficiency in Node.js, Express, or similar backend technologies',
        'Experience with databases (PostgreSQL, MongoDB, etc.)',
        'Knowledge of RESTful APIs and GraphQL',
        'Familiarity with Git and version control',
        'Strong problem-solving skills and attention to detail',
        'Good communication skills and team collaboration',
      ],
      benefits: [
        'Competitive salary',
        'Flexible working hours',
        'Remote work options',
        'Learning and development opportunities',
        'Collaborative and innovative work environment',
      ],
    },
  ]

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
            Careers at NexabyteX
          </h1>
          <p className="text-xl text-gray-400">
            Join us in building the future of digital solutions
          </p>
        </motion.div>

        {/* Job Openings */}
        <div className="space-y-8">
          {jobOpenings.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-dark-800/50 p-8 rounded-lg border border-primary-500/20"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                  <h2 className="text-3xl font-bold mb-2 text-white">
                    {job.title}
                  </h2>
                  <p className="text-primary-400 font-semibold">
                    {job.vacancies} {job.vacancies === 1 ? 'Vacancy' : 'Vacancies'}
                  </p>
                </div>
                <div className="mt-4 md:mt-0">
                  <span className="inline-block px-4 py-2 bg-primary-500/20 text-primary-400 rounded-lg text-sm font-medium">
                    {job.location}
                  </span>
                </div>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">
                {job.description}
              </p>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 text-white">
                  Requirements:
                </h3>
                <ul className="space-y-2">
                  {job.requirements.map((req, reqIndex) => (
                    <li
                      key={reqIndex}
                      className="flex items-start text-gray-300"
                    >
                      <span className="text-primary-400 mr-3 mt-1">•</span>
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-3 text-white">
                  Benefits:
                </h3>
                <ul className="space-y-2">
                  {job.benefits.map((benefit, benefitIndex) => (
                    <li
                      key={benefitIndex}
                      className="flex items-start text-gray-300"
                    >
                      <span className="text-primary-400 mr-3 mt-1">✓</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href="/contact"
                className="inline-block w-full md:w-auto px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-lg hover:from-primary-600 hover:to-primary-700 transition-all duration-300 shadow-lg shadow-primary-500/50 hover:shadow-primary-500/70 transform hover:scale-105 text-center"
              >
                Apply Now
              </Link>
            </motion.div>
          ))}
        </div>

        {/* General Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 bg-gradient-to-r from-primary-500/20 to-primary-600/20 p-8 rounded-lg border border-primary-500/30 text-center"
        >
          <h2 className="text-2xl font-bold mb-4 text-white">
            Don't see a role that fits?
          </h2>
          <p className="text-gray-300 mb-6">
            We're always looking for talented individuals to join our team. If
            you're passionate about technology and innovation, we'd love to hear
            from you.
          </p>
          <Link
            href="/contact"
            className="inline-block px-6 py-3 bg-transparent border-2 border-primary-500 text-primary-400 font-semibold rounded-lg hover:bg-primary-500/10 transition-all duration-300"
          >
            Get in Touch
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
