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
            </div>
          </LanguageProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
