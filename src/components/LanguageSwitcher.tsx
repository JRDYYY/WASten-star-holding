'use client'

import { useLanguage } from '@/contexts/LanguageContext'

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex items-center space-x-1 bg-white/20 backdrop-blur-sm rounded-lg p-1">
      <button
        onClick={() => setLanguage('cs')}
        className={`px-3 py-1 text-xs font-bold rounded transition-all duration-200 ${
          language === 'cs'
            ? 'bg-blue-600 text-white shadow-md'
            : 'text-white/80 hover:text-white hover:bg-white/10'
        }`}
      >
        CZ
      </button>
      <button
        onClick={() => setLanguage('en')}
        className={`px-3 py-1 text-xs font-bold rounded transition-all duration-200 ${
          language === 'en'
            ? 'bg-blue-600 text-white shadow-md'
            : 'text-white/80 hover:text-white hover:bg-white/10'
        }`}
      >
        EN
      </button>
    </div>
  )
}
