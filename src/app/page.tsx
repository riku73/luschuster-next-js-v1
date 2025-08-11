import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Phone, Network, Wrench, HeadphonesIcon, Users, Award, Shield } from "lucide-react"

export default function Home() {
  const services = [
    {
      title: "Télécommunications d'entreprise",
      description: "Standards téléphoniques modernes, lignes dédiées et solutions mobiles adaptées à vos besoins.",
      icon: Phone,
      href: "/services/telecommunications"
    },
    {
      title: "Infrastructure réseau",
      description: "Conception, déploiement et optimisation de votre infrastructure réseau d'entreprise.",
      icon: Network,
      href: "/services/infrastructure"
    },
    {
      title: "Solutions VoIP",
      description: "Migration vers IP, softphones et intégration CRM pour moderniser vos communications.",
      icon: HeadphonesIcon,
      href: "/services/voip"
    },
    {
      title: "Maintenance et support",
      description: "Support technique 24/7, contrats de maintenance et monitoring proactif de vos équipements.",
      icon: Wrench,
      href: "/services/maintenance"
    }
  ]

  const whyChooseUs = [
    {
      title: "37 ans d'expérience",
      description: "Établie en 1988, notre expertise reconnue au Luxembourg",
      icon: Award
    },
    {
      title: "Techniciens agréés P&T",
      description: "Certifications officielles et formation continue",
      icon: Shield
    },
    {
      title: "Support local",
      description: "Proximité et connaissance du marché luxembourgeois",
      icon: Users
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Expert en télécommunications d'entreprise
              <span className="block text-orange-400">depuis 1988</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Solutions innovantes pour moderniser vos communications d'entreprise au Luxembourg. 
              Techniciens agréés P&T, support 24/7 et expertise reconnue.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                <Link href="/quote">Demande de devis gratuit</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900">
                <Link href="/contact">Nous contacter</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nos services télécommunications
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des solutions complètes pour répondre à tous vos besoins en télécommunications d'entreprise
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 bg-blue-100 rounded-full w-fit">
                    <service.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center mb-4">
                    {service.description}
                  </CardDescription>
                  <Button asChild variant="outline" className="w-full">
                    <Link href={service.href}>En savoir plus</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Pourquoi choisir Luschuster ?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une expertise reconnue et un service de proximité pour accompagner votre entreprise
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto mb-4 p-3 bg-orange-100 rounded-full w-fit">
                  <item.icon className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Notre processus
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une approche structurée pour garantir le succès de votre projet
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
                <h3 className="font-semibold text-gray-900 mb-2">Audit gratuit</h3>
                <p className="text-gray-600 text-sm">Analyse de votre infrastructure existante</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
                <h3 className="font-semibold text-gray-900 mb-2">Proposition</h3>
                <p className="text-gray-600 text-sm">Devis détaillé et recommandations personnalisées</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
                <h3 className="font-semibold text-gray-900 mb-2">Installation</h3>
                <p className="text-gray-600 text-sm">Déploiement par nos techniciens certifiés</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">4</div>
                <h3 className="font-semibold text-gray-900 mb-2">Support</h3>
                <p className="text-gray-600 text-sm">Maintenance et support technique continus</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Prêt à moderniser vos télécommunications ?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Demandez votre audit gratuit et découvrez comment optimiser vos communications d'entreprise
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600">
              <Link href="/quote">Demander un devis</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900">
              <Link href="/contact">Planifier un audit</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8 text-center text-gray-600">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <span>Agréé P&T Luxembourg</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <span>Conformité RGPD</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <span>Support 24/7</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <span>37 ans d'expérience</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}