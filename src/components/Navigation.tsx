'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import LanguageSwitcher from './LanguageSwitcher'

export default function Navigation() {
  const { t } = useLanguage()
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/30 dark:bg-black/30 backdrop-blur-md border-b border-gray-200/20 dark:border-gray-800/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="text-white text-lg font-bold drop-shadow-lg">
              WASTen Star Holding B.V.
            </div>
          </div>
          
          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-baseline space-x-6">
              <a href="/" className="text-white hover:text-blue-600 px-3 py-2 text-sm font-bold drop-shadow-md relative group transition-colors duration-300">
                {t('nav.home')}
                <span className="absolute bottom-0 left-0 w-0 h-1 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="/o-nas" className="text-white/90 hover:text-blue-600 px-3 py-2 text-sm font-bold drop-shadow-md relative group transition-colors duration-300">
                {t('nav.about')}
                <span className="absolute bottom-0 left-0 w-0 h-1 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
              </a>
              <div className="relative group">
                <a href="/sluzby" className="text-white/90 hover:text-blue-600 px-3 py-2 text-sm font-bold drop-shadow-md relative transition-colors duration-300 flex items-center">
                  {t('nav.services')}
                  <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                  <span className="absolute bottom-0 left-0 w-0 h-1 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                </a>
                
                {/* Dropdown Menu */}
                <div className="absolute top-full left-0 mt-1 w-80 bg-white/30 dark:bg-black/30 backdrop-blur-md rounded-lg shadow-xl border border-gray-200/20 dark:border-gray-800/20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="py-2">
                    <a href="/sluzby#financovani" className="block px-4 py-3 text-sm text-white hover:text-blue-600 transition-colors duration-200 font-bold drop-shadow-md">
                      {t('services.financing')}
                    </a>
                    <a href="/sluzby#cirkularne-firmy" className="block px-4 py-3 text-sm text-white hover:text-blue-600 transition-colors duration-200 font-bold drop-shadow-md">
                      {t('services.circular_companies')}
                    </a>
                    <a href="/sluzby#cirkularne-mesta" className="block px-4 py-3 text-sm text-white hover:text-blue-600 transition-colors duration-200 font-bold drop-shadow-md">
                      {t('services.circular_cities')}
                    </a>
                    <a href="/sluzby#analyzy" className="block px-4 py-3 text-sm text-white hover:text-blue-600 transition-colors duration-200 font-bold drop-shadow-md">
                      {t('services.analysis')}
                    </a>
                    <a href="/sluzby#technicke-reseni" className="block px-4 py-3 text-sm text-white hover:text-blue-600 transition-colors duration-200 font-bold drop-shadow-md">
                      {t('services.technical')}
                    </a>
                  </div>
                </div>
              </div>
              <a href="/kontakty" className="text-white/90 hover:text-blue-600 px-3 py-2 text-sm font-bold drop-shadow-md relative group transition-colors duration-300">
                {t('nav.contact')}
                <span className="absolute bottom-0 left-0 w-0 h-1 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
              </a>
            </div>
            
            {/* Language Switcher */}
            <LanguageSwitcher />
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-white hover:text-blue-300 drop-shadow-md">
              <span className="sr-only">{t('nav.open_menu')}</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
