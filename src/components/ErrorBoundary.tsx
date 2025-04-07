'use client'

import { Component, ErrorInfo, ReactNode } from 'react'
import { useLanguage } from '@/context/LanguageContext'

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
  error: Error | null
}

export default class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null
  }

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo)
    // Hier könnte man den Fehler an einen Monitoring-Service senden
  }

  public render() {
    if (this.state.hasError) {
      return <ErrorFallback error={this.state.error} />
    }

    return this.props.children
  }
}

function ErrorFallback({ error }: { error: Error | null }) {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-amber-50 p-4">
      <h1 className="text-6xl font-bold text-amber-900 mb-4">500</h1>
      <h2 className="text-2xl text-amber-800 mb-4">{t('error_occurred')}</h2>
      <p className="text-amber-700 mb-8 text-center max-w-md">
        {t('error_description')}
      </p>
      <button
        onClick={() => window.location.reload()}
        className="bg-amber-600 text-white px-6 py-3 rounded-md hover:bg-amber-700 transition-colors"
      >
        {t('reload_page')}
      </button>
      {process.env.NODE_ENV === 'development' && error && (
        <pre className="mt-8 p-4 bg-amber-100 rounded-md text-amber-800 overflow-auto max-w-full">
          {error.message}
        </pre>
      )}
    </div>
  )
} 