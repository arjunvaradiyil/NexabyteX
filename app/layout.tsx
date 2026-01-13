import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'NexabyteX - Building the Future of Digital Solutions',
  description: 'Next-generation technology startup specializing in Web Development, Full Stack Solutions, and AI-driven digital products.',
  keywords: 'web development, full stack, AI solutions, digital products, tech startup',
  authors: [{ name: 'NexabyteX' }],
  openGraph: {
    title: 'NexabyteX - Building the Future of Digital Solutions',
    description: 'Next-generation technology startup specializing in Web Development, Full Stack Solutions, and AI-driven digital products.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
