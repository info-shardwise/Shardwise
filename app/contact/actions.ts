export interface ContactState {
  success: boolean
  message: string
}

export async function submitContactForm(
  _prevState: ContactState,
  formData: FormData,
): Promise<ContactState> {
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(
        Object.fromEntries(
          ['name', 'email', 'service', 'message', 'website', 'id']
            .map((key) => [key, formData.get(key)?.toString() || ''])
            .concat([['token', formData.get('cf-turnstile-response')?.toString() || '']]),
        ),
      ),
      signal: AbortSignal.timeout(60000),
    })
    const result = await response.json()
    return {
      success: response.ok && result.success === true,
      message:
        typeof result.message === 'string' ? result.message : 'Unable to submit. Please try again.',
    }
  } catch {
    return {
      success: false,
      message: 'We could not confirm receipt. Please check your connection and try again.',
    }
  }
}
