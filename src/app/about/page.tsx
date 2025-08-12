import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Award, Users, Shield, Clock, MapPin, CheckCircle } from "lucide-react"

export default function About() {
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
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-20 pt-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              À propos de Luschuster Communications
            </h1>
            <p className="text-xl md:text-2xl text-blue-100">
              37 ans d'expertise au service des entreprises luxembourgeoises. 
              Une passion pour l'innovation et l'excellence technique.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Notre histoire
                </h2>
                <div className="space-y-4 text-gray-600 text-lg">
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
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-100 to-orange-100 p-8 rounded-lg">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue-900 mb-2">37</div>
                    <div className="text-sm text-gray-600 mb-4">Années d'expérience</div>
                    
                    <div className="grid grid-cols-2 gap-4 mt-6">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-orange-600">500+</div>
                        <div className="text-xs text-gray-600">Entreprises clientes</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600">24/7</div>
                        <div className="text-xs text-gray-600">Support technique</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-600">15</div>
                        <div className="text-xs text-gray-600">Techniciens experts</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-purple-600">100%</div>
                        <div className="text-xs text-gray-600">Au Luxembourg</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Notre évolution
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Plus de trois décennies d'innovation et d'adaptation aux évolutions technologiques
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-blue-200"></div>
              
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                    <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                      <div className="bg-white p-6 rounded-lg shadow-md">
                        <div className="text-2xl font-bold text-blue-600 mb-2">{milestone.year}</div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{milestone.title}</h3>
                        <p className="text-gray-600">{milestone.description}</p>
                      </div>
                    </div>
                    
                    {/* Timeline dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Notre équipe dirigeante
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des experts passionnés au service de votre réussite technologique
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4 w-24 h-24 bg-gradient-to-br from-blue-100 to-orange-100 rounded-full flex items-center justify-center">
                    <Users className="h-10 w-10 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <div className="text-orange-600 font-semibold">{member.role}</div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nos certifications et agréments
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une expertise reconnue et des partenariats avec les leaders technologiques
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {certifications.map((cert, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow bg-white">
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 bg-blue-100 rounded-full w-fit">
                    <cert.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg">{cert.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{cert.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Nos valeurs
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Les principes qui guident notre action quotidienne et nos relations clients
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="mx-auto mb-4 p-4 bg-blue-100 rounded-full w-fit">
                  <Award className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Excellence technique</h3>
                <p className="text-gray-600">
                  Nous restons à la pointe des technologies et maintenons les plus hauts standards 
                  de qualité dans nos interventions.
                </p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-4 p-4 bg-orange-100 rounded-full w-fit">
                  <Users className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Proximité client</h3>
                <p className="text-gray-600">
                  Une relation de confiance basée sur l'écoute, la réactivité et un service 
                  personnalisé adapté à chaque entreprise.
                </p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-4 p-4 bg-green-100 rounded-full w-fit">
                  <Shield className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Fiabilité</h3>
                <p className="text-gray-600">
                  Des solutions robustes, un support continu et des engagements tenus pour 
                  garantir la continuité de vos activités.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <MapPin className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Au cœur du Luxembourg
              </h2>
              <p className="text-xl text-gray-600">
                Basés à Luxembourg-ville, nous intervenons sur tout le territoire luxembourgeois 
                et dans la Grande Région.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-gray-700">
                <p className="font-semibold mb-2">Luschuster Communications SA</p>
                <p>123 Route d'Esch</p>
                <p>L-1470 Luxembourg</p>
                <p className="mt-4">
                  <span className="font-semibold">Téléphone:</span> +352 27 86 21 30<br />
                  <span className="font-semibold">Email:</span> info@luschuster.lu
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Prêt à nous faire confiance ?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Rejoignez les 500+ entreprises qui font confiance à notre expertise pour leurs télécommunications
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 h-14 px-8 text-lg font-semibold shadow-2xl">
              <Link href="/quote">Demander un devis</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-white text-blue-900 bg-white hover:bg-gray-100 hover:text-blue-800 h-14 px-8 text-lg font-semibold transition-all duration-300">
              <Link href="/contact">Nous rencontrer</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}