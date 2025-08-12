import { NextRequest, NextResponse } from 'next/server'
import { generateCSRFToken, getSessionId } from '@/lib/csrf'

export async function GET(request: NextRequest) {
  const sessionId = getSessionId(request)
  const csrfToken = generateCSRFToken(sessionId)
  
  return NextResponse.json({ 
    csrfToken,
    sessionId
  }, {
    headers: {
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      'Pragma': 'no-cache',
      'Expires': '0'
    }
  })
}