import './globals.css'
import type { Metadata } from 'next'

// If using custom fonts (optional)
import { Inter } from 'next/font/google'
import Layout from './components/Layout'
import { SiteHeader } from './components/site-header'
import { ThemeProvider } from './components/theme-provider'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Marcelo Souza | Portfolio',
  description: 'Engenheiro de Software',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-gray-900 text-white`}>
        {/* Your Layout component wraps all pages */}
        <ThemeProvider
          attribute="class" // <-- Isso adiciona a classe 'dark' ou 'light' ao elemento <html>
          defaultTheme="system" // <-- Tema padrão ('system', 'dark', 'light')
          enableSystem // <-- Permite que o tema do sistema seja usado
          disableTransitionOnChange // <-- Opcional: desabilita transições ao trocar tema
        >
        <Layout>
          
          {children}
        </Layout>
       </ThemeProvider>  
      </body>
    </html>
  )
}