import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <Image
                src="/luschuster-logo.png"
                alt="Luschuster Communications SA"
                width={180}
                height={54}
                className="h-12 w-auto mb-2"
              />
            </div>
            <p className="text-gray-300 mb-4">
              Expert en télécommunications d'entreprise au Luxembourg depuis 1988. 
              Solutions innovantes et support technique de qualité.
            </p>
            <div className="text-sm text-gray-400">
              <p>RCS Luxembourg: B 123.456</p>
              <p>TVA: LU 12345678</p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Nos Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/services/telecommunications" className="hover:text-white transition-colors">
                  Télécommunications d'entreprise
                </Link>
              </li>
              <li>
                <Link href="/services/infrastructure" className="hover:text-white transition-colors">
                  Infrastructure réseau
                </Link>
              </li>
              <li>
                <Link href="/services/voip" className="hover:text-white transition-colors">
                  Solutions VoIP
                </Link>
              </li>
              <li>
                <Link href="/services/maintenance" className="hover:text-white transition-colors">
                  Maintenance et support
                </Link>
              </li>
              <li>
                <Link href="/services/consulting" className="hover:text-white transition-colors">
                  Consulting télécoms
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 mt-0.5 text-blue-400" />
                <div>
                  <p>123 Route d'Esch</p>
                  <p>L-1470 Luxembourg</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-blue-400" />
                <a href="tel:+35227862130" className="hover:text-white transition-colors">
                  +352 27 86 21 30
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-blue-400" />
                <a href="mailto:info@luschuster.lu" className="hover:text-white transition-colors">
                  info@luschuster.lu
                </a>
              </div>
              <div className="flex items-start space-x-2">
                <Clock className="h-5 w-5 mt-0.5 text-blue-400" />
                <div>
                  <p>Lun - Ven: 8h00 - 17h30</p>
                  <p>Support 24/7 disponible</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Liens rapides</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  À propos de nous
                </Link>
              </li>
              <li>
                <Link href="/quote" className="hover:text-white transition-colors">
                  Demande de devis
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Nous contacter
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors">
                  Politique de confidentialité
                </Link>
              </li>
              <li>
                <Link href="/legal" className="hover:text-white transition-colors">
                  Mentions légales
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Certifications */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm text-gray-400">
                Techniciens agréés et certifiés par P&T Luxembourg
              </p>
            </div>
            <div className="flex space-x-4 text-sm text-gray-400">
              <span>Conformité RGPD</span>
              <span>•</span>
              <span>Certification ISO 27001</span>
              <span>•</span>
              <span>Membre CHAMBRE DE COMMERCE</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Luschuster Communications SA. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  )
}