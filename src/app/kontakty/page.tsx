'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import { useLanguage } from '@/contexts/LanguageContext'

export default function ContactPage() {
  const { t } = useLanguage()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage('')

    const form = e.currentTarget // Uložíme referenci na formulář

    const formData = new FormData(form)
    const data = {
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      company: formData.get('company'),
      subject: formData.get('subject'),
      message: formData.get('message')
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (response.ok) {
        setIsSuccess(true)
        setSubmitMessage('Děkujeme za vaši zprávu.')
        // Reset formuláře
        form.reset()
      } else {
        setIsSuccess(false)
        setSubmitMessage(result.error || 'Došlo k chybě při odesílání.')
      }
    } catch (error) {
      setIsSuccess(false)
      setSubmitMessage('Došlo k chybě při odesílání. Zkuste to prosím znovu.')
    } finally {
      setIsSubmitting(false)
    }
  }

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
            {t('contact.title')}
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="relative py-20 overflow-hidden">
        {/* Pozadí stejné jako u dokumentů */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-900 via-slate-900 to-black -z-10"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:items-start">
            
            {/* Kontaktní informace */}
            <div className="flex flex-col">
              <h2 className="text-3xl font-bold text-white mb-6">{t('contact.info')}</h2>
              
              <div className="flex-grow">
                {/* Hlavní sídlo */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-white mb-4">{t('contact.headquarters')}</h3>
                  <div className="text-lg text-gray-200 leading-relaxed">
                    <p className="font-semibold">WASTen Star Holding, B.V.</p>
                    <p>Burgemeester de Hesselleplein 31</p>
                    <p>6411CH Heerlen</p>
                    <p>Netherlands</p>
                    <p className="mt-2">CCI: 88174859</p>
                  </div>
                </div>

                {/* Pobočka v ČR */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-white mb-4">{t('contact.branch_cz')}</h3>
                  <div className="text-lg text-gray-200 leading-relaxed">
                    <p>Strojírenská 260/14</p>
                    <p>155 21 Praha 5 – CZ</p>
                  </div>
                </div>

                {/* Kontaktní osoba */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-white mb-4">{t('contact.contact_person')}</h3>
                  <div className="text-lg text-gray-200 leading-relaxed">
                    <p className="font-semibold">RNDr. Radek Hořeňovský</p>
                    <p>Tel.: <a href="tel:+420732747993" className="text-blue-400 hover:text-blue-300">+420 732 747 993</a></p>
                    <p>Email: <a href="mailto:radek.horenovsky@wasten.eu" className="text-blue-400 hover:text-blue-300">radek.horenovsky@wasten.eu</a></p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mapa */}
            <div className="flex flex-col">
              <h2 className="text-3xl font-bold text-white mb-6">{t('contact.location')}</h2>
              <div className="bg-gray-800 rounded-lg overflow-hidden shadow-xl" style={{height: '280px'}}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2525.1234567890123!2d5.9808!3d50.8878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c0e7b8a8a8a8a8%3A0x1234567890abcdef!2sBurgemeester%20de%20Hesselleplein%2031%2C%206411%20CH%20Heerlen%2C%20Netherlands!5e0!3m2!1sen!2scz!4v1234567890123!5m2!1sen!2scz"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                ></iframe>
              </div>
              <p className="text-sm text-gray-400 mt-2">Hauptsitz in Heerlen, Niederlande</p>
            </div>

            {/* Kontaktní formulář */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">{t('contact.form')}</h2>
              {submitMessage && (
                <div className={`mb-6 p-4 rounded-lg text-center font-bold ${
                  isSuccess 
                    ? 'bg-green-900/50 border border-green-600 text-green-300' 
                    : 'bg-red-900/50 border border-red-600 text-red-300'
                }`}>
                  {submitMessage}
                </div>
              )}
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-bold text-white mb-2">
                      {t('contact.first_name')} *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                      placeholder={t('contact.placeholder.first_name')}
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-bold text-white mb-2">
                      {t('contact.last_name')} *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                      placeholder={t('contact.placeholder.last_name')}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-white mb-2">
                    {t('contact.email')} *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                    placeholder={t('contact.placeholder.email')}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-bold text-white mb-2">
                      {t('contact.phone')}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                      placeholder={t('contact.placeholder.phone')}
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-bold text-white mb-2">
                      {t('contact.company')}
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                      placeholder={t('contact.placeholder.company')}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-bold text-white mb-2">
                    {t('contact.subject')} *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                  >
                    <option value="">{t('contact.select_subject')}</option>
                    <option value="financovani">{t('contact.subject_financing')}</option>
                    <option value="cirkularne-firmy">{t('contact.subject_circular_companies')}</option>
                    <option value="cirkularne-mesta">{t('contact.subject_circular_cities')}</option>
                    <option value="analyzy">{t('contact.subject_analysis')}</option>
                    <option value="technicke-reseni">{t('contact.subject_technical')}</option>
                    <option value="obecne">{t('contact.subject_general')}</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-white mb-2">
                    {t('contact.message')} *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 resize-vertical"
                    placeholder={t('contact.placeholder.message')}
                  ></textarea>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`px-8 py-3 font-bold rounded-lg transition-all duration-300 shadow-lg transform ${
                      isSubmitting
                        ? 'bg-gray-600 cursor-not-allowed text-gray-300'
                        : 'bg-blue-600 hover:bg-blue-700 text-white hover:shadow-xl hover:scale-105'
                    }`}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        {t('contact.sending')}
                      </span>
                    ) : (
                      t('contact.send')
                    )}
                  </button>
                </div>

                <p className="text-sm text-gray-400 text-center">
                  {t('contact.required_fields')}
                </p>
              </form>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}
