'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'

type Language = 'cs' | 'en'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

// Překlady
const translations = {
  cs: {
    // Navigation
    'nav.home': 'Domov',
    'nav.about': 'O nás',
    'nav.services': 'Služby',
    'nav.documents': 'Dokumenty',
    'nav.contact': 'Kontakty',
    'nav.language': 'Jazyk',
    
    // Services navigation
    'services.financing': 'Financování projektů',
    'services.circular_companies': 'Cirkulární řešení pro firmy',
    'services.circular_cities': 'Cirkulární řešení pro města a obce',
    'services.analysis': 'Strategické analýzy',
    'services.technical': 'Technické řešení využití odpadů',
    
    // Homepage
    'home.hero.title': 'Financování projektů cirkulární ekonomiky',
    'home.hero.subtitle': 'Podporujeme inovativní projekty v oblasti efektivního využití odpadů, obnovitelných zdrojů energie a udržitelného rozvoje.',
    'home.hero.cta': 'Zjistit více',
    'home.description': 'WASTen Star Holding B.V. je nizozemská společnost zaměřená na podporu projektů v oblasti cirkulární ekonomiky a moderní energetiky. V České republice spolupracujeme s klastrem WASTen, který sdružuje inovativní podniky a významné univerzity v oblasti oběhového hospodářství.',
    'home.learn_more': 'Zjistit více',
    
    'home.renewable.title': 'Obnovitelné zdroje energie',
    'home.renewable.description': 'Financování nákupu, akvizice, vývoje, výroby, výstavby, instalace, provozu, distribuce a údržby projektů výroby obnovitelné energie vztahujících se k větrné, solární, vodní energii, biomase a vodíku v souladu s následujícími kritérii: Pozemní fotovoltaické a koncentrované solární elektrárny (CSP). CSP projekty budou omezeny na ty, které vyrábějí nejméně 85% elektřiny ze solárních zdrojů energie. Vodní elektrárny financované v rámci Frameworku budou buď: i) průtočné bez umělé nádrže nebo s nízkou skladovací kapacitou; nebo ii) mají výkonovou hustotu větší než 5 W/m2 nebo emisní intenzitu pod 100 gCO2e/kWh. Projekty skladování energie jako jsou palivové články budou napojeny na obnovitelné zdroje. Výroba vodíku prostřednictvím elektrolýzy napájené obnovitelnou energií a zařízení pro výrobu a použití vodíku napájeného obnovitelnou energií. Bioenergie vyrobená z anaerobní digesce nebo kompostování zemědělských a lesnických zbytků, čistírenských kalů, bioodpadů jako jsou biozeminy a zvířecí hnůj, tuky a oleje.',
    
    'home.circular.title': 'Cirkulární ekonomika',
    'home.circular.description': 'Ekologicky efektivní cirkulární ekonomika Adaptované produkty, výrobní technologie a procesy kategorie ekologicky efektivních produktů a výrobních aktivit, které zvyšují efektivitu zdrojů. Pozemní fotovoltaické a koncentrované solární elektrárny (CSP). CSP projekty budou omezeny na ty, které vyrábějí nejméně 85% elektřiny ze solárních zdrojů energie. To se může týkat následujících aktivit: Projekty, které prodlužují životní cyklus produktů. To může zahrnovat opětovné použití, opravy, renovace a regeneraci produktů; integraci modulárního designu nebo designu pro demontáž; a začlenění systémů zpětného odběru nebo reverzní logistiky. Výrobní technologie, které používají recyklované zdroje, jako jsou bio-založené materiály. Banka potvrdila, že výroba bio-založených materiálů bude omezena na ty certifikované pod Kulatým stolem pro udržitelné biomtariály. Máme v úmyslu financovat následující technologie: i) bio-založené sorbenty, ii) sanitaci odpadů. Výroba výrobků na bázi kovů s: vstupy jsou šrot nebo recyklovaný kov.',
    
    // About page - nový obsah dle zadání uživatele
    'about.title': 'O nás',
    'about.company_description': 'WASTen Star Holding B.V. je nizozemská společnost se sídlem v Heerlenu.',
    'about.company_goal': 'Cílem společnosti je podpora projektů v oblasti oběhové ekonomiky, efektivního využití odpadů a moderní energetiky.',
    'about.support_approach': 'Perspektivní projekty podporujeme finančně přímými investicemi nebo úvěrovým financováním. Při poradenských aktivitách pro firmy a obce využíváme know-how a expertní poznatky získané dlouhodobou činností v oblasti cirkulární ekonomiky.',
    'about.green_bonds': 'WASTen Star Holding B.V. získal financování formou emise „zelených" dluhopisů ve výši 100 mil. EUR na Luxembourg Green Exchange (LGX). Finanční prostředky z této emise jsou určeny na investice oblasti efektivního využití odpadů, obnovitelných zdrojů energie a cirkulární ekonomiky.',
    'about.spo_certificate': 'Společnost WASTen Star Holding B.V. je držitelem certifikátu Second Party Opinion (SPO), vydaného společností Sustainalytics, respektovanou ratingovou agenturou pro oblast ESG.',
    'about.czech_expansion': 'Společnost WASTen Star Holding B.V. rozšířila své aktivity a svých bohatých zkušeností začala využívat také v ČR. Na českém trhu úzce spolupracujeme s klastrem WASTen, z.s., a při poradenství se opíráme o expertní tým klastru.',
    'about.cluster_collaboration': 'WASTen, z.s. sdružuje inovativní podniky, univerzity a další výzkumné organizace v oblasti oběhového hospodářství v ČR. Členy klastru jsou 4 významné české univerzity - VŠCHT v Praze, ČZÚ v Praze, VŠB TU Ostrava a UJEP Ustí n. L. Odborný tým klastru WASten je složen ze široce uznávaných odborníků z akademické sféry i praxe, kteří využívají své bohaté zkušenosti a hlubokou znalost českého trhu cirkulární ekonomiky.',
    
    // Services page - přesně podle původních textů
    'services.title': 'Naše služby',
    'services.financing.title': 'Financování projektů',
    'services.financing.description1': 'WASTen Star Holding B.V. získal financování formou emise „zelených" dluhopisů ve výši 100 mil. EUR na Luxembourg Green Exchange (LGX). Finanční prostředky z této emise jsou určeny na investice oblasti efektivního využití odpadů, obnovitelných zdrojů energie a cirkulární ekonomiky.',
    'services.financing.description2': 'Perspektivní projekty podporujeme finančně formou přímých investic nebo úvěrového financování. Zajišťujeme také komplexní financování projektů z externích zdrojů, ať již od privátních investorů, bank nebo emisí dluhopisů na kapitálovém trhu.',
    'services.financing.focus_areas': 'Zaměřujeme se na financování projektů v oblastech:',
    'services.financing.area1': 'Odpadové hospodářství',
    'services.financing.area2': 'Cirkulární ekonomika',
    'services.financing.area3': 'OZE',
    'services.financing.area4': 'Bateriové systémy a SVR',
    'services.financing.certificate': 'Společnost WASTen Star Holding B.V. je držitelem certifikátu Second Party Opinion (SPO), vydaného společností Sustainalytics, respektovanou ratingovou agenturou pro oblast ESG.',
    
    'services.circular_companies.title': 'Cirkulární řešení pro firmy',
    'services.circular_companies.circular_audit.title': 'Cirkulární audit',
    'services.circular_companies.circular_audit.description1': 'Cirkulární ekonomika se stává důležitou součástí surovinové bezpečnosti v Evropě. Je možné měřit nakolik je výrobní podnik cirkulární? Odpověď na to dává Cirkulární audit, jehož metodiku připravilo Ministerstvo průmyslu a obchodu.',
    'services.circular_companies.circular_audit.benefits_title': 'Jaké přínosy pro Vás může mít cirkulární audit:',
    'services.circular_companies.circular_audit.benefit1': 'Zjistíte aktuální stav vaší společnosti v oblasti oběhového hospodářství',
    'services.circular_companies.circular_audit.benefit2': 'Můžete ušetřit nemalé prostředky efektivním využitím vašich odpadů',
    'services.circular_companies.circular_audit.benefit3': 'Nahrazení vstupních surovin druhotnými surovinami Vám pomůže zvýšit surovinovou nezávislost a tím i bezpečnost',
    'services.circular_companies.circular_audit.benefit4': 'Získáte data o potenciálních úsporách ve firmě a uhlíkové stopě produktů',
    'services.circular_companies.circular_audit.benefit5': 'Výsledek cirkulárního auditu Vám pomůže v komunikaci s velkými korporacemi, které již mají pro své dodavatele stanovené cíle cirkularity a ESG',
    'services.circular_companies.circular_audit.support_title': 'Poradenství – podpora z programu OP TAK pro přípravu cirkulárního auditu',
    'services.circular_companies.circular_audit.support_description': 'Ministerstvo průmyslu a obchodu připravilo také grantový program Poradenství, který podporuje přípravu cirkulárního auditu pro malé a střední podniky.',
    'services.circular_companies.circular_audit.support_rate': 'Míra podpory je max. 50 % způsobilých výdajů',
    'services.circular_companies.circular_audit.support_max': 'Maximální způsobilé výdaje na projekt jsou 500 tis. Kč',
    'services.circular_companies.circular_audit.support_deadline': 'Žádosti o podporu lze podávat do 1. prosince 2025',
    'services.circular_companies.circular_audit.support_help': 'Pomůžeme Vám připravit úspěšnou žádost o podporu a následnou přípravu cirkulárního auditu.',
    
    'services.circular_companies.esg_sustainability.title': 'ESG a udržitelnost',
    'services.circular_companies.esg_sustainability.description1': 'Povinnost ESG reportingu se dle aktuální legislativy vztahuje na velké firmy s více než 250 zaměstnanci. Povinnost předkládání ESG reportu byla odložena a aktuálně se uvažuje o zvýšení limitu pro povinné zveřejňování na 1000 zaměstnanců. Zůstává však povinnost bank prezentovat udržitelnost a ESG stav svého portfolia. Velké firmy jsou povinny vyžadovat ESG reporty od svých dodavatelů k tomu, aby mohli plnit své legislativní povinnosti. Z tohoto důvodu velké firmy preferují dodavatele, kteří mají zpracované ESG reporty.',
    'services.circular_companies.esg_sustainability.services_title': 'Firmám nabízíme služby ve zpracování ESG reportů v souladu se standardy EFRAG:',
    'services.circular_companies.esg_sustainability.service1': 'Analýza aktuálního stavu firmy',
    'services.circular_companies.esg_sustainability.service2': 'Sběr potřebných dat',
    'services.circular_companies.esg_sustainability.service3': 'Zpracování ESG reportu',
    'services.circular_companies.esg_sustainability.benefits_title': 'Přínosy služby:',
    'services.circular_companies.esg_sustainability.benefit1': 'Splnění požadavků stávajících klientů z řad velkých podniků',
    'services.circular_companies.esg_sustainability.benefit2': 'ESG otvírá nové obchodní příležitosti',
    'services.circular_companies.esg_sustainability.benefit3': 'Splnění požadavků financující banky',
    'services.circular_companies.esg_sustainability.benefit4': 'Zvýšení atraktivity pro banky',
    
    'services.circular_companies.material_scan.title': 'Material / Waste Scan',
    'services.circular_companies.material_scan.description1': 'V současné době se efektivnost materiálových toků ve firmě stává klíčovou v podnikání. WASTen Star Holding nabízí zpracování material scanu, který hodnotí efektivnost využití materiálu ve firmě, využití odpadů a využití druhotných surovin.',
    'services.circular_companies.material_scan.description2': 'Firmy si ještě stále nejsou plně vědomy skrytých rezerv, které se skrývají v odpadech. Dle našich zkušeností je možné důkladnou analýzou materiálových toků a vhodným využitím odpadů ušetřit až 15 % ročních nákladů. V některých případech stačí prostudovat stávající smlouvy na využití odpadů, v jiných případech mohou plynout výnosy z prodeje vlastních recyklovaných materiálů nebo z využití druhotných surovin.',
    
    'services.circular_companies.technical_solution.title': 'Návrh optimálního technického řešení a vhodných technologií',
    'services.circular_companies.technical_solution.description': 'Návrh optimalizace technologického řešení pro cirkularitu ve firmě a nakládání s odpady se zaměřuje na efektivnější nakládání se surovinami, lepší využití odpadů, minimalizaci jejich produkce a maximalizaci míry recyklace. Při navrhování technologických řešení využíváme bohaté zkušenosti našich expertů z projektů realizovaných v Evropě a tvůrčí schopnosti výzkumných pracovníků spolupracujících univerzit. WASTen Star Holding B.V. vytvořil Katalog moderních cirkulárních technologií, ze kterého čerpá při navrhování vhodných a efektivních technologií.',
    
    'services.circular_companies.business_model.title': 'Vytvoření nového obchodního modelu – udržitelně a efektivně',
    'services.circular_companies.business_model.description': 'Implementace cirkulární ekonomiky ve firmě je možná různými způsoby. Jednou z těchto možností je vytvoření a implementace nového obchodního modelu, který umožní zvýšit příjmy firmy a současně snížit dopad výroby na životní prostředí. Experti z WASTen Star Holding se účastnili implementace řady úspěšných cirkulárních obchodních modelů v praxi a mohou nabídnout své zkušenosti i Vám.',
    
    'services.circular_cities.title': 'Cirkulární řešení pro města a obce',
    'services.circular_cities.waste_analysis.title': 'Analýza odpadového hospodářství města/obce',
    'services.circular_cities.waste_analysis.description': 'Provedeme analýzu současného stavu nakládání s odpady ve vašem městě. Na základě důkladné analýzy navrhneme optimální řešení, které bude odpovídat vašim potřebám a požadavkům. Analýza odhalí potenciál vašeho odpadového hospodářství. Představíme několik variant a společně se domluvíme na optimálním postupu.',
    
    'services.circular_cities.optimization.title': 'Návrh optimalizace systému odpadového hospodářství pro město/obec',
    'services.circular_cities.optimization.description': 'Na základě vstupní analýzy odpadového hospodářství vašeho města připravíme návrh optimalizace systému odpadového hospodářství. Návrh bude obsahovat návrh technologického řešení, ekonomickou analýzu a soulad s legislativními podmínkami.',
    
    'services.circular_cities.technical_solution.title': 'Návrh optimálního technického řešení a vhodných technologií',
    'services.circular_cities.technical_solution.description': 'Návrh optimalizace technologického řešení pro nakládání s odpady v obci se zaměřuje na efektivnější využití odpadů, maximalizaci jejich třídění a maximalizaci míry recyklace. Při navrhování technologických řešení využíváme bohaté zkušenosti našich expertů z projektů realizovaných v Evropě a tvůrčí schopnosti výzkumných pracovníků spolupracujících univerzit. WASTen Star Holding B.V. vytvořil Katalog moderních cirkulárních technologií, ze kterého čerpá při navrhování vhodných a efektivních technologií.',
    
    'services.circular_cities.circular_scan.title': 'City Circular Scan',
    'services.circular_cities.circular_scan.description': 'City circular scan je analýza, která zkoumá nakládání města nebo obce se zdroji, včetně odpadů, vody, stavebnictví, místní ekonomiky a dalších oblastí. Cílem je identifikovat silné a slabé stránky, navrhnout opatření pro efektivnější využití zdrojů, snížení nákladů a zvýšení stability města nebo obce. Výstupem circular scanu jsou doporučení konkrétních opatření, která by měla vést ke zlepšení oběhové ekonomiky.',
    
    'services.circular_cities.financing.title': 'Financování cirkulárních řešení',
    
    'services.analysis.title': 'Strategické analýzy',
    'services.analysis.description1': 'WASTen Star Holding B.V. připravuje pro klienty strategické analýzy v oblasti cirkulární ekonomiky a odpadového hospodářství s využitím bohatých zkušeností svého expertního týmu a dlouhodobě připravované databáze.',
    'services.analysis.examples_title': 'Příklady strategických analýz:',
    'services.analysis.example1': 'Posouzení ekonomické efektivity investice do cirkulární ekonomiky',
    'services.analysis.example2': 'Analýza technologických trendů v odpadovém hospodářství',
    'services.analysis.example3': 'Digitalizace a cirkulární ekonomika – analýza potenciálu, překážek a dopadů',
    'services.analysis.example4': 'Optimalizace svozu odpadů v regionu',
    'services.analysis.example5': 'Optimalizace rozmístění technologií pro zpracování vybraného druhu odpadu v regionu',
    'services.analysis.example6': 'Optimalizace rozmístění vybrané technologie v regionu',
    'services.analysis.example7': 'Stanovení minimální spádové oblasti svozu odpadů pro vybranou technologii',
    'services.analysis.example8': 'Analýza hodnotového řetězce zpracování plastových odpadů',
    
    'services.technical.title': 'Technické řešení využití odpadů',
    'services.technical.description1': 'Efektivnost materiálových toků ve firmě se stává jedním z klíčových ukazatelů rozvoje firmy. Firmy si ještě stále nejsou plně vědomy skrytých rezerv, které se skrývají v odpadech. Dle našich zkušeností je možné důkladnou analýzou materiálových toků a vhodným využitím odpadů ušetřit až 15 % ročních nákladů.',
    'services.technical.description2': 'Na základě material scanů často vyvstává požadavek na pořízení nového technického vybavení. Při navrhování technologických řešení využíváme bohaté zkušenosti našich expertů z projektů realizovaných v Evropě a tvůrčí schopnosti výzkumných pracovníků spolupracujících univerzit. WASTen Star Holding B.V. vytvořil Katalog moderních cirkulárních technologií, ze kterého čerpá při navrhování vhodných a efektivních technologií.',
    'services.technical.description3': 'Perspektivní projekty jsme schopni podpořit finančně, buď z našich vlastních zdrojů, případně kombinací externích zdrojů včetně využití vhodných dotačních programů.',
    
    // Contact page
    'contact.title': 'Kontakty',
    'contact.info': 'Kontaktní informace',
    'contact.headquarters': 'Hlavní sídlo',
    'contact.branch_cz': 'Pobočka v ČR',
    'contact.contact_person': 'Kontaktní osoba',
    'contact.location': 'Naše lokace',
    'contact.form': 'Kontaktní formulář',
    'contact.first_name': 'Jméno',
    'contact.last_name': 'Příjmení',
    'contact.email': 'Email',
    'contact.phone': 'Telefon',
    'contact.company': 'Společnost',
    'contact.subject': 'Předmět',
    'contact.message': 'Zpráva',
    'contact.select_subject': 'Vyberte předmět dotazu',
    'contact.subject_financing': 'Financování projektů',
    'contact.subject_circular_companies': 'Cirkulární řešení pro firmy',
    'contact.subject_circular_cities': 'Cirkulární řešení pro města a obce',
    'contact.subject_analysis': 'Strategické analýzy',
    'contact.subject_technical': 'Technické řešení využití odpadů',
    'contact.subject_general': 'Obecný dotaz',
    'contact.send': 'Odeslat zprávu',
    'contact.sending': 'Odesílám...',
    'contact.required_fields': '* Povinná pole. Vaše údaje budou zpracovány v souladu s GDPR.',
    'contact.placeholder.first_name': 'Vaše jméno',
    'contact.placeholder.last_name': 'Vaše příjmení',
    'contact.placeholder.email': 'vas.email@priklad.cz',
    'contact.placeholder.phone': '+420 123 456 789',
    'contact.placeholder.company': 'Název vaší společnosti',
    'contact.placeholder.message': 'Popište prosím váš dotaz nebo požadavek...',
    
    // Documents section
    'documents.title': 'Dokumenty ke stažení',
    'documents.download_presentation': 'Stáhnout prezentaci',
    'documents.download_brochure': 'Stáhnout brožuru',
    
    // Footer
    'footer.company': 'WASTen Star Holding B.V.',
    'footer.address': 'Burgemeester de Hesselleplein 31, 6411CH Heerlen, Netherlands',
    'footer.phone': 'Tel: +420 732 747 993',
    'footer.email': 'Email: radek.horenovsky@wasten.eu',
    'footer.rights': 'Všechna práva vyhrazena.',
    
    // Waste Management section
    'waste.title': 'Nakládání s odpady',
    'waste.description': 'Nakládání s odpady Financování nákupu, akvizice, vývoje, výroby, výstavby, instalace, provozu, distribuce a údržby zařízení pro nakládání s odpady včetně: Zacházení s odpady a materiálů systémy recyklace. Nakládání s odpady bude omezeno na projekty, které mají za cíl: i) podporovat recyklaci v souladu s hierarchií odpadů EU; ii) redukovat emise; nebo iii) zvýšit efektivitu využití zdrojů. Materiálové systémy recyklace budou omezeny na recyklaci papíru, metalu, skla, textilu, plastů, organických odpadů a stavebních a demoličních odpadů. Banka bude financovat projekty nakládání s odpady pouze v případě, že jsou v souladu s aplikovatelnou legislativou EU a členskými státy EU. Zařízení pro nakládání s odpady vztahující se k odpadu na energii budou financována pouze v případě, že splňují technické kritéria screening pro taxonomii EU (je to v současné době v přípravě). Banka neočekává, že bude financovat žádné zařízení pro nakládání s odpady vztahující se k odpadu na energii vzhledem k těmto přísným kritériím. Kompostování nebo anaerobní rozklad biologicky rozložitelných odpadů.',
    
    // Renewable Energy section
    'renewable.title': 'Obnovitelné zdroje energie',
    'renewable.description': 'Financování nákupu, akvizice, vývoje, výroby, výstavby, instalace, provozu, distribuce a údržby projektů výroby obnovitelné energie vztahujících se k větrné, solární, vodní energii, biomase a vodíku v souladu s následujícími kritérii: Pozemní fotovoltaické a koncentrované solární elektrárny (CSP). CSP projekty budou omezeny na ty, které vyrábějí nejméně 85% elektřiny ze solárních zdrojů energie. Vodní elektrárny financované v rámci Frameworku budou buď: i) průtočné bez umělé nádrže nebo s nízkou skladovací kapacitou; nebo ii) mají výkonovou hustotu větší než 5 W/m2 nebo emisní intenzitu pod 100 gCO2e/kWh. Projekty skladování energie jako jsou palivové články budou napojeny na obnovitelné zdroje. Výroba vodíku prostřednictvím elektrolýzy napájené obnovitelnou energií a zařízení pro výrobu a použití vodíku napájeného obnovitelnou energií. Bioenergie vyrobená z anaerobní digesce nebo kompostování zemědělských a lesnických zbytků, čistírenských kalů, bioodpadů jako jsou biozeminy a zvířecí hnůj, tuky a oleje.',
    
    // Circular Economy section
    'circular.title': 'Cirkulární ekonomika',
    'circular.description': 'Ekologicky efektivní cirkulární ekonomika Adaptované produkty, výrobní technologie a procesy kategorie ekologicky efektivních produktů a výrobních aktivit, které zvyšují efektivitu zdrojů. Pozemní fotovoltaické a koncentrované solární elektrárny (CSP). CSP projekty budou omezeny na ty, které vyrábějí nejméně 85% elektřiny ze solárních zdrojů energie. To se může týkat následujících aktivit: Projekty, které prodlužují životní cyklus produktů. To může zahrnovat opětovné použití, opravy, renovace a regeneraci produktů; integraci modulárního designu nebo designu pro demontáž; a začlenění systémů zpětného odběru nebo reverzní logistiky. Výrobní technologie, které používají recyklované zdroje, jako jsou bio-založené materiály. Banka potvrdila, že výroba bio-založených materiálů bude omezena na ty certifikované pod Kulatým stolem pro udržitelné biomtariály. Máme v úmyslu financovat následující technologie: i) bio-založené sorbenty, ii) sanitaci odpadů. Výroba výrobků na bázi kovů s: vstupy jsou šrot nebo recyklovaný kov.',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.services': 'Services',
    'nav.documents': 'Documents',
    'nav.contact': 'Contact',
    'nav.language': 'Language',
    
    // Services navigation
    'services.financing': 'Project Financing',
    'services.circular_companies': 'Circular Solutions for Companies',
    'services.circular_cities': 'Circular Solutions for Cities and Municipalities',
    'services.analysis': 'Strategic Analysis',
    'services.technical': 'Technical Waste Utilization Solutions',
    
    // Homepage
    'home.hero.title': 'Financing Circular Economy Projects',
    'home.hero.subtitle': 'We support innovative projects in efficient waste utilization, renewable energy sources and sustainable development.',
    'home.hero.cta': 'Learn More',
    'home.description': 'WASTen Star Holding B.V. is a Dutch company focused on supporting projects in circular economy and modern energy. In the Czech Republic, we cooperate with the WASTen cluster, which brings together innovative companies and major universities in the field of circular economy.',
    'home.learn_more': 'Learn More',
    
    'home.renewable.title': 'Renewable Energy Sources',
    'home.renewable.description': 'Financing of the purchase, acquisition, development, manufacturing, construction, installation, operation, distribution and maintenance of renewable energy generation projects related to wind, solar, hydropower, biomass and hydrogen in accordance with the following criteria: Onshore solar photovoltaic generation and concentrated solar power (CSP) plants. CSP projects will be limited to those that generate at least 85% of the electricity from solar energy sources. Hydropower projects financed under the Framework will be either: i) run-of-river without an artificial reservoir or with low storage capacity; or ii) have power density greater than 5 W/m2 or emissions intensity below 100 gCO2e/kWh. Energy storage projects such as fuel cells will be connected to renewables. Manufacture of hydrogen through electrolysis powered by renewable energy, and equipment for the production and use of hydrogen powered by renewable energy. Bioenergy produced from anaerobic digestion or composting of agricultural and forestry residues, sewage sludge, biowaste such as bio soils and animal manure, fats and oils.',
    
    'home.circular.title': 'Circular Economy',
    'home.circular.description': 'Eco-efficient Circular Economy Adapted Products, Production Technologies and Processes category of eco-efficient products and production activities that increase resource efficiency. Onshore solar photovoltaic generation and concentrated solar power (CSP) plants. CSP projects will be limited to those that generate at least 85% of the electricity from solar energy sources. This can concern the following activities: Projects that extend the life cycle of products. This may include product reuse, repair, refurbishment and regeneration; integration of modular design or design for disassembly; and incorporation of take-back schemes or reverse logistics. Production technologies that use recycled resources, such as bio-based materials. The Bank has confirmed that the production of bio-based materials will be limited to those certified under the Roundtable on Sustainable Biomaterials. We intend to finance the following technologies: i) bio-based sorbents, ii) waste sanitation. Production of metal-based products with: inputs being scrap or recycled metal.',
    
    // About page - English translations
    'about.title': 'About Us',
    'about.company_description': 'WASTen Star Holding B.V. is a Dutch company headquartered in Heerlen.',
    'about.company_goal': 'The company\'s goal is to support projects in the field of circular economy, efficient waste utilization and modern energy.',
    'about.support_approach': 'We financially support promising projects through direct investments or credit financing. We use know-how and expert knowledge gained through our long-term activity in the field of circular economy in our consulting activities for companies and municipalities.',
    'about.green_bonds': 'WASTen Star Holding B.V. obtained financing through the issuance of "green" bonds worth 100 million EUR on the Luxembourg Green Exchange (LGX). The financial resources from this issuance are intended for investments in the field of efficient waste utilization, renewable energy sources, and circular economy.',
    'about.spo_certificate': 'WASTen Star Holding B.V. holds a Second Party Opinion (SPO) certificate issued by Sustainalytics, a respected ESG rating agency.',
    'about.czech_expansion': 'WASTen Star Holding B.V. has expanded its activities and began utilizing its extensive experience also in the Czech Republic. In the Czech market, we closely cooperate with the WASTen cluster and rely on the cluster\'s expert team for consulting.',
    'about.cluster_collaboration': 'WASTen, z.s. brings together innovative companies, universities, and other research organizations in the field of circular economy in the Czech Republic. The cluster members include 4 major Czech universities - ICT Prague, CZU Prague, VŠB TU Ostrava, and UJEP Ústí n. L. The expert team of the WASTen cluster consists of widely recognized experts from both academic and practical spheres, who utilize their extensive experience and deep knowledge of the Czech circular economy market.',
    
    // Services page
    'services.title': 'Our Services',
    'services.financing.title': 'Project Financing',
    'services.financing.description1': 'WASTen Star Holding B.V. obtained financing through the issuance of "green" bonds worth 100 million EUR on the Luxembourg Green Exchange (LGX). The financial resources from this issuance are intended for investments in the field of efficient waste utilization, renewable energy sources and circular economy.',
    'services.financing.description2': 'We financially support promising projects through direct investments or credit financing. We also provide comprehensive project financing from external sources, whether from private investors, banks or bond issuances on the capital market.',
    'services.financing.focus_areas': 'We focus on financing projects in the areas:',
    'services.financing.area1': 'Waste management',
    'services.financing.area2': 'Circular economy',
    'services.financing.area3': 'Renewable energy sources',
    'services.financing.area4': 'Battery systems and energy storage',
    'services.financing.certificate': 'WASTen Star Holding B.V. holds a Second Party Opinion (SPO) certificate issued by Sustainalytics, a respected rating agency for ESG.',
    
    'services.circular_companies.title': 'Circular Solutions for Companies',
    'services.circular_companies.circular_audit.title': 'Circular Audit',
    'services.circular_companies.circular_audit.description1': 'Circular economy is becoming an important part of resource security in Europe. Is it possible to measure how circular a manufacturing company is? The answer is provided by the Circular Audit, whose methodology was prepared by the Ministry of Industry and Trade.',
    'services.circular_companies.circular_audit.benefits_title': 'What benefits can a circular audit bring you:',
    'services.circular_companies.circular_audit.benefit1': 'You will find out the current state of your company in the field of circular economy',
    'services.circular_companies.circular_audit.benefit2': 'You can save considerable resources through efficient use of your waste',
    'services.circular_companies.circular_audit.benefit3': 'Replacing input materials with secondary raw materials will help you increase resource independence and thus security',
    'services.circular_companies.circular_audit.benefit4': 'You will get data on potential savings in the company and carbon footprint of products',
    'services.circular_companies.circular_audit.benefit5': 'The result of the circular audit will help you in communication with large corporations that already have set circularity and ESG goals for their suppliers',
    'services.circular_companies.circular_audit.support_title': 'Consulting – support from the OP TAK program for circular audit preparation',
    'services.circular_companies.circular_audit.support_description': 'The Ministry of Industry and Trade has also prepared a grant program Consulting, which supports the preparation of circular audit for small and medium enterprises.',
    'services.circular_companies.circular_audit.support_rate': 'The support rate is max. 50% of eligible expenses',
    'services.circular_companies.circular_audit.support_max': 'Maximum eligible expenses per project are 500 thousand CZK',
    'services.circular_companies.circular_audit.support_deadline': 'Support applications can be submitted until December 1, 2025',
    'services.circular_companies.circular_audit.support_help': 'We will help you prepare a successful support application and subsequent circular audit preparation.',
    
    'services.circular_companies.esg_sustainability.title': 'ESG and Sustainability',
    'services.circular_companies.esg_sustainability.description1': 'The obligation of ESG reporting applies according to current legislation for large companies with over 250 employees. The obligation to submit an ESG report has been postponed and currently an increase in the limit for mandatory publication to 1000 employees is being considered. However, the obligation of banks to present the sustainability and ESG status of their portfolio remains. Large companies are obliged to require ESG reports from their suppliers in order to fulfill their legislative obligations. For this reason, large companies prefer suppliers who have prepared ESG reports.',
    'services.circular_companies.esg_sustainability.services_title': 'We offer companies services in processing ESG reports in accordance with EFRAG standards:',
    'services.circular_companies.esg_sustainability.service1': 'Analysis of the current state of the company',
    'services.circular_companies.esg_sustainability.service2': 'Collection of necessary data',
    'services.circular_companies.esg_sustainability.service3': 'Processing of ESG report',
    'services.circular_companies.esg_sustainability.benefits_title': 'Service benefits:',
    'services.circular_companies.esg_sustainability.benefit1': 'Meeting the requirements of existing clients from large enterprises',
    'services.circular_companies.esg_sustainability.benefit2': 'ESG opens new business opportunities',
    'services.circular_companies.esg_sustainability.benefit3': 'Meeting the requirements of the financing bank',
    'services.circular_companies.esg_sustainability.benefit4': 'Increasing attractiveness for banks',
    
    'services.circular_companies.material_scan.title': 'Material / Waste Scan',
    'services.circular_companies.material_scan.description1': 'Currently, the efficiency of material flows within the company is becoming key in business. WASTen Star Holding offers material scan processing, which evaluates the efficiency of material use in the company, waste utilization and use of secondary raw materials.',
    'services.circular_companies.material_scan.description2': 'Companies are still not fully aware of the hidden reserves hidden in waste. According to our experience, it is possible to save up to 15% of annual costs through thorough analysis of material flows and appropriate waste utilization. In some cases, it is enough to study existing waste utilization contracts, in other cases revenues can flow from the sale of own recycled materials or the use of secondary raw materials.',
    
    'services.circular_companies.technical_solution.title': 'Design of Optimal Technical Solution and Suitable Technologies',
    'services.circular_companies.technical_solution.description': 'The design of optimization of technological solution for circularity in the company and waste management focuses on more efficient handling of raw materials, better waste utilization, minimization of their production and maximization of recycling rate. In designing technological solutions, we use the rich experience of our experts from projects implemented in Europe and the creative abilities of research workers in cooperating universities. WASTen Star Holding B.V. has created a Catalog of Modern Circular Technologies, from which it draws when designing suitable and efficient technologies.',
    
    'services.circular_companies.business_model.title': 'Creating a New Business Model - Sustainably and Efficiently',
    'services.circular_companies.business_model.description': 'Implementation of circular economy in a company is possible through various ways. One of these possibilities is the creation and implementation of a new business model that will allow increasing company revenues while simultaneously reducing the impact of production on the environment. Experts from WASTen Star Holding have participated in implementing a number of successful circular business models in practice and can offer their experience to you as well.',
    
    'services.circular_cities.title': 'Circular Solutions for Cities and Municipalities',
    'services.circular_cities.waste_analysis.title': 'Analysis of Waste Management in City/Municipality',
    'services.circular_cities.waste_analysis.description': 'We will perform an analysis of the current state of waste management in your city. Based on a thorough analysis, we will propose an optimal solution that will correspond to your needs and requirements. The analysis will reveal the potential of your waste management. We will present several variants and together we will agree on the optimal procedure.',
    
    'services.circular_cities.optimization.title': 'Design of Waste Management System Optimization for City/Municipality',
    'services.circular_cities.optimization.description': 'Based on the input analysis of waste management in your city, we will prepare a proposal for optimization of the waste management system. The proposal will contain a technological solution design, economic analysis and compliance with legislative conditions.',
    
    'services.circular_cities.technical_solution.title': 'Design of Optimal Technical Solution and Suitable Technologies',
    'services.circular_cities.technical_solution.description': 'The design of optimization of technological solution for waste management in the municipality focuses on more efficient waste utilization, maximization of their sorting and maximization of recycling rate. In designing technological solutions, we use the rich experience of our experts from projects implemented in Europe and the creative abilities of research workers in cooperating universities. WASTen Star Holding B.V. has created a Catalog of Modern Circular Technologies, from which it draws when designing suitable and efficient technologies.',
    
    'services.circular_cities.circular_scan.title': 'City Circular Scan',
    'services.circular_cities.circular_scan.description': 'City circular scan is an analysis that examines the management of a city or municipality with resources, including waste, water, construction, local economy and other areas. The goal is to identify strengths and weaknesses, propose measures for more efficient resource utilization, cost reduction and increase of city or municipality stability. The output of the circular scan is recommendations of specific measures that should lead to improvement of circular economy.',
    
    'services.circular_cities.financing.title': 'Financing of Circular Solutions',
    
    'services.analysis.title': 'Strategic Analysis',
    'services.analysis.description1': 'WASTen Star Holding B.V. prepares strategic analyses for clients in the field of circular economy and waste management, using the rich experience of its expert team and long-term prepared database.',
    'services.analysis.examples_title': 'Examples of strategic analyses:',
    'services.analysis.example1': 'Assessment of economic efficiency of investment in circular economy',
    'services.analysis.example2': 'Analysis of technological trends in waste management',
    'services.analysis.example3': 'Digitalization and circular economy – analysis of potential, obstacles and impacts',
    'services.analysis.example4': 'Optimization of waste collection in the region',
    'services.analysis.example5': 'Optimization of technology distribution for processing selected type of waste in the region',
    'services.analysis.example6': 'Optimization of selected technology distribution in the region',
    'services.analysis.example7': 'Determination of minimum waste collection area for selected technology',
    'services.analysis.example8': 'Analysis of plastic waste processing value chain',
    
    'services.technical.title': 'Technical Solutions for Waste Utilization',
    'services.technical.description1': 'The efficiency of material flows within the company is becoming one of the key indicators of company development. Companies are still not fully aware of the hidden reserves hidden in waste. According to our experience, it is possible to save up to 15% of annual costs through thorough analysis of material flows and appropriate waste utilization.',
    'services.technical.description2': 'Based on material scans, the requirement for acquiring new technical equipment often emerges. In designing technological solutions, we use the rich experience of our experts from projects implemented in Europe and the creative abilities of research workers in cooperating universities. WASTen Star Holding B.V. has created a Catalog of Modern Circular Technologies, from which it draws when designing suitable and efficient technologies.',
    'services.technical.description3': 'We are able to financially support promising projects, either from our own resources or through a combination of external resources including the use of suitable grant programs.',
    
    // Contact page
    'contact.title': 'Contacts',
    'contact.info': 'Contact Information',
    'contact.headquarters': 'Headquarters',
    'contact.branch_cz': 'Czech Branch',
    'contact.contact_person': 'Contact Person',
    'contact.location': 'Our Location',
    'contact.form': 'Contact Form',
    'contact.first_name': 'First Name',
    'contact.last_name': 'Last Name',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.company': 'Company',
    'contact.subject': 'Subject',
    'contact.message': 'Message',
    'contact.select_subject': 'Select inquiry subject',
    'contact.subject_financing': 'Project financing',
    'contact.subject_circular_companies': 'Circular solutions for companies',
    'contact.subject_circular_cities': 'Circular solutions for cities and municipalities',
    'contact.subject_analysis': 'Strategic analysis',
    'contact.subject_technical': 'Technical waste utilization solutions',
    'contact.subject_general': 'General inquiry',
    'contact.send': 'Send Message',
    'contact.sending': 'Sending...',
    'contact.required_fields': '* Required fields. Your data will be processed in accordance with GDPR.',
    'contact.placeholder.first_name': 'Your first name',
    'contact.placeholder.last_name': 'Your last name',
    'contact.placeholder.email': 'your.email@example.com',
    'contact.placeholder.phone': '+420 123 456 789',
    'contact.placeholder.company': 'Your company name',
    'contact.placeholder.message': 'Please describe your inquiry or request...',
    
    // Documents section
    'documents.title': 'Documents for Download',
    'documents.download_presentation': 'Download Presentation',
    'documents.download_brochure': 'Download Brochure',
    
    // Footer
    'footer.company': 'WASTen Star Holding B.V.',
    'footer.address': 'Burgemeester de Hesselleplein 31, 6411CH Heerlen, Netherlands',
    'footer.phone': 'Tel: +420 732 747 993',
    'footer.email': 'Email: radek.horenovsky@wasten.eu',
    'footer.rights': 'All rights reserved.',
    
    // Waste Management section
    'waste.title': 'Waste Management',
    'waste.description': 'Waste Management Financing of the purchase, acquisition, development, manufacturing, construction, installation, operation, distribution and maintenance of waste management facilities including: Waste handling and material recycling systems. Waste management will be limited to projects that aim to: i) support recycling in accordance with the EU waste hierarchy; ii) reduce emissions; or iii) increase resource efficiency. Material recycling systems will be limited to the recycling of paper, metal, glass, textile, plastics, organic waste and construction and demolition waste. The Bank will finance waste management projects only if they are in compliance with applicable EU legislation and EU member states. Waste management facilities relating to waste-to-energy will be financed only if they meet the technical screening criteria for the EU taxonomy (this is currently under preparation). The Bank does not expect to finance any waste management facilities relating to waste-to-energy given these strict criteria. Composting or anaerobic digestion of biodegradable waste.',
    
    // Renewable Energy section
    'renewable.title': 'Renewable Energy Sources',
    'renewable.description': 'Financing of the purchase, acquisition, development, manufacturing, construction, installation, operation, distribution and maintenance of renewable energy generation projects related to wind, solar, hydropower, biomass and hydrogen in accordance with the following criteria: Onshore solar photovoltaic generation and concentrated solar power (CSP) plants. CSP projects will be limited to those that generate at least 85% of the electricity from solar energy sources. Hydropower projects financed under the Framework will be either: i) run-of-river without an artificial reservoir or with low storage capacity; or ii) have power density greater than 5 W/m2 or emissions intensity below 100 gCO2e/kWh. Energy storage projects such as fuel cells will be connected to renewables. Manufacture of hydrogen through electrolysis powered by renewable energy, and equipment for the production and use of hydrogen powered by renewable energy. Bioenergy produced from anaerobic digestion or composting of agricultural and forestry residues, sewage sludge, biowaste such as bio soils and animal manure, fats and oils.',
    
    // Circular Economy section
    'circular.title': 'Circular Economy',
    'circular.description': 'Eco-efficient Circular Economy Adapted Products, Production Technologies and Processes category of eco-efficient products and production activities that increase resource efficiency. Onshore solar photovoltaic generation and concentrated solar power (CSP) plants. CSP projects will be limited to those that generate at least 85% of the electricity from solar energy sources. This can concern the following activities: Projects that extend the life cycle of products. This may include product reuse, repair, refurbishment and regeneration; integration of modular design or design for disassembly; and incorporation of take-back schemes or reverse logistics. Production technologies that use recycled resources, such as bio-based materials. The Bank has confirmed that the production of bio-based materials will be limited to those certified under the Roundtable on Sustainable Biomaterials. We intend to finance the following technologies: i) bio-based sorbents, ii) waste sanitation. Production of metal-based products with: inputs being scrap or recycled metal.',
  }
}

interface LanguageProviderProps {
  children: React.ReactNode
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('cs')

  // Načtení jazyka z localStorage při inicializaci
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language
    if (savedLanguage && (savedLanguage === 'cs' || savedLanguage === 'en')) {
      setLanguage(savedLanguage)
    }
  }, [])

  // Funkce pro přepínání jazyka
  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem('language', lang)
  }

  // Funkce pro získání překladu
  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}
