"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Phone, Network, Wrench, HeadphonesIcon, Users, Award, Shield, ArrowRight, Star, Quote, Building, Zap, Globe, TrendingUp, Clock, CheckCircle2 } from "lucide-react"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"

export default function Home() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const services = [
    {
      title: "Télécommunications d'entreprise",
      description: "Solutions télécommunications sur mesure pour entreprises luxembourgeoises - Installation et maintenance par techniciens agréés P&T depuis 37 ans. Réduisez vos coûts de 20% dès la première année.",
      icon: Phone,
      href: "/services/telecommunications",
      gradient: "from-blue-500 to-blue-600",
      features: ["Standards IP modernes", "Lignes dédiées", "Solutions mobiles", "Support 24/7"]
    },
    {
      title: "Infrastructure réseau",
      description: "Infrastructure réseau haute performance - Garantie uptime 99.9% avec support Cisco Gold Partner et monitoring 24/7. Évolutivité garantie pour accompagner votre croissance.",
      icon: Network,
      href: "/services/infrastructure",
      gradient: "from-purple-500 to-purple-600",
      features: ["Architecture sur mesure", "Équipements Cisco", "Sécurisation avancée", "Monitoring continu"]
    },
    {
      title: "Solutions VoIP",
      description: "Migration VoIP sans interruption - Réduisez vos coûts de 40% tout en améliorant la qualité audio HD et la mobilité de vos équipes. Migration progressive sur mesure.",
      icon: HeadphonesIcon,
      href: "/services/voip",
      gradient: "from-green-500 to-green-600",
      features: ["Migration progressive", "Applications mobiles", "Intégration CRM", "Conférences HD"]
    },
    {
      title: "Maintenance et support",
      description: "Support technique expert 24/7 au Luxembourg - Interventions d'urgence sous 4h garanties. Continuité d'activité assurée avec monitoring proactif et SLA 99.9%.",
      icon: Wrench,
      href: "/services/maintenance",
      gradient: "from-orange-500 to-orange-600",
      features: ["Support 24/7", "Maintenance préventive", "Intervention d'urgence", "Monitoring temps réel"]
    }
  ]

  const stats = [
    { label: "Années d'expérience", value: "37+", icon: Award },
    { label: "Entreprises clientes", value: "500+", icon: Building },
    { label: "Projets réalisés", value: "1200+", icon: CheckCircle2 },
    { label: "Taux de satisfaction", value: "99%", icon: Star }
  ]

  const testimonials = [
    {
      content: "Luschuster a complètement transformé notre infrastructure de communication. Leur expertise et leur professionnalisme sont remarquables.",
      author: "Marie Dubois",
      role: "Directrice IT",
      company: "TechLux SA",
      rating: 5
    },
    {
      content: "Un service exceptionnel et une équipe technique de premier plan. Nos communications n'ont jamais été aussi fiables.",
      author: "Jean-Pierre Weber",
      role: "CEO",
      company: "InnovaCorp",
      rating: 5
    },
    {
      content: "La migration vers VoIP s'est déroulée parfaitement. Support technique réactif et solutions innovantes.",
      author: "Sophie Laurent",
      role: "Responsable Systèmes",
      company: "GlobalTech Luxembourg",
      rating: 5
    }
  ]

  const certifications = [
    { name: "Agréé P&T Luxembourg", description: "Certification officielle", icon: Shield },
    { name: "Partenaire Cisco Gold", description: "Excellence technique", icon: Award },
    { name: "ISO 27001", description: "Sécurité informatique", icon: CheckCircle2 },
    { name: "RGPD Compliant", description: "Protection des données", icon: Globe }
  ]

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white overflow-hidden pt-40">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -inset-10 opacity-30">
            <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
            <div className="absolute top-3/4 right-1/4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
            <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-500"></div>
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
              Expert en télécommunications depuis 1988
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent leading-tight">
              Branche testing
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed">
              Réduisez vos coûts télécoms de 30% et sécurisez vos communications avec l'expertise du 
              <strong className="text-white"> seul opérateur familial agréé P&T depuis 1988</strong>. 
              Audit gratuit sous 48h pour optimiser votre infrastructure.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-32">
              <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white border-0 h-14 px-8 text-lg font-semibold shadow-2xl">
                <Link href="/quote" className="flex items-center">
                  Audit télécoms gratuit - Découvrez vos économies
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-white text-blue-900 bg-white hover:bg-gray-100 hover:text-blue-800 backdrop-blur-sm h-14 px-8 text-lg font-semibold transition-all duration-300">
                <Link href="/contact" className="flex items-center">
                  <Phone className="mr-2 h-5 w-5" />
                  Parlons de votre projet - Réponse sous 4h
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-16">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-white/10 rounded-full mb-3">
                    <stat.icon className="w-6 h-6 text-blue-300" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-blue-200 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce">
            <ArrowRight className="w-6 h-6 text-white/60 rotate-90" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <Badge className="mb-6 bg-blue-50 text-blue-700 border-blue-200">
              Nos Expertises
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Solutions télécommunications
              <span className="block text-blue-600">de nouvelle génération</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez nos services premium conçus pour propulser votre entreprise 
              vers l'excellence technologique
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="h-full border-0 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden relative">
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                  
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`p-4 rounded-2xl bg-gradient-to-br ${service.gradient} shadow-lg`}>
                        <service.icon className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl text-gray-900 group-hover:text-blue-700 transition-colors">
                          {service.title}
                        </CardTitle>
                      </div>
                    </div>
                    <CardDescription className="text-gray-600 text-lg leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-gray-700">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Button asChild size="lg" className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold group-hover:shadow-xl transition-all duration-300 h-12">
                      <Link href={service.href} className="flex items-center justify-center">
                        Découvrir ce service
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-br from-blue-900 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%2523ffffff%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22m36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-6 bg-blue-600/25 text-blue-100 border-blue-400/40">
              <Quote className="w-4 h-4 mr-2" />
              Témoignages clients
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ils nous font confiance
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Découvrez pourquoi plus de 500 entreprises luxembourgeoises choisissent notre expertise
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white h-full hover:bg-white/20 transition-all duration-300 group-hover:scale-105">
                  <CardHeader>
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <CardDescription className="text-blue-100 text-lg leading-relaxed">
                      "{testimonial.content}"
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
                        <Users className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-white">{testimonial.author}</div>
                        <div className="text-blue-200 text-sm">{testimonial.role}</div>
                        <div className="text-blue-300 text-sm">{testimonial.company}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-6 bg-green-50 text-green-700 border-green-200">
              <Award className="w-4 h-4 mr-2" />
              Certifications & Agréments
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Excellence reconnue et certifiée
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nos certifications garantissent la qualité et la fiabilité de nos services
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
                <Card className="text-center h-full border-2 hover:border-blue-200 hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <div className="mx-auto mb-4 p-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full w-fit group-hover:scale-110 transition-transform duration-300">
                      <cert.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl text-gray-900 group-hover:text-blue-700 transition-colors">
                      {cert.name}
                    </CardTitle>
                    <CardDescription className="text-gray-600">
                      {cert.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 to-blue-900 text-white relative overflow-hidden">
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
              Rejoignez 500+ entreprises
              <span className="block text-blue-400">qui maîtrisent leurs télécoms</span>
            </h2>
            <p className="text-xl mb-12 text-blue-100 max-w-3xl mx-auto">
              Seul opérateur familial agréé P&T Luxembourg depuis 37 ans. 
              Audit gratuit sous 48h - Découvrez vos économies potentielles sans engagement.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 h-14 px-8 text-lg font-semibold shadow-2xl">
                <Link href="/quote" className="flex items-center">
                  <TrendingUp className="mr-2 h-5 w-5" />
                  Audit télécoms gratuit sous 48h
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-white text-blue-900 bg-white hover:bg-gray-100 hover:text-blue-800 h-14 px-8 text-lg font-semibold transition-all duration-300">
                <Link href="/contact" className="flex items-center">
                  <Clock className="mr-2 h-5 w-5" />
                  Consultation expert - Réponse sous 4h
                </Link>
              </Button>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-8 text-blue-200">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span>Seuls 12 opérateurs agréés P&T au Luxembourg</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span>Satisfaction garantie ou intervention gratuite</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span>Support 24/7 inclus pendant 3 mois</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}