import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { headers } from 'next/headers'

// Rate limiting store (in production, use Redis or external service)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>()

// Rate limiting configuration
const RATE_LIMIT = 3 // requests for quote form
const RATE_LIMIT_WINDOW = 30 * 60 * 1000 // 30 minutes

// Validation schema
const quoteFormSchema = z.object({
  // Company info
  companyName: z.string().min(2, 'Le nom de l\'entreprise est requis').max(200),
  companySize: z.enum(['1-10 employés', '11-50 employés', '51-200 employés', '201-500 employés', '500+ employés']),
  industry: z.string().min(2, 'Le secteur d\'activité est requis').max(100),
  
  // Services needed
  servicesNeeded: z.array(z.string()).min(1, 'Veuillez sélectionner au moins un service'),
  
  // Project details
  budgetRange: z.enum(['Moins de 5 000€', '5 000€ - 15 000€', '15 000€ - 50 000€', '50 000€ - 100 000€', 'Plus de 100 000€']),
  timeline: z.enum(['Urgent (< 1 mois)', 'Court terme (1-3 mois)', 'Moyen terme (3-6 mois)', 'Long terme (6+ mois)']),
  description: z.string().min(10, 'La description doit contenir au moins 10 caractères').max(5000),
  
  // Contact info
  contactName: z.string().min(2, 'Le nom du contact est requis').max(100),
  contactEmail: z.string().email('Adresse email invalide'),
  contactPhone: z.string().min(8, 'Numéro de téléphone requis').max(20),
  
  // Additional
  gdprConsent: z.boolean().refine(val => val === true, 'Le consentement RGPD est requis'),
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
          error: 'Trop de demandes de devis. Veuillez réessayer dans 30 minutes.',
          code: 'RATE_LIMITED'
        },
        { status: 429 }
      )
    }
    
    const body = await request.json()
    
    // Validate input
    const validationResult = quoteFormSchema.safeParse(body)
    
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
      companyName: sanitizeInput(data.companyName),
      companySize: data.companySize,
      industry: sanitizeInput(data.industry),
      servicesNeeded: data.servicesNeeded.map(service => sanitizeInput(service)),
      budgetRange: data.budgetRange,
      timeline: data.timeline,
      description: sanitizeInput(data.description),
      contactName: sanitizeInput(data.contactName),
      contactEmail: data.contactEmail.toLowerCase().trim(),
      contactPhone: sanitizeInput(data.contactPhone),
      gdprConsent: data.gdprConsent,
    }
    
    // Generate quote reference number
    const quoteRef = `DV${Date.now().toString().slice(-6)}`
    
    // TODO: Send email notifications and store in database
    console.log('Quote form submission:', {
      ...sanitizedData,
      quoteRef,
      ip,
      timestamp: new Date().toISOString()
    })
    
    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    return NextResponse.json({ 
      success: true,
      message: 'Demande de devis envoyée avec succès',
      quoteRef
    })
    
  } catch (error) {
    console.error('Quote form error:', error)
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