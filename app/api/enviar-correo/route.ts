import { NextResponse } from "next/server"
import axios from "axios"

export async function POST(req: Request) {
  const { nombre, correo, mensaje } = await req.json()

  // Validación de variables
  const apiKey = process.env.BREVO_API_KEY
  const templateId = process.env.BREVO_TEMPLATE_ID
  const toEmail = process.env.BREVO_EMAIL_TO

  if (!apiKey || !templateId || !toEmail) {
    return NextResponse.json(
      { error: "Faltan variables de entorno BREVO_API_KEY, BREVO_TEMPLATE_ID o BREVO_EMAIL_TO" },
      { status: 500 }
    )
  }

  try {
    const response = await axios.post(
      "https://api.brevo.com/v3/smtp/email",
      {
        sender: {
          name: "HB Studios",
          email: "hbstudiosoficial14@gmail.com" // mismo que usaste para validar en Brevo
        },
        to: [{ email: toEmail }],
        templateId: parseInt(templateId),
        params: { nombre, correo, mensaje }
      },
      {
        headers: {
          "api-key": apiKey,
          "Content-Type": "application/json",
          Accept: "application/json"
        }
      }
    )

    return NextResponse.json({ success: true, data: response.data })
  } catch (error: any) {
    console.error("Error al enviar correo:", error.response?.data || error.message)
    return NextResponse.json(
      { error: "Error al enviar el correo", detalle: error.response?.data || error.message },
      { status: 500 }
    )
  }
}
