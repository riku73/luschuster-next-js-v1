import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Network, HeadphonesIcon, Wrench, Lightbulb, ArrowRight } from "lucide-react"

export default function Services() {
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
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-20 pt-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Nos services télécommunications
            </h1>
            <p className="text-xl md:text-2xl text-blue-100">
              Solutions complètes pour moderniser et optimiser vos communications d'entreprise au Luxembourg
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
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
                  <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                    <Link href={service.href}>
                      Découvrir ce service
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Notre approche projet
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une méthodologie éprouvée pour garantir le succès de vos projets télécommunications
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">1</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Analyse des besoins</h3>
                <p className="text-gray-600">Audit gratuit de votre infrastructure existante et identification de vos besoins spécifiques.</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">2</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Conception solution</h3>
                <p className="text-gray-600">Élaboration d'une solution sur mesure avec devis détaillé et planning de déploiement.</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">3</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Déploiement</h3>
                <p className="text-gray-600">Installation et configuration par nos techniciens certifiés avec formation des utilisateurs.</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">4</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Support continu</h3>
                <p className="text-gray-600">Maintenance préventive, support technique 24/7 et évolutions selon vos besoins.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nos certifications et partenariats
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une expertise reconnue et des partenariats avec les leaders du marché
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Agréé P&T Luxembourg</h3>
              <p className="text-gray-600">Certification officielle pour l'installation et la maintenance des équipements télécommunications</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Partenaire Cisco</h3>
              <p className="text-gray-600">Partenaire certifié pour les solutions réseau et télécommunications d'entreprise</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Conformité RGPD</h3>
              <p className="text-gray-600">Respect des réglementations européennes sur la protection des données personnelles</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Besoin d'une solution
            <span className="block text-blue-400">sur mesure ?</span>
          </h2>
          <p className="text-xl mb-12 text-blue-100 max-w-3xl mx-auto">
            Nos experts analysent vos besoins et vous proposent la solution télécommunications la plus adaptée à votre entreprise
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 h-14 px-8 text-lg font-semibold shadow-2xl">
              <Link href="/quote">Demander un devis</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-white text-blue-900 bg-white hover:bg-gray-100 hover:text-blue-800 h-14 px-8 text-lg font-semibold transition-all duration-300">
              <Link href="/contact">Planifier un audit gratuit</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}