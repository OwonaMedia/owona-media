import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

export async function sendVerificationCode(email: string, code: string) {
  try {
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: email,
      subject: 'Ihr Verifizierungscode',
      html: `
        <h1>Willkommen bei Owona Media Agency</h1>
        <p>Ihr Verifizierungscode lautet: <strong>${code}</strong></p>
        <p>Dieser Code ist 10 Minuten gültig.</p>
      `,
    })
  } catch (error) {
    console.error('Fehler beim Senden der E-Mail:', error)
    throw error
  }
}

export async function sendPasswordResetLink(email: string, resetLink: string) {
  try {
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: email,
      subject: 'Passwort zurücksetzen',
      html: `
        <h1>Passwort zurücksetzen</h1>
        <p>Klicken Sie auf den folgenden Link, um Ihr Passwort zurückzusetzen:</p>
        <a href="${resetLink}">Passwort zurücksetzen</a>
        <p>Dieser Link ist 1 Stunde gültig.</p>
      `,
    })
  } catch (error) {
    console.error('Fehler beim Senden der E-Mail:', error)
    throw error
  }
}

export async function sendDownloadNotification(email: string, productName: string) {
  try {
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: email,
      subject: 'Neuer Download verfügbar',
      html: `
        <h1>Neuer Download verfügbar</h1>
        <p>Ihr Produkt "${productName}" steht zum Download bereit.</p>
        <p>Besuchen Sie Ihren Kundenbereich, um auf das Produkt zuzugreifen.</p>
      `,
    })
  } catch (error) {
    console.error('Fehler beim Senden der E-Mail:', error)
    throw error
  }
} 