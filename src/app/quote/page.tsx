"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Upload, FileText, Clock, Award } from "lucide-react"

export default function Quote() {
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    // Company info
    companyName: "",
    companySize: "",
    industry: "",
    
    // Services needed
    servicesNeeded: [] as string[],
    
    // Project details
    budgetRange: "",
    timeline: "",
    description: "",
    
    // Contact info
    contactName: "",
    contactEmail: "",
    contactPhone: "",
    
    // Additional
    gdprConsent: false,
    documents: null as FileList | null
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    if (type === "checkbox") {
      const target = e.target as HTMLInputElement
      if (name === "servicesNeeded") {
        const currentServices = formData.servicesNeeded
        if (target.checked) {
          setFormData(prev => ({
            ...prev,
            servicesNeeded: [...currentServices, value]
          }))
        } else {
          setFormData(prev => ({
            ...prev,
            servicesNeeded: currentServices.filter(service => service !== value)
          }))
        }
      } else if (name === "gdprConsent") {
        setFormData(prev => ({
          ...prev,
          gdprConsent: target.checked
        }))
      }
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }))
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      documents: e.target.files
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitted(true)
  }

  const nextStep = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1)
  }

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1)
  }

  const services = [
    "Télécommunications d'entreprise",
    "Infrastructure réseau", 
    "Solutions VoIP",
    "Maintenance et support",
    "Consulting télécoms",
    "Migration vers le cloud",
    "Sécurisation réseau",
    "Autre (précisez dans la description)"
  ]

  const companySizes = [
    "1-10 employés",
    "11-50 employés", 
    "51-200 employés",
    "201-500 employés",
    "500+ employés"
  ]

  const budgetRanges = [
    "Moins de 5 000€",
    "5 000€ - 15 000€",
    "15 000€ - 50 000€", 
    "50 000€ - 100 000€",
    "Plus de 100 000€"
  ]

  const timelines = [
    "Urgent (< 1 mois)",
    "Court terme (1-3 mois)",
    "Moyen terme (3-6 mois)",
    "Long terme (6+ mois)"
  ]

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="max-w-lg mx-auto text-center p-8">
          <div className="mx-auto mb-6 w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
            <CheckCircle className="h-10 w-10 text-green-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Demande envoyée !</h2>
          <p className="text-gray-600 mb-6">
            Merci pour votre demande de devis. Notre équipe commerciale vous contactera 
            sous 24h pour programmer un audit gratuit de vos besoins.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg mb-6">
            <h3 className="font-semibold text-blue-900 mb-2">Prochaines étapes :</h3>
            <ul className="text-sm text-blue-700 space-y-1 text-left">
              <li>• Prise de contact sous 24h</li>
              <li>• Planification d'un audit gratuit</li>
              <li>• Proposition commerciale détaillée</li>
              <li>• Présentation de la solution recommandée</li>
            </ul>
          </div>
          <p className="text-sm text-gray-500">
            Numéro de demande : #DV{Date.now().toString().slice(-6)}
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Demande de devis
            </h1>
            <p className="text-xl text-blue-100 mb-6">
              Obtenez une proposition personnalisée pour votre projet télécommunications
            </p>
            <div className="flex justify-center items-center space-x-4 text-sm">
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                <span>Réponse sous 24h</span>
              </div>
              <div className="flex items-center">
                <Award className="h-4 w-4 mr-1" />
                <span>Audit gratuit inclus</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Progress Indicator */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between">
              {[1, 2, 3, 4].map((step) => (
                <div key={step} className="flex items-center">
                  <div className={`
                    w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold
                    ${currentStep >= step ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'}
                  `}>
                    {step}
                  </div>
                  {step < 4 && (
                    <div className={`
                      h-1 w-24 ml-2 
                      ${currentStep > step ? 'bg-blue-600' : 'bg-gray-200'}
                    `}></div>
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-2 text-sm text-gray-600">
              <span>Entreprise</span>
              <span>Services</span>
              <span>Projet</span>
              <span>Contact</span>
            </div>
          </div>
        </div>
      </div>

      {/* Form */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <form onSubmit={handleSubmit}>
              {/* Step 1: Company Information */}
              {currentStep === 1 && (
                <Card>
                  <CardHeader>
                    <CardTitle>Informations sur votre entreprise</CardTitle>
                    <CardDescription>
                      Aidez-nous à mieux comprendre votre organisation
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <Label htmlFor="companyName">Nom de l'entreprise *</Label>
                      <Input
                        id="companyName"
                        name="companyName"
                        required
                        value={formData.companyName}
                        onChange={handleInputChange}
                        placeholder="Nom de votre entreprise"
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="companySize">Taille de l'entreprise *</Label>
                        <select
                          id="companySize"
                          name="companySize"
                          required
                          value={formData.companySize}
                          onChange={handleInputChange}
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        >
                          <option value="">Sélectionnez</option>
                          {companySizes.map(size => (
                            <option key={size} value={size}>{size}</option>
                          ))}
                        </select>
                      </div>
                      
                      <div>
                        <Label htmlFor="industry">Secteur d'activité *</Label>
                        <Input
                          id="industry"
                          name="industry"
                          required
                          value={formData.industry}
                          onChange={handleInputChange}
                          placeholder="Ex: Finance, IT, Commerce..."
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Step 2: Services Needed */}
              {currentStep === 2 && (
                <Card>
                  <CardHeader>
                    <CardTitle>Services demandés</CardTitle>
                    <CardDescription>
                      Sélectionnez tous les services qui vous intéressent
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {services.map(service => (
                        <div key={service} className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id={service}
                            name="servicesNeeded"
                            value={service}
                            checked={formData.servicesNeeded.includes(service)}
                            onChange={handleInputChange}
                            className="rounded border-gray-300"
                          />
                          <Label htmlFor={service} className="text-sm">{service}</Label>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Step 3: Project Details */}
              {currentStep === 3 && (
                <Card>
                  <CardHeader>
                    <CardTitle>Détails du projet</CardTitle>
                    <CardDescription>
                      Décrivez vos besoins et contraintes
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="budgetRange">Fourchette budgétaire *</Label>
                        <select
                          id="budgetRange"
                          name="budgetRange"
                          required
                          value={formData.budgetRange}
                          onChange={handleInputChange}
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        >
                          <option value="">Sélectionnez</option>
                          {budgetRanges.map(budget => (
                            <option key={budget} value={budget}>{budget}</option>
                          ))}
                        </select>
                      </div>
                      
                      <div>
                        <Label htmlFor="timeline">Délai souhaité *</Label>
                        <select
                          id="timeline"
                          name="timeline"
                          required
                          value={formData.timeline}
                          onChange={handleInputChange}
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        >
                          <option value="">Sélectionnez</option>
                          {timelines.map(timeline => (
                            <option key={timeline} value={timeline}>{timeline}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="description">Description du besoin *</Label>
                      <Textarea
                        id="description"
                        name="description"
                        required
                        value={formData.description}
                        onChange={handleInputChange}
                        placeholder="Décrivez votre projet, vos besoins spécifiques, contraintes techniques..."
                        rows={5}
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="documents">Documents (optionnel)</Label>
                      <div className="mt-2">
                        <div className="flex items-center justify-center w-full">
                          <label htmlFor="documents" className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                              <Upload className="w-8 h-8 mb-2 text-gray-500" />
                              <p className="text-sm text-gray-500">Cahier des charges, plans, specifications...</p>
                              <p className="text-xs text-gray-500">PDF, DOC, XLS (Max 10MB)</p>
                            </div>
                            <input
                              id="documents"
                              name="documents"
                              type="file"
                              multiple
                              accept=".pdf,.doc,.docx,.xls,.xlsx"
                              onChange={handleFileChange}
                              className="hidden"
                            />
                          </label>
                        </div>
                        {formData.documents && (
                          <div className="mt-2 text-sm text-gray-600">
                            {Array.from(formData.documents).map((file, index) => (
                              <div key={index} className="flex items-center">
                                <FileText className="h-4 w-4 mr-1" />
                                {file.name}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Step 4: Contact Information */}
              {currentStep === 4 && (
                <Card>
                  <CardHeader>
                    <CardTitle>Vos coordonnées</CardTitle>
                    <CardDescription>
                      Comment pouvons-nous vous contacter ?
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <Label htmlFor="contactName">Nom du contact *</Label>
                      <Input
                        id="contactName"
                        name="contactName"
                        required
                        value={formData.contactName}
                        onChange={handleInputChange}
                        placeholder="Votre nom complet"
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="contactEmail">Email *</Label>
                        <Input
                          id="contactEmail"
                          name="contactEmail"
                          type="email"
                          required
                          value={formData.contactEmail}
                          onChange={handleInputChange}
                          placeholder="votre@email.com"
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="contactPhone">Téléphone *</Label>
                        <Input
                          id="contactPhone"
                          name="contactPhone"
                          type="tel"
                          required
                          value={formData.contactPhone}
                          onChange={handleInputChange}
                          placeholder="+352 XXX XXX XXX"
                        />
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-start space-x-3">
                        <input
                          type="checkbox"
                          id="gdprConsent"
                          name="gdprConsent"
                          required
                          checked={formData.gdprConsent}
                          onChange={handleInputChange}
                          className="rounded border-gray-300 mt-1"
                        />
                        <Label htmlFor="gdprConsent" className="text-sm text-gray-700">
                          J'accepte que mes données personnelles soient utilisées pour traiter ma demande 
                          de devis conformément à notre politique de confidentialité. Ces données ne seront 
                          pas transmises à des tiers et seront supprimées après traitement de votre demande 
                          si elle ne donne pas lieu à un contrat. *
                        </Label>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Navigation */}
              <div className="flex justify-between mt-8">
                <Button
                  type="button"
                  variant="outline"
                  onClick={prevStep}
                  disabled={currentStep === 1}
                >
                  Précédent
                </Button>
                
                {currentStep < 4 ? (
                  <Button
                    type="button"
                    onClick={nextStep}
                    className="bg-blue-600 hover:bg-blue-700"
                  >
                    Suivant
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    className="bg-orange-500 hover:bg-orange-600"
                    disabled={!formData.gdprConsent}
                  >
                    Envoyer la demande
                  </Button>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="mx-auto mb-4 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Clock className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Réponse rapide</h3>
                <p className="text-gray-600 text-sm">Nous vous contactons sous 24h ouvrées</p>
              </div>
              <div>
                <div className="mx-auto mb-4 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Award className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Audit gratuit</h3>
                <p className="text-gray-600 text-sm">Analyse de votre infrastructure sans engagement</p>
              </div>
              <div>
                <div className="mx-auto mb-4 w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Devis détaillé</h3>
                <p className="text-gray-600 text-sm">Proposition technique et commerciale complète</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}