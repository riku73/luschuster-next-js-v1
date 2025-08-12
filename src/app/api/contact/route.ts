import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { headers } from 'next/headers'

// Rate limiting store (in production, use Redis or external service)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>()

// Rate limiting configuration
const RATE_LIMIT = 5 // requests
const RATE_LIMIT_WINDOW = 15 * 60 * 1000 // 15 minutes

// Validation schema
const contactFormSchema = z.object({
  name: z.string().min(2, 'Le nom doit contenir au moins 2 caractères').max(100),
  email: z.string().email('Adresse email invalide'),
  phone: z.string().optional(),
  company: z.string().max(200).optional(),
  subject: z.enum(['devis', 'info', 'support', 'maintenance', 'autre']),
  message: z.string().min(10, 'Le message doit contenir au moins 10 caractères').max(2000),
  csrfToken: z.string().min(1, 'Token CSRF manquant'),
})

function rateLimit(identifier: string): boolean {
  const now = Date.now()
  const windowStart = now - RATE_LIMIT_WINDOW
  
  // Clean up old entries
  for (const [key, value] of rateLimitStore) {
    if (value.resetTime < windowStart) {
      rateLimitStore.delete(key)
    }
  }
  
  const current = rateLimitStore.get(identifier) || { count: 0, resetTime: now }
  
  if (current.resetTime < windowStart) {
    current.count = 1
    current.resetTime = now + RATE_LIMIT_WINDOW
  } else {
    current.count += 1
  }
  
  rateLimitStore.set(identifier, current)
  
  return current.count <= RATE_LIMIT
}

function sanitizeInput(input: string): string {
  return input
    .replace(/[<>]/g, '')
    .trim()
}

export async function POST(request: NextRequest) {
  try {
    const headersList = await headers()
    const ip = headersList.get('x-forwarded-for') || 
              headersList.get('x-real-ip') || 
              'unknown'
    
    // Rate limiting
    if (!rateLimit(ip)) {
      return NextResponse.json(
        { 
          error: 'Trop de tentatives. Veuillez réessayer dans 15 minutes.',
          code: 'RATE_LIMITED'
        },
        { status: 429 }
      )
    }
    
    const body = await request.json()
    
    // Validate input
    const validationResult = contactFormSchema.safeParse(body)
    
    if (!validationResult.success) {
      return NextResponse.json(
        { 
          error: 'Données invalides',
          details: validationResult.error.issues.map(issue => ({
            field: issue.path.join('.'),
            message: issue.message
          }))
        },
        { status: 400 }
      )
    }
    
    const data = validationResult.data
    
    // Sanitize input data
    const sanitizedData = {
      name: sanitizeInput(data.name),
      email: data.email.toLowerCase().trim(),
      phone: data.phone ? sanitizeInput(data.phone) : undefined,
      company: data.company ? sanitizeInput(data.company) : undefined,
      subject: data.subject,
      message: sanitizeInput(data.message),
    }
    
    // TODO: Send email notification (implement with your email service)
    console.log('Contact form submission:', {
      ...sanitizedData,
      ip,
      timestamp: new Date().toISOString()
    })
    
    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    return NextResponse.json({ 
      success: true,
      message: 'Message envoyé avec succès'
    })
    
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { 
        error: 'Une erreur inattendue s\'est produite',
        code: 'INTERNAL_ERROR'
      },
      { status: 500 }
    )
  }
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Allow': 'POST',
      'Access-Control-Allow-Methods': 'POST',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  })
}