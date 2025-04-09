import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { LanguageProvider } from '@/context/LanguageContext'
import { LanguageSelector } from '@/components/layout/LanguageSelector'
import { AuthProvider } from '@/context/AuthContext'
import Notification from '@/components/Notification'
import { Toaster } from 'react-hot-toast'
import Script from 'next/script'
import Analytics from '@/components/Analytics'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Owona Media',
  description: 'Owona Media - Ihr Partner für digitale Produkte',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <head>
        <Script
          src="https://consenttool.haendlerbund.de/app.js?apiKey=9839945bd4139c13c4c127c7f8bac39c91ce514126701d28&amp;domain=1748ed7" 
          referrerPolicy="origin"
          strategy="afterInteractive"
        />
      </head>
      <body className={`${inter.className} bg-[#F5F5F3] text-black`}>
        <LanguageProvider>
          <AuthProvider>
            <div className="min-h-screen flex flex-col">
              <Header />
              <main className="flex-grow">
                {children}
              </main>
              <Footer />
            </div>
          </AuthProvider>
        </LanguageProvider>
      </body>
    </html>
  )
}