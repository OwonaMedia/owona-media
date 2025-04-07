import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-amber-50 p-4">
      <h1 className="text-6xl font-bold text-amber-900 mb-4">404</h1>
      <h2 className="text-2xl text-amber-800 mb-8">Seite nicht gefunden</h2>
      <p className="text-amber-700 mb-8 text-center max-w-md">
        Die von Ihnen gesuchte Seite konnte leider nicht gefunden werden.
      </p>
      <Link 
        href="/"
        className="bg-amber-600 text-white px-6 py-3 rounded-md hover:bg-amber-700 transition-colors"
      >
        Zurück zur Startseite
      </Link>
    </div>
  )
} 