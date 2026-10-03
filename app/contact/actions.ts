export interface ContactState {
  success: boolean
  message: string
}

export async function submitContactForm(
  _prevState: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const name = formData.get('name')?.toString().trim()
  const email = formData.get('email')?.toString().trim()
  const service = formData.get('service')?.toString().trim()
  const message = formData.get('message')?.toString().trim()

  // Basic validation
  if (!name || !email || !message) {
    return {
      success: false,
      message: 'Please fill out all required fields.',
    }
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return {
      success: false,
      message: 'Please enter a valid email address.',
    }
  }

  const apiKey = process.env.RESEND_API_KEY

  // When API key is not configured, simulate success gracefully in preview
  if (!apiKey || apiKey === 're_placeholder_key') {
    return {
      success: true,
      message: 'Inquiry received! We will get in touch within 24 hours.',
    }
  }

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Shardwise Inquiries <noreply@shardwise.com>',
        to: ['contact@shardwise.com'],
        subject: `New Project Inquiry from ${name} (${service || 'General'})`,
        text: `Name: ${name}\nEmail: ${email}\nService: ${service}\n\nMessage:\n${message}`,
      }),
    })

    if (!res.ok) {
      throw new Error('Failed to send message via Resend.')
    }

    return {
      success: true,
      message: 'Thank you! Your message has been sent successfully.',
    }
  } catch {
    return {
      success: false,
      message: 'Failed to send message. Please contact us directly at contact@shardwise.com.',
    }
  }
}
