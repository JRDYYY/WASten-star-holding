'use client'

import Navigation from '@/components/Navigation'
import { useLanguage } from '@/contexts/LanguageContext'

export default function ServicesPage() {
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
            {t('services.title')}
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="relative py-20 overflow-hidden">
        {/* Pozadí stejné jako u dokumentů */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-900 via-slate-900 to-black -z-10"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          
          {/* Financování projektů */}
          <div id="financovani" className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">{t('services.financing.title')}</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-200 mb-6 leading-relaxed">
                {t('services.financing.description1')}
              </p>
              
              <p className="text-lg text-gray-200 mb-6 leading-relaxed">
                {t('services.financing.description2')}
              </p>
              
              <p className="text-lg text-gray-200 mb-4 leading-relaxed">
                {t('services.financing.focus_areas')}
              </p>
              
              <ul className="text-lg text-gray-200 mb-6 leading-relaxed list-disc list-inside space-y-2">
                <li>{t('services.financing.area1')}</li>
                <li>{t('services.financing.area2')}</li>
                <li>{t('services.financing.area3')}</li>
                <li>{t('services.financing.area4')}</li>
              </ul>
              
              <p className="text-lg text-gray-200 mb-6 leading-relaxed">
                {t('services.financing.certificate')}
              </p>
            </div>
          </div>

          {/* Oddělovací čára */}
          <div className="border-t-2 border-gray-500 mb-16"></div>

          {/* Cirkulární řešení pro firmy */}
          <div id="cirkularne-firmy" className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">{t('services.circular_companies.title')}</h2>
            <div className="prose prose-lg max-w-none">
              
              <h3 className="text-xl font-bold text-white mt-8 mb-4">{t('services.circular_companies.circular_audit.title')}</h3>
              <p className="text-lg text-gray-200 mb-6 leading-relaxed">
                {t('services.circular_companies.circular_audit.description1')}
              </p>
              
              <p className="text-lg text-gray-200 mb-4 font-semibold">
                {t('services.circular_companies.circular_audit.benefits_title')}
              </p>
              
              <ul className="text-lg text-gray-200 mb-6 leading-relaxed list-disc list-inside space-y-2">
                <li>{t('services.circular_companies.circular_audit.benefit1')}</li>
                <li>{t('services.circular_companies.circular_audit.benefit2')}</li>
                <li>{t('services.circular_companies.circular_audit.benefit3')}</li>
                <li>{t('services.circular_companies.circular_audit.benefit4')}</li>
                <li>{t('services.circular_companies.circular_audit.benefit5')}</li>
              </ul>
              
              <h4 className="text-lg font-bold text-white mt-6 mb-3">{t('services.circular_companies.circular_audit.support_title')}</h4>
              <p className="text-lg text-gray-200 mb-4 leading-relaxed">
                {t('services.circular_companies.circular_audit.support_description')}
              </p>
              
              <ul className="text-lg text-gray-200 mb-4 leading-relaxed list-disc list-inside space-y-1">
                <li>{t('services.circular_companies.circular_audit.support_rate')}</li>
                <li>{t('services.circular_companies.circular_audit.support_max')}</li>
                <li>{t('services.circular_companies.circular_audit.support_deadline')}</li>
              </ul>
              
              <p className="text-lg text-gray-200 mb-6 leading-relaxed">
                {t('services.circular_companies.circular_audit.support_help')}
              </p>
              
              <h3 className="text-xl font-bold text-white mt-8 mb-4">{t('services.circular_companies.esg_sustainability.title')}</h3>
              <p className="text-lg text-gray-200 mb-6 leading-relaxed">
                {t('services.circular_companies.esg_sustainability.description1')}
              </p>
              
              <p className="text-lg text-gray-200 mb-4 font-semibold">
                {t('services.circular_companies.esg_sustainability.services_title')}
              </p>
              
              <ul className="text-lg text-gray-200 mb-6 leading-relaxed list-disc list-inside space-y-1">
                <li>{t('services.circular_companies.esg_sustainability.service1')}</li>
                <li>{t('services.circular_companies.esg_sustainability.service2')}</li>
                <li>{t('services.circular_companies.esg_sustainability.service3')}</li>
              </ul>
              
              <p className="text-lg text-gray-200 mb-4 font-semibold">
                {t('services.circular_companies.esg_sustainability.benefits_title')}
              </p>
              
              <ul className="text-lg text-gray-200 mb-8 leading-relaxed list-disc list-inside space-y-1">
                <li>{t('services.circular_companies.esg_sustainability.benefit1')}</li>
                <li>{t('services.circular_companies.esg_sustainability.benefit2')}</li>
                <li>{t('services.circular_companies.esg_sustainability.benefit3')}</li>
                <li>{t('services.circular_companies.esg_sustainability.benefit4')}</li>
              </ul>
              
              <h3 className="text-xl font-bold text-white mt-8 mb-4">{t('services.circular_companies.material_scan.title')}</h3>
              <p className="text-lg text-gray-200 mb-6 leading-relaxed">
                {t('services.circular_companies.material_scan.description1')}
              </p>
              
              <p className="text-lg text-gray-200 mb-8 leading-relaxed">
                {t('services.circular_companies.material_scan.description2')}
              </p>
              
              <h3 className="text-xl font-bold text-white mt-8 mb-4">{t('services.circular_companies.technical_solution.title')}</h3>
              <p className="text-lg text-gray-200 mb-8 leading-relaxed">
                {t('services.circular_companies.technical_solution.description')}
              </p>
              
              <h3 className="text-xl font-bold text-white mt-8 mb-4">{t('services.circular_companies.business_model.title')}</h3>
              <p className="text-lg text-gray-200 mb-6 leading-relaxed">
                {t('services.circular_companies.business_model.description')}
              </p>
            </div>
          </div>

          {/* Oddělovací čára */}
          <div className="border-t-2 border-gray-500 mb-16"></div>

          {/* Cirkulární řešení pro města a obce */}
          <div id="cirkularne-mesta" className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">{t('services.circular_cities.title')}</h2>
            <div className="prose prose-lg max-w-none">
              
              <h3 className="text-xl font-bold text-white mt-8 mb-4">{t('services.circular_cities.waste_analysis.title')}</h3>
              <p className="text-lg text-gray-200 mb-8 leading-relaxed">
                {t('services.circular_cities.waste_analysis.description')}
              </p>
              
              <h3 className="text-xl font-bold text-white mt-8 mb-4">{t('services.circular_cities.optimization.title')}</h3>
              <p className="text-lg text-gray-200 mb-8 leading-relaxed">
                {t('services.circular_cities.optimization.description')}
              </p>
              
              <h3 className="text-xl font-bold text-white mt-8 mb-4">{t('services.circular_cities.technical_solution.title')}</h3>
              <p className="text-lg text-gray-200 mb-8 leading-relaxed">
                {t('services.circular_cities.technical_solution.description')}
              </p>
              
              <h3 className="text-xl font-bold text-white mt-8 mb-4">{t('services.circular_cities.circular_scan.title')}</h3>
              <p className="text-lg text-gray-200 mb-8 leading-relaxed">
                {t('services.circular_cities.circular_scan.description')}
              </p>
              
              <h3 className="text-xl font-bold text-white mt-8 mb-4">{t('services.circular_cities.financing.title')}</h3>
            </div>
          </div>

          {/* Oddělovací čára */}
          <div className="border-t-2 border-gray-500 mb-16"></div>

          {/* Strategické analýzy */}
          <div id="analyzy" className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">{t('services.analysis.title')}</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-200 mb-6 leading-relaxed">
                {t('services.analysis.description1')}
              </p>
              
              <p className="text-lg text-gray-200 mb-4 font-semibold">
                {t('services.analysis.examples_title')}
              </p>
              
              <ul className="text-lg text-gray-200 mb-6 leading-relaxed list-disc list-inside space-y-2">
                <li>{t('services.analysis.example1')}</li>
                <li>{t('services.analysis.example2')}</li>
                <li>{t('services.analysis.example3')}</li>
                <li>{t('services.analysis.example4')}</li>
                <li>{t('services.analysis.example5')}</li>
                <li>{t('services.analysis.example6')}</li>
                <li>{t('services.analysis.example7')}</li>
                <li>{t('services.analysis.example8')}</li>
              </ul>
            </div>
          </div>

          {/* Oddělovací čára */}
          <div className="border-t-2 border-gray-500 mb-16"></div>

          {/* Technické řešení využití odpadů */}
          <div id="technicke-reseni" className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">{t('services.technical.title')}</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-200 mb-6 leading-relaxed">
                {t('services.technical.description1')}
              </p>
              
              <p className="text-lg text-gray-200 mb-6 leading-relaxed">
                {t('services.technical.description2')}
              </p>
              
              <p className="text-lg text-gray-200 mb-6 leading-relaxed">
                {t('services.technical.description3')}
              </p>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}
