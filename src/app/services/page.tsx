"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Network, HeadphonesIcon, Wrench, Lightbulb, ArrowRight, Zap, ArrowDown, Award, Shield, CheckCircle } from "lucide-react"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"

export default function Services() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])
  const services = [
    {
      title: "Télécommunications d'entreprise",
      description: "Standards téléphoniques modernes, lignes dédiées et solutions mobiles pour optimiser vos communications d'entreprise.",
      icon: Phone,
      href: "/services/telecommunications",
      features: [
        "Standards téléphoniques IP",
        "Lignes SIP et analogiques",
        "Solutions mobiles d'entreprise",
        "Numéros spéciaux et services premium"
      ]
    },
    {
      title: "Infrastructure réseau",
      description: "Conception, déploiement et optimisation de votre infrastructure réseau pour une connectivité fiable et performante.",
      icon: Network,
      href: "/services/infrastructure",
      features: [
        "Architecture réseau sur mesure",
        "Equipements Cisco et HP",
        "Sécurisation et firewall",
        "Optimisation des performances"
      ]
    },
    {
      title: "Solutions VoIP",
      description: "Migration vers la téléphonie IP avec des solutions modernes adaptées aux besoins de votre entreprise.",
      icon: HeadphonesIcon,
      href: "/services/voip",
      features: [
        "Migration progressive vers IP",
        "Softphones et applications mobiles",
        "Intégration CRM et ERP",
        "Conférences et collaboration"
      ]
    },
    {
      title: "Maintenance et support",
      description: "Support technique 24/7, contrats de maintenance préventive et monitoring proactif de vos équipements.",
      icon: Wrench,
      href: "/services/maintenance",
      features: [
        "Support technique 24/7",
        "Maintenance préventive",
        "Monitoring en temps réel",
        "Intervention d'urgence"
      ]
    },
    {
      title: "Consulting télécoms",
      description: "Audit de votre infrastructure existante et recommandations d'évolution pour optimiser vos investissements.",
      icon: Lightbulb,
      href: "/services/consulting",
      features: [
        "Audit infrastructure complète",
        "Étude de faisabilité",
        "Plan d'évolution sur mesure",
        "Accompagnement projet"
      ]
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 md:py-40 flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white overflow-hidden">
        {/* Simplified Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -inset-10 opacity-20">
            <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-green-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-500"></div>
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
              <Network className="w-4 h-4 mr-2" />
              Solutions d'avant-garde
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent leading-tight">
              Services télécoms
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                nouvelle génération
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Seul opérateur familial agréé P&T depuis 37 ans au Luxembourg. Solutions complètes 
              <strong className="text-white"> avec économies moyennes de 30% garanties</strong> 
              - De l'audit gratuit à la maintenance 24/7.
            </p>

            <div className="flex justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white border-0 h-14 px-8 text-lg font-semibold shadow-2xl">
                <Link href="#services" className="flex items-center">
                  Découvrir nos solutions d'économies
                  <ArrowDown className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-200">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-blue-100 rounded-lg">
                      <service.icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
                  </div>
                  <CardDescription className="text-gray-600 text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-700">
                        <ArrowRight className="h-4 w-4 text-orange-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button asChild size="lg" className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold group-hover:shadow-xl transition-all duration-300 h-12">
                    <Link href={service.href} className="flex items-center justify-center">
                      Découvrir ce service
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
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
              <Badge className="mb-6 bg-purple-50 text-purple-700 border-purple-200">
                <Lightbulb className="w-4 h-4 mr-2" />
                Notre Méthode
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Une approche projet
                <span className="block text-blue-600">éprouvée</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Une méthodologie structurée pour garantir le succès de vos projets télécommunications 
                avec un accompagnement personnalisé à chaque étape
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {[
                { step: "1", title: "Analyse des besoins", description: "Audit gratuit de votre infrastructure existante et identification de vos besoins spécifiques.", gradient: "from-blue-500 to-blue-600" },
                { step: "2", title: "Conception solution", description: "Élaboration d'une solution sur mesure avec devis détaillé et planning de déploiement.", gradient: "from-green-500 to-green-600" },
                { step: "3", title: "Déploiement", description: "Installation et configuration par nos techniciens certifiés avec formation des utilisateurs.", gradient: "from-orange-500 to-orange-600" },
                { step: "4", title: "Support continu", description: "Maintenance préventive, support technique 24/7 et évolutions selon vos besoins.", gradient: "from-purple-500 to-purple-600" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="text-center group"
                >
                  <Card className="h-full p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border-0 relative overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                    <div className="relative z-10">
                      <div className={`bg-gradient-to-br ${item.gradient} text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        {item.step}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-blue-700 transition-colors">{item.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
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
              <Badge className="mb-6 bg-green-50 text-green-700 border-green-200">
                <Award className="w-4 h-4 mr-2" />
                Certifications & Partenariats
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Excellence reconnue et
                <span className="block text-blue-600">partenariats de confiance</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Une expertise certifiée et des partenariats stratégiques avec les leaders du marché 
                pour vous garantir des solutions de qualité
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                { title: "Agréé P&T Luxembourg", description: "Certification officielle pour l'installation et la maintenance des équipements télécommunications", icon: Shield, gradient: "from-blue-500 to-blue-600" },
                { title: "Partenaire Cisco", description: "Partenaire certifié pour les solutions réseau et télécommunications d'entreprise", icon: Award, gradient: "from-orange-500 to-orange-600" },
                { title: "Conformité RGPD", description: "Respect des réglementations européennes sur la protection des données personnelles", icon: CheckCircle, gradient: "from-green-500 to-green-600" }
              ].map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="group"
                >
                  <Card className="text-center h-full p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-0 relative overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${cert.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                    <div className="relative z-10">
                      <div className={`mx-auto mb-6 p-4 bg-gradient-to-br ${cert.gradient} rounded-full w-fit shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <cert.icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-blue-700 transition-colors">{cert.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{cert.description}</p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
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
              Besoin d'une solution
              <span className="block text-blue-400">sur mesure ?</span>
            </h2>
            <p className="text-xl mb-12 text-blue-100 max-w-3xl mx-auto">
              Nos experts analysent vos besoins et vous proposent la solution télécommunications 
              la plus adaptée à votre entreprise avec un accompagnement personnalisé
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 h-14 px-8 text-lg font-semibold shadow-2xl">
                <Link href="/quote">Demander un devis</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-white text-blue-900 bg-white hover:bg-gray-100 hover:text-blue-800 h-14 px-8 text-lg font-semibold transition-all duration-300">
                <Link href="/contact">Planifier un audit gratuit</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}