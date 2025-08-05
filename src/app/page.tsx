'use client'

import Navigation from '@/components/Navigation'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Home() {
  const { t } = useLanguage()
  
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Navigation */}
      <Navigation />
      
      {/* Hero Section with Image Background */}
      <main id="uvod" className="relative">
        {/* Image Background */}
        <div 
          className="absolute top-0 left-0 w-full h-screen bg-cover bg-center bg-no-repeat -z-10"
          style={{
            backgroundImage: "url('/pexels-lilartsy-5832871.jpg')"
          }}
        ></div>
        
        {/* Dark Overlay */}
        <div className="absolute top-0 left-0 w-full h-screen bg-black/30 -z-5"></div>
        
        {/* Title Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-screen px-4 text-center text-white">
          <div className="max-w-4xl mx-auto mb-10 -mt-48">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-shadow-lg">
              WASTen Star Holding B.V.
            </h1>
            
            {/* Slogany/Obory */}
            <div className="flex justify-between items-center text-sm md:text-base text-gray-200 font-bold tracking-wide">
              <span>{t('waste.title')}</span>
              <span>{t('renewable.title')}</span>
              <span>{t('circular.title')}</span>
            </div>
          </div>

          {/* O nás blok - posunutý více nahoru */}
          <div className="absolute bottom-40 left-1/2 transform -translate-x-1/2 w-full max-w-5xl px-4">
            <div className="bg-black/40 backdrop-blur-md rounded-xl p-10 mx-auto">
              <div className="flex items-center">
                <div className="flex-1">
                  <h2 className="text-4xl font-extrabold mb-8 text-white text-left">{t('about.title')}</h2>
                  <p className="text-xl text-gray-200 leading-relaxed text-left">
                    {t('home.description')}
                  </p>
                </div>
                <div className="ml-8 flex items-center">
                  <a 
                    href="/o-nas"
                    className="inline-block bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-10 py-5 rounded-lg font-semibold text-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    {t('home.learn_more')}
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </main>
      
      {/* Nové sekce před dokumenty */}
      <section className="relative z-10 bg-gradient-to-br from-gray-900 via-slate-900 to-black pt-24 pb-12 px-4">
        <div className="max-w-6xl mx-auto">
          
          {/* Waste Management sekce */}
          <div className="mb-16">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold mb-6 text-white flex items-center">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                {t('waste.title')}
              </h2>
              <div className="text-gray-200 leading-relaxed space-y-4">
                <p>
                  {t('waste.description')}
                </p>
              </div>
            </div>
          </div>

          {/* Renewable Energy sekce */}
          <div className="mb-16">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold mb-6 text-white flex items-center">
                <div className="w-12 h-12 bg-yellow-600 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                  </svg>
                </div>
                {t('renewable.title')}
              </h2>
              <div className="text-gray-200 leading-relaxed space-y-4">
                <p>
                  {t('renewable.description')}
                </p>
              </div>
            </div>
          </div>

          {/* Circular Economy sekce */}
          <div className="mb-16">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold mb-6 text-white flex items-center">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                  </svg>
                </div>
                {t('circular.title')}
              </h2>
              <div className="text-gray-200 leading-relaxed space-y-4">
                <p>
                  {t('circular.description')}
                </p>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* Dokumenty ke stažení */}
      <section className="relative z-10 bg-gradient-to-br from-gray-900 via-slate-900 to-black pt-12 pb-48 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-32 text-white text-center">{t('documents.title')}</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* PDF dokument 1 - Green Book */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-10 border border-gray-200">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
                    <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">Green Bond Principles</h3>
                  <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
                    <a 
                      href="/documents/Green Bond Principles.pdf" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors duration-300"
                    >
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 616 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      {t('documents.download_presentation')}
                    </a>
                    <span className="text-sm text-gray-500 flex items-center">
                      PDF • 2.1 MB
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* PDF dokument 2 - Second Party Opinion */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-10 border border-gray-200">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
                    <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">Second Party Opinion</h3>
                  <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
                    <a 
                      href="/documents/Second Party Opinion_WASTen Star.pdf" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors duration-300"
                    >
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 616 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      {t('documents.download_brochure')}
                    </a>
                    <span className="text-sm text-gray-500 flex items-center">
                      PDF • 1.8 MB
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-16 px-4 border-t border-gray-700 overflow-hidden">
        {/* Background image pro footer */}
        <div 
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat -z-10"
          style={{
            backgroundImage: "url('/pexels-lilartsy-5832871.jpg')",
            backgroundPosition: "center bottom"
          }}
        ></div>
        
        {/* Dark overlay pro footer */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-900 via-slate-900 to-black -z-5"></div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">{t('footer.company')}</h3>
            <div className="text-gray-300 space-y-2">
              <p>{t('footer.address')}</p>
              <p>{t('footer.phone')}</p>
              <p>{t('footer.email')}</p>
            </div>
          </div>
          
          <div className="border-t border-gray-600 pt-8">
            <p className="text-gray-400">
              © 2024 WASTen Star Holding B.V. {t('footer.rights')}
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
