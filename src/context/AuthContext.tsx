'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { useRouter } from 'next/navigation'

interface User {
  email: string
  name?: string
  lastLogin?: string
}

interface AuthContextType {
  user: User | null
  isAuthenticated: boolean
  login: (email: string) => Promise<void>
  logout: () => void
  resetPassword: (email: string) => Promise<void>
  stayLoggedIn: boolean
  setStayLoggedIn: (value: boolean) => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [stayLoggedIn, setStayLoggedIn] = useState(false)
  const router = useRouter()

  useEffect(() => {
    // Prüfe gespeicherte Session beim Start
    if (typeof window !== 'undefined') {
      try {
        const storedUser = localStorage.getItem('user')
        const storedStayLoggedIn = localStorage.getItem('stayLoggedIn')
        
        if (storedUser && storedStayLoggedIn === 'true') {
          setUser(JSON.parse(storedUser))
          setIsAuthenticated(true)
        }
      } catch (error) {
        console.error('Fehler beim Laden der Session:', error)
        // Session zurücksetzen bei Fehlern
        localStorage.removeItem('user')
        localStorage.removeItem('stayLoggedIn')
      }
    }
  }, [])

  const login = async (email: string) => {
    try {
      // Hier würde die API-Anfrage stehen
      const newUser = { email, lastLogin: new Date().toISOString() }
      setUser(newUser)
      setIsAuthenticated(true)
      
      if (stayLoggedIn && typeof window !== 'undefined') {
        localStorage.setItem('user', JSON.stringify(newUser))
        localStorage.setItem('stayLoggedIn', 'true')
      }
    } catch (error) {
      console.error('Fehler beim Login:', error)
      throw new Error('Login fehlgeschlagen')
    }
  }

  const logout = () => {
    setUser(null)
    setIsAuthenticated(false)
    localStorage.removeItem('user')
    localStorage.removeItem('stayLoggedIn')
    router.push('/login')
  }

  const resetPassword = async (email: string) => {
    // Hier würde die API-Anfrage stehen
    console.log('Password reset requested for:', email)
  }

  return (
    <AuthContext.Provider value={{
      user,
      isAuthenticated,
      login,
      logout,
      resetPassword,
      stayLoggedIn,
      setStayLoggedIn
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
} 