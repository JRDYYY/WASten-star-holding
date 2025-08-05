import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { firstName, lastName, email, phone, company, subject, message } = body

    // Validace povinných polí
    if (!firstName || !lastName || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Vyplňte prosím všechna povinná pole.' },
        { status: 400 }
      )
    }

    // Mapování předmětů
    const subjectMap: { [key: string]: string } = {
      'financovani': 'Financování projektů',
      'cirkularne-firmy': 'Cirkulární řešení pro firmy',
      'cirkularne-mesta': 'Cirkulární řešení pro města a obce',
      'analyzy': 'Strategické analýzy',
      'technicke-reseni': 'Technické řešení využití odpadů',
      'obecne': 'Obecný dotaz'
    }

    const subjectText = subjectMap[subject] || subject

    // HTML obsah emailu
    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>Nový kontakt z webu WASTen Star Holding</title>
      </head>
      <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #1e40af; border-bottom: 2px solid #1e40af; padding-bottom: 10px;">
            Nový dotaz z webu WASTen Star Holding
          </h2>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Kontaktní údaje:</h3>
            <p><strong>Jméno:</strong> ${firstName} ${lastName}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            ${phone ? `<p><strong>Telefon:</strong> ${phone}</p>` : ''}
            ${company ? `<p><strong>Společnost:</strong> ${company}</p>` : ''}
            <p><strong>Předmět:</strong> ${subjectText}</p>
          </div>

          <div style="background-color: #fff; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
            <h3 style="color: #374151; margin-top: 0;">Zpráva:</h3>
            <div style="white-space: pre-wrap; line-height: 1.6; color: #4b5563;">
${message}
            </div>
          </div>

          <div style="margin-top: 20px; padding: 15px; background-color: #ecfdf5; border-radius: 8px; border-left: 4px solid #10b981;">
            <p style="margin: 0; color: #065f46; font-size: 14px;">
              Tento email byl odeslán z kontaktního formuláře na webu WASTen Star Holding B.V.
            </p>
          </div>
        </div>
      </body>
      </html>
    `

    // Odeslání emailu přes Resend
    const data = await resend.emails.send({
      from: 'WASTen Star Web <onboarding@resend.dev>',
      to: ['juraj.donoval1@gmail.com'],
      subject: `Kontakt z webu - ${subjectText}`,
      html: htmlContent,
      replyTo: email
    })

    console.log('Email odeslán úspěšně:', data)

    return NextResponse.json({ 
      success: true, 
      message: 'Děkujeme za vaši zprávu.' 
    })

  } catch (error) {
    console.error('Chyba při odesílání emailu:', error)
    return NextResponse.json(
      { error: 'Při odesílání zprávy došlo k chybě.' },
      { status: 500 }
    )
  }
}
