'use client'

import Navigation from '@/components/Navigation'
import { useLanguage } from '@/contexts/LanguageContext'

export default function AboutPage() {
  const { t } = useLanguage()
  
  return (
    <div className="relative min-h-screen">
      {/* Navigation */}
      <Navigation />
      
      {/* Hero Section s obrázkem na pozadí */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        {/* Obrázek na pozadí - pouze hero sekce */}
        <div 
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat -z-10"
          style={{
            backgroundImage: "url('/pexels-lilartsy-5832871.jpg')",
            backgroundPosition: "center top"
          }}
        ></div>
        
        {/* Tmavé překrytí - prodloužené až na konec obrázku */}
        <div className="absolute -top-16 left-0 w-full h-full bg-black/30 -z-5" style={{height: 'calc(100% + 4rem)'}}></div>
        
        <div className="max-w-6xl mx-auto px-4 text-center relative z-10 pt-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 text-white drop-shadow-lg">
            {t('about.title')}
          </h1>
        </div>
      </section>

      {/* Main Content - stejné pozadí jako dokumenty */}
      <section className="relative py-20 overflow-hidden">
        {/* Pozadí stejné jako u dokumentů */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-900 via-slate-900 to-black -z-10"></div>
        
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="prose prose-lg max-w-none">
            <div className="text-lg text-gray-200 leading-relaxed space-y-6">
              
              <p className="mb-6">
                {t('about.company_description')}
              </p>
              
              <p className="mb-6">
                {t('about.company_goal')}
              </p>
              
              <p className="mb-6">
                {t('about.support_approach')}
              </p>
              
              <p className="mb-6">
                {t('about.green_bonds')}
              </p>
              
              <p className="mb-6">
                {t('about.spo_certificate')}
              </p>
              
              <p className="mb-6">
                {t('about.czech_expansion')}
              </p>
              
              <p className="mb-6">
                {t('about.cluster_collaboration')}
              </p>
              
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
