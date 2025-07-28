import './globals.css'
import type { Metadata } from 'next'

// If using custom fonts (optional)
import { Inter } from 'next/font/google'
import Layout from './components/Layout'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Your Name | Portfolio',
  description: 'Software Engineer Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-900 text-white`}>
        {/* Your Layout component wraps all pages */}
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  )
}