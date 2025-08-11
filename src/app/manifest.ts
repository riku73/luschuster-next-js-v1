import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Luschuster Communications SA - Expert Télécommunications Luxembourg',
    short_name: 'Luschuster',
    description: 'Solutions télécommunications d\'entreprise au Luxembourg depuis 1988. VoIP, infrastructure réseau, maintenance. Techniciens agréés P&T.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#1e3a8a',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}