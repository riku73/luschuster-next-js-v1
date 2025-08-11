"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: "Adresse",
      details: [
        "Luschuster Communications SA",
        "123 Route d'Esch",
        "L-1470 Luxembourg"
      ]
    },
    {
      icon: Phone,
      title: "Téléphone",
      details: [
        "Standard: +352 27 86 21 30",
        "Support: +352 27 86 21 31",
        "Urgences: +352 691 234 567"
      ]
    },
    {
      icon: Mail,
      title: "Email",
      details: [
        "info@luschuster.lu",
        "support@luschuster.lu",
        "commercial@luschuster.lu"
      ]
    },
    {
      icon: Clock,
      title: "Horaires",
      details: [
        "Lundi - Vendredi: 8h00 - 17h30",
        "Samedi: 9h00 - 12h00",
        "Support 24/7 disponible"
      ]
    }
  ]

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-md mx-auto text-center p-8">
          <div className="mx-auto mb-4 w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Message envoyé !</h2>
          <p className="text-gray-600 mb-6">
            Merci pour votre message. Notre équipe vous contactera dans les plus brefs délais.
          </p>
          <Button 
            onClick={() => {
              setIsSubmitted(false)
              setFormData({
                name: "",
                email: "",
                phone: "",
                company: "",
                subject: "",
                message: ""
              })
            }}
            variant="outline"
          >
            Envoyer un autre message
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Contactez-nous
            </h1>
            <p className="text-xl md:text-2xl text-blue-100">
              Notre équipe d'experts est à votre disposition pour répondre à vos questions 
              et vous accompagner dans vos projets télécommunications.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Nos coordonnées
              </h2>
              <p className="text-xl text-gray-600">
                Plusieurs moyens pour nous joindre selon vos préférences
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {contactInfo.map((info, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="mx-auto mb-4 p-3 bg-blue-100 rounded-full w-fit">
                      <info.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-lg">{info.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-1">
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-gray-600 text-sm">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Form */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Envoyez-nous un message
                </h2>
                <p className="text-gray-600 mb-8">
                  Remplissez ce formulaire et nous vous répondrons rapidement. 
                  Pour les urgences, appelez directement notre support.
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Nom complet *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Votre nom"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="votre@email.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Téléphone</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+352 XXX XXX XXX"
                      />
                    </div>
                    <div>
                      <Label htmlFor="company">Entreprise</Label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Nom de votre entreprise"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="subject">Sujet *</Label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      <option value="">Sélectionnez un sujet</option>
                      <option value="devis">Demande de devis</option>
                      <option value="info">Informations générales</option>
                      <option value="support">Support technique</option>
                      <option value="maintenance">Maintenance</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Décrivez votre projet ou votre demande..."
                      rows={5}
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-blue-600 hover:bg-blue-700"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>Envoi en cours...</>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Envoyer le message
                      </>
                    )}
                  </Button>
                </form>
              </div>
              
              {/* Map and Info */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Notre localisation
                </h3>
                
                {/* Placeholder for map */}
                <div className="bg-gray-200 rounded-lg h-64 mb-6 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <MapPin className="h-8 w-8 mx-auto mb-2" />
                    <p>Carte interactive</p>
                    <p className="text-sm">123 Route d'Esch, Luxembourg</p>
                  </div>
                </div>
                
                {/* Additional Info */}
                <Card>
                  <CardHeader>
                    <CardTitle>Besoin d'un rendez-vous ?</CardTitle>
                    <CardDescription>
                      Nous pouvons nous déplacer chez vous pour un audit gratuit de votre infrastructure
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button asChild className="w-full bg-orange-500 hover:bg-orange-600">
                      <Link href="/quote">
                        Planifier un audit gratuit
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="mt-6">
                  <CardHeader>
                    <CardTitle>Support d'urgence</CardTitle>
                    <CardDescription>
                      En cas de panne critique, notre équipe intervient 24h/24
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-red-600">+352 691 234 567</div>
                      <p className="text-sm text-gray-600">Ligne d'urgence 24/7</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Questions fréquentes
              </h2>
              <p className="text-xl text-gray-600">
                Réponses aux questions les plus courantes de nos clients
              </p>
            </div>
            
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Quel est le délai d'intervention pour un audit ?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Nous planifions généralement les audits gratuits sous 48h. Pour les urgences, 
                    nous intervenons dans les 4 heures suivant votre appel.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Proposez-vous des contrats de maintenance ?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Oui, nous proposons différents niveaux de contrats de maintenance adaptés à vos besoins, 
                    du support basique au support premium 24/7 avec intervention garantie.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Intervenez-vous en dehors du Luxembourg ?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Nous intervenons principalement au Luxembourg mais pouvons étendre nos services 
                    dans la Grande Région (Belgique, France, Allemagne) pour les projets importants.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}