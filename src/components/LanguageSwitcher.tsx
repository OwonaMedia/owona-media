import { useLanguage } from '@/context/LanguageContext'

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  return (
    <select
      value={language}
      onChange={(e) => setLanguage(e.target.value as 'de' | 'en')}
      className="bg-gray-800 text-white px-3 py-2 rounded-md"
    >
      <option value="de">DE</option>
      <option value="en">EN</option>
    </select>
  )
} 