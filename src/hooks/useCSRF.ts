import { useState, useEffect } from 'react'

interface CSRFData {
  csrfToken: string
  sessionId: string
}

export function useCSRF() {
  const [csrfData, setCSRFData] = useState<CSRFData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchCSRFToken = async () => {
      try {
        const response = await fetch('/api/csrf', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        })

        if (!response.ok) {
          throw new Error('Failed to fetch CSRF token')
        }

        const data = await response.json()
        setCSRFData(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error')
      } finally {
        setLoading(false)
      }
    }

    fetchCSRFToken()
  }, [])

  const refreshToken = async () => {
    setLoading(true)
    setError(null)
    
    try {
      const response = await fetch('/api/csrf', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })

      if (!response.ok) {
        throw new Error('Failed to refresh CSRF token')
      }

      const data = await response.json()
      setCSRFData(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error')
    } finally {
      setLoading(false)
    }
  }

  return {
    csrfToken: csrfData?.csrfToken,
    sessionId: csrfData?.sessionId,
    loading,
    error,
    refreshToken
  }
}