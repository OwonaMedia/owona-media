'use client'

import { useState, useEffect } from 'react'
import { Search, X } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import { useRouter } from 'next/navigation'

export default function SearchBar() {
  const [query, setQuery] = useState('')
  const [suggestions, setSuggestions] = useState<string[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const { t } = useLanguage()
  const router = useRouter()

  // Beispiel für Suchvorschläge - sollte durch eine API ersetzt werden
  const mockSuggestions = [
    'Social Media Marketing',
    'Webdesign',
    'Content Marketing',
    'SEO',
    'E-Mail Marketing'
  ]

  useEffect(() => {
    if (query.length > 2) {
      const filtered = mockSuggestions.filter(suggestion =>
        suggestion.toLowerCase().includes(query.toLowerCase())
      )
      setSuggestions(filtered)
      setIsOpen(true)
    } else {
      setSuggestions([])
      setIsOpen(false)
    }
  }, [query])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query)}`)
      setIsOpen(false)
    }
  }

  return (
    <div className="relative">
      <form onSubmit={handleSearch} className="flex items-center">
        <div className="relative">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t('search_placeholder')}
            className="w-64 px-4 py-2 rounded-md border border-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery('')}
              className="absolute right-10 top-2 text-amber-400 hover:text-amber-600"
            >
              <X size={20} />
            </button>
          )}
        </div>
        <button
          type="submit"
          className="ml-2 p-2 bg-amber-600 text-white rounded-md hover:bg-amber-700"
        >
          <Search size={20} />
        </button>
      </form>

      {isOpen && suggestions.length > 0 && (
        <div className="absolute top-full left-0 w-64 mt-1 bg-white border border-amber-200 rounded-md shadow-lg z-50">
          <ul className="py-1">
            {suggestions.map((suggestion, index) => (
              <li
                key={index}
                className="px-4 py-2 hover:bg-amber-50 cursor-pointer"
                onClick={() => {
                  setQuery(suggestion)
                  setIsOpen(false)
                }}
              >
                {suggestion}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
} 