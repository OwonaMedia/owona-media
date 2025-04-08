import { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CookieBanner from "@/components/layout/CookieBanner";
import { LanguageProvider } from "@/context/LanguageContext";
import { LanguageSelector } from "@/components/layout/LanguageSelector";
import { AuthProvider } from "@/context/AuthContext";
import Notification from '@/components/Notification'
import { Toaster } from 'react-hot-toast'
import Script from 'next/script'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Owona Media Agency",
  description: "Ihre digitale Marketing Agentur",
};

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
        <AuthProvider>
          <LanguageProvider>
            <div className="min-h-screen flex flex-col">
              <Header />
              <div className="fixed top-24 right-8 z-50">
                <LanguageSelector />
              </div>
              <main className="flex-grow">
                {children}
              </main>
              <Footer />
              <CookieBanner />
              <Notification />
              <Toaster position="bottom-right" />
            </div>
          </LanguageProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
