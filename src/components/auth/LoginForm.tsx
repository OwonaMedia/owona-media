'use client'

import { useState } from 'react'
import { useAuth } from '@/context/AuthContext'

export default function LoginForm() {
  const [email, setEmail] = useState('')
  const [code, setCode] = useState('')
  const [step, setStep] = useState<'email' | 'code' | 'reset'>('email')
  const [isLoading, setIsLoading] = useState(false)
  const { login, resetPassword, stayLoggedIn, setStayLoggedIn } = useAuth()

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    await login(email)
    setStep('code')
    setIsLoading(false)
  }

  const handleCodeSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Hier würde die API-Anfrage stehen
    await new Promise(resolve => setTimeout(resolve, 1000)) // Simulation
    setIsLoading(false)
  }

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    await resetPassword(email)
    setIsLoading(false)
    setStep('email')
  }

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Kundenlogin</h2>
      
      {step === 'email' ? (
        <form onSubmit={handleEmailSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              E-Mail-Adresse
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="stayLoggedIn"
              checked={stayLoggedIn}
              onChange={(e) => setStayLoggedIn(e.target.checked)}
              className="mr-2"
            />
            <label htmlFor="stayLoggedIn" className="text-sm text-gray-600">
              Angemeldet bleiben
            </label>
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition-colors disabled:opacity-50"
          >
            {isLoading ? 'Wird gesendet...' : 'Login-Code anfordern'}
          </button>
          <button
            type="button"
            onClick={() => setStep('reset')}
            className="text-sm text-gray-500 hover:text-gray-700"
          >
            Passwort vergessen?
          </button>
        </form>
      ) : step === 'code' ? (
        <form onSubmit={handleCodeSubmit} className="space-y-4">
          <div>
            <label htmlFor="code" className="block text-sm font-medium text-gray-700 mb-1">
              Verifizierungscode
            </label>
            <input
              type="text"
              id="code"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Code aus E-Mail eingeben"
              required
            />
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition-colors disabled:opacity-50"
          >
            {isLoading ? 'Wird überprüft...' : 'Einloggen'}
          </button>
          <button
            type="button"
            onClick={() => setStep('email')}
            className="text-sm text-gray-500 hover:text-gray-700"
          >
            Code erneut anfordern
          </button>
        </form>
      ) : (
        <form onSubmit={handleResetPassword} className="space-y-4">
          <div>
            <label htmlFor="resetEmail" className="block text-sm font-medium text-gray-700 mb-1">
              E-Mail-Adresse
            </label>
            <input
              type="email"
              id="resetEmail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition-colors disabled:opacity-50"
          >
            {isLoading ? 'Wird gesendet...' : 'Passwort zurücksetzen'}
          </button>
          <button
            type="button"
            onClick={() => setStep('email')}
            className="text-sm text-gray-500 hover:text-gray-700"
          >
            Zurück zum Login
          </button>
        </form>
      )}
    </div>
  )
} 