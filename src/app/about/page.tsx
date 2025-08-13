"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Users, Shield, Clock, MapPin, CheckCircle, Zap, ArrowDown } from "lucide-react"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"

export default function About() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])
  
  const milestones = [
    {
      year: "1988",
      title: "Création de l'entreprise",
      description: "Fondation de Luschuster Communications SA par des passionnés de télécommunications"
    },
    {
      year: "1995",
      title: "Agrément P&T Luxembourg",
      description: "Obtention des certifications officielles pour l'installation d'équipements télécoms"
    },
    {
      year: "2005",
      title: "Expansion des services",
      description: "Développement de l'expertise en infrastructure réseau et solutions IP"
    },
    {
      year: "2015",
      title: "Révolution VoIP",
      description: "Spécialisation dans les solutions de téléphonie sur IP et communications unifiées"
    },
    {
      year: "2025",
      title: "Innovation continue",
      description: "Solutions cloud et technologies émergentes pour l'entreprise du futur"
    }
  ]

  const team = [
    {
      name: "Marc Luschuster",
      role: "Directeur Général",
      description: "37 ans d'expérience dans les télécommunications, expert en solutions d'entreprise"
    },
    {
      name: "Sophie Muller",
      role: "Responsable Technique",
      description: "Ingénieure certifiée Cisco, spécialiste infrastructure réseau et VoIP"
    },
    {
      name: "Jean-Paul Weber",
      role: "Chef de Projet",
      description: "15 ans d'expérience en gestion de projets télécoms et formation client"
    }
  ]

  const certifications = [
    {
      title: "Agréé P&T Luxembourg",
      description: "Certification officielle pour l'installation et maintenance des équipements de télécommunications au Luxembourg",
      icon: Shield
    },
    {
      title: "Partenaire Cisco",
      description: "Partenaire certifié Cisco pour les solutions réseau, sécurité et communications unifiées",
      icon: Award
    },
    {
      title: "Conformité RGPD",
      description: "Respect total des réglementations européennes sur la protection des données personnelles",
      icon: CheckCircle
    },
    {
      title: "ISO 27001",
      description: "Certification sécurité informatique pour la gestion des systèmes d'information",
      icon: Shield
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 md:py-40 flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white overflow-hidden">
        {/* Simplified Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -inset-10 opacity-20">
            <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
          </div>
        </div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-20" 
             style={{
               backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
             }}
        ></div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <Badge className="mb-6 bg-blue-600/20 text-blue-100 border-blue-400/30 hover:bg-blue-600/30 transition-colors">
              <Zap className="w-4 h-4 mr-2" />
              37 ans d'excellence au Luxembourg
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent leading-tight">
              L'expertise qui fait
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                la différence
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Depuis 1988, nous accompagnons les entreprises luxembourgeoises dans leur transformation digitale. 
              <strong className="text-white"> Une passion pour l'innovation</strong> 
              et un engagement total pour l'excellence technique.
            </p>

            <div className="flex justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white border-0 h-14 px-8 text-lg font-semibold shadow-2xl">
                <Link href="/services" className="flex items-center">
                  Découvrir nos services
                  <ArrowDown className="ml-2 h-5 w-5 rotate-[-90deg]" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <Badge className="mb-6 bg-blue-50 text-blue-700 border-blue-200">
                <Clock className="w-4 h-4 mr-2" />
                Notre Histoire
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                37 ans d'innovation
                <span className="block text-blue-600">au service du Luxembourg</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Découvrez l'histoire d'une entreprise familiale devenue référence 
                dans les télécommunications d'entreprise au Grand-Duché
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                  <p>
                    Depuis 1988, <strong className="text-gray-900">Luschuster Communications SA</strong> accompagne 
                    les entreprises luxembourgeoises dans leur transformation digitale. Née de la passion 
                    de ses fondateurs pour les technologies de communication, notre société s'est imposée 
                    comme un acteur incontournable du secteur.
                  </p>
                  <p>
                    Forte de ses <strong className="text-blue-600">37 années d'expérience</strong>, notre équipe 
                    de techniciens agréés P&T Luxembourg maîtrise parfaitement les enjeux spécifiques 
                    du marché local tout en restant à la pointe des innovations technologiques mondiales.
                  </p>
                  <p>
                    Aujourd'hui, nous sommes fiers d'avoir accompagné plus de <strong className="text-orange-600">500 entreprises</strong> 
                    dans leur modernisation technologique, de la PME familiale aux grands groupes internationaux 
                    implantés au Luxembourg.
                  </p>
                </div>
              </motion.div>
              
              <motion.div 
                className="relative"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="bg-gray-200 rounded-xl overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                    alt="Équipe Luschuster Communications au travail" 
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                      <h3 className="font-semibold text-gray-900 mb-1">Notre équipe d'experts</h3>
                      <p className="text-sm text-gray-600">Techniciens certifiés et agréés P&T Luxembourg</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <Badge className="mb-6 bg-orange-50 text-orange-700 border-orange-200">
              <MapPin className="w-4 h-4 mr-2" />
              Notre Évolution
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              37 ans d'innovation
              <span className="block text-blue-600">continue</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Plus de trois décennies d'innovation et d'adaptation aux évolutions technologiques 
              pour rester à la pointe du secteur
            </p>
          </motion.div>
          
          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-600 via-blue-400 to-blue-200"></div>
              
              <div className="space-y-16">
                {milestones.map((milestone, index) => (
                  <motion.div 
                    key={index} 
                    className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                      <div className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 border-0 relative overflow-hidden group">
                        <div className={`absolute inset-0 bg-gradient-to-br ${index % 2 === 0 ? 'from-blue-500 to-blue-600' : 'from-purple-500 to-purple-600'} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                        <div className="relative z-10">
                          <div className="text-3xl font-bold text-blue-600 mb-3">{milestone.year}</div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors">{milestone.title}</h3>
                          <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Timeline dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <Badge className="mb-6 bg-orange-50 text-orange-700 border-orange-200">
                <Users className="w-4 h-4 mr-2" />
                Notre Équipe
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Experts passionnés au service
                <span className="block text-blue-600">de votre réussite</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Une équipe de professionnels agréés et certifiés, dédiée à l'excellence 
                technologique et à votre satisfaction client
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="group"
                >
                  <Card className="text-center h-full shadow-xl hover:shadow-2xl transition-all duration-300 border-0 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                    <CardHeader className="relative z-10">
                      <div className="mx-auto mb-6 w-24 h-24 bg-gradient-to-br from-blue-500 to-orange-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <Users className="h-10 w-10 text-white" />
                      </div>
                      <CardTitle className="text-2xl text-gray-900 group-hover:text-blue-700 transition-colors mb-2">{member.name}</CardTitle>
                      <div className="text-orange-600 font-semibold text-lg mb-4">{member.role}</div>
                    </CardHeader>
                    <CardContent className="relative z-10">
                      <p className="text-gray-600 leading-relaxed">{member.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <Badge className="mb-6 bg-green-50 text-green-700 border-green-200">
                <Award className="w-4 h-4 mr-2" />
                Certifications & Agréments
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Excellence reconnue
                <span className="block text-blue-600">et certifiée</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Nos certifications garantissent la qualité et la fiabilité de nos services 
                avec des partenariats avec les leaders technologiques
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="group"
                >
                  <Card className="text-center h-full shadow-xl hover:shadow-2xl transition-all duration-300 bg-white border-2 hover:border-blue-200 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-green-600 opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                    <CardHeader className="relative z-10">
                      <div className="mx-auto mb-6 p-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full w-fit shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <cert.icon className="h-8 w-8 text-white" />
                      </div>
                      <CardTitle className="text-xl text-gray-900 group-hover:text-blue-700 transition-colors mb-3">{cert.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="relative z-10">
                      <p className="text-gray-600 leading-relaxed">{cert.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <Badge className="mb-6 bg-purple-50 text-purple-700 border-purple-200">
                <Shield className="w-4 h-4 mr-2" />
                Nos Valeurs
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Les principes qui nous guident
                <span className="block text-blue-600">au quotidien</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Des valeurs fondamentales qui orientent notre action quotidienne 
                et nos relations clients depuis 37 ans
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="text-center group"
              >
                <Card className="h-full p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-0 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="mx-auto mb-6 p-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full w-fit shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Award className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4 group-hover:text-blue-700 transition-colors">Excellence technique</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Nous restons à la pointe des technologies et maintenons les plus hauts standards 
                      de qualité dans nos interventions.
                    </p>
                  </div>
                </Card>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="text-center group"
              >
                <Card className="h-full p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-0 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-orange-600 opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="mx-auto mb-6 p-6 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full w-fit shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Users className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4 group-hover:text-orange-700 transition-colors">Proximité client</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Une relation de confiance basée sur l'écoute, la réactivité et un service 
                      personnalisé adapté à chaque entreprise.
                    </p>
                  </div>
                </Card>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="text-center group"
              >
                <Card className="h-full p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-0 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-green-600 opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="mx-auto mb-6 p-6 bg-gradient-to-br from-green-500 to-green-600 rounded-full w-fit shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Shield className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4 group-hover:text-green-700 transition-colors">Fiabilité</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Des solutions robustes, un support continu et des engagements tenus pour 
                      garantir la continuité de vos activités.
                    </p>
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <Badge className="mb-6 bg-blue-50 text-blue-700 border-blue-200">
                <MapPin className="w-4 h-4 mr-2" />
                Notre Localisation
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Au cœur du
                <span className="block text-blue-600">Luxembourg</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Basés à Luxembourg-ville, nous intervenons sur tout le territoire luxembourgeois 
                et dans la Grande Région avec une proximité unique
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto"
            >
              <Card className="shadow-xl hover:shadow-2xl transition-all duration-300 border-0 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                <CardHeader className="text-center relative z-10">
                  <div className="mx-auto mb-6 w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                    <MapPin className="h-10 w-10 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-gray-900 mb-4">Luschuster Communications SA</CardTitle>
                </CardHeader>
                <CardContent className="text-center relative z-10">
                  <div className="space-y-3 text-gray-700 text-lg">
                    <p className="font-semibold text-gray-900">123 Route d'Esch</p>
                    <p className="font-semibold text-gray-900">L-1470 Luxembourg</p>
                    <div className="pt-4 border-t border-gray-200 space-y-2">
                      <p>
                        <span className="font-semibold text-blue-600">Téléphone:</span> +352 27 86 21 30
                      </p>
                      <p>
                        <span className="font-semibold text-blue-600">Email:</span> info@luschuster.lu
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-blue-900 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%2523ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22m36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Prêt à nous faire confiance ?
            </h2>
            <p className="text-xl mb-12 text-blue-100 max-w-3xl mx-auto">
              Rejoignez les 500+ entreprises qui font confiance à notre expertise 
              pour leurs télécommunications depuis 37 ans
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 h-14 px-8 text-lg font-semibold shadow-2xl">
                <Link href="/quote">Demander un devis</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-white text-blue-900 bg-white hover:bg-gray-100 hover:text-blue-800 h-14 px-8 text-lg font-semibold transition-all duration-300">
                <Link href="/contact">Nous rencontrer</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}