import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-dark-900 border-t border-primary-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent mb-4">
              NexabyteX
            </h3>
            <p className="text-gray-400 mb-4">
              Building the future of digital solutions. We specialize in Web
              Development, Full Stack Solutions, and AI-driven digital products.
            </p>
            <p className="text-gray-500 text-sm">
              Kerala, India
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Get in Touch</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link
                  href="/contact"
                  className="hover:text-primary-400 transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li className="text-sm">Kerala, India</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-primary-500/20 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} NexabyteX. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
