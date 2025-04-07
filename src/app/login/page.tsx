import LoginForm from '@/components/auth/LoginForm'

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Willkommen zurück</h1>
          <p className="text-gray-600">
            Melden Sie sich mit Ihrer E-Mail-Adresse an, um auf Ihre gekauften Produkte zuzugreifen.
          </p>
        </div>
        
        <LoginForm />
      </div>
    </div>
  )
} 