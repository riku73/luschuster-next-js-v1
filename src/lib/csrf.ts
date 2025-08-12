import { NextRequest } from 'next/server'
import crypto from 'crypto'

// Simple CSRF token generation and validation
// In production, consider using a more robust solution like iron-session

const CSRF_SECRET = process.env.CSRF_SECRET || 'luschuster-csrf-secret-2024'
const TOKEN_EXPIRY = 24 * 60 * 60 * 1000 // 24 hours

interface CSRFTokenData {
  timestamp: number
  sessionId: string
}

export function generateCSRFToken(sessionId?: string): string {
  const data: CSRFTokenData = {
    timestamp: Date.now(),
    sessionId: sessionId || crypto.randomUUID()
  }
  
  const dataString = JSON.stringify(data)
  const hmac = crypto.createHmac('sha256', CSRF_SECRET)
  hmac.update(dataString)
  const signature = hmac.digest('hex')
  
  const token = Buffer.from(dataString + '.' + signature).toString('base64')
  return token
}

export function validateCSRFToken(token: string, sessionId?: string): boolean {
  try {
    const decoded = Buffer.from(token, 'base64').toString('utf-8')
    const [dataString, signature] = decoded.split('.')
    
    if (!dataString || !signature) {
      return false
    }
    
    // Verify signature
    const hmac = crypto.createHmac('sha256', CSRF_SECRET)
    hmac.update(dataString)
    const expectedSignature = hmac.digest('hex')
    
    if (signature !== expectedSignature) {
      return false
    }
    
    // Parse and validate data
    const data: CSRFTokenData = JSON.parse(dataString)
    
    // Check expiry
    if (Date.now() - data.timestamp > TOKEN_EXPIRY) {
      return false
    }
    
    // Check session if provided
    if (sessionId && data.sessionId !== sessionId) {
      return false
    }
    
    return true
  } catch (error) {
    console.error('CSRF token validation error:', error)
    return false
  }
}

export function getSessionId(request: NextRequest): string {
  // Try to get session ID from headers or generate new one
  const existingSessionId = request.headers.get('x-session-id')
  return existingSessionId || crypto.randomUUID()
}