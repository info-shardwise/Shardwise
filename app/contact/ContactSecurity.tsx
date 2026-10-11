'use client'

import Script from 'next/script'
import { useEffect, useRef, useState } from 'react'

type Turnstile = {
  render: (
    element: HTMLElement,
    options: {
      sitekey: string
      action: string
      callback: () => void
      'expired-callback': () => void
      'error-callback': () => void
    },
  ) => string
  remove: (id: string) => void
}

export default function ContactSecurity({ onReady }: { onReady: (ready: boolean) => void }) {
  const element = useRef<HTMLDivElement>(null)
  const [siteKey, setSiteKey] = useState('')
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState(false)
  useEffect(() => {
    const controller = new AbortController()
    fetch('/api/contact', { signal: controller.signal })
      .then(async (response) => {
        const config = await response.json()
        if (!response.ok || !config.siteKey) throw new Error('unavailable')
        setSiteKey(config.siteKey)
      })
      .catch(() => {
        if (!controller.signal.aborted) setError(true)
      })
    return () => controller.abort()
  }, [])
  useEffect(() => {
    const api = (window as Window & { turnstile?: Turnstile }).turnstile
    if (!loaded || !siteKey || !element.current || !api) return
    const id = api.render(element.current, {
      sitekey: siteKey,
      action: 'contact',
      callback: () => {
        setError(false)
        onReady(true)
      },
      'expired-callback': () => onReady(false),
      'error-callback': () => {
        onReady(false)
        setError(true)
      },
    })
    return () => {
      api.remove(id)
      onReady(false)
    }
  }, [loaded, siteKey, onReady])
  return (
    <>
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
        onReady={() => setLoaded(true)}
        onError={() => setError(true)}
      />
      <div ref={element} />
      {error && (
        <p role="alert" className="text-sm text-red-400">
          The security check could not load. Please reload this page to try again.
        </p>
      )}
    </>
  )
}
