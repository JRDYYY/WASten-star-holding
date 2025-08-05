# Konfigurace emailového formuláře

## Jak nastavit odesílání emailů

Kontaktní formulář je nakonfigurován tak, aby odesílal zprávy na email `juraj.donoval1@gmail.com`.

### 1. Nastavení Gmail SMTP

Pro funkčnost je potřeba nakonfigurovat SMTP údaje v souboru `.env.local`:

```env
SMTP_USER=vas-email@gmail.com
SMTP_PASS=vase-app-heslo
```

### 2. Vytvoření App Password pro Gmail

1. Přihlaste se do svého Google účtu
2. Jděte do **Account Settings** → **Security**
3. Zapněte **2-Step Verification** (pokud už není zapnuto)
4. V sekci **2-Step Verification** klikněte na **App passwords**
5. Vyberte **Mail** a **Other (custom name)**
6. Zadejte název jako "WASTen Star Website"
7. Zkopírujte vygenerované 16-místné heslo
8. Použijte toto heslo jako `SMTP_PASS` v `.env.local`

### 3. Struktura emailu

Email obsahuje:
- Kontaktní údaje odesílatele
- Předmět dotazu
- Zprávu
- Automatické nastavení Reply-To na email odesílatele

### 4. Testování

Po nastavení environment proměnných restartujte development server:

```bash
npm run dev
```

Poté otestujte formulář na stránce `/kontakty`.

### 5. Alternativní SMTP servery

Místo Gmail můžete použít jiné SMTP servery upravením konfigurace v `src/app/api/contact/route.ts`.

## Bezpečnost

- Environment proměnné jsou automaticky skryty před klientem
- Formulář obsahuje základní validaci
- Email adresy jsou ověřovány na frontend i backend straně
