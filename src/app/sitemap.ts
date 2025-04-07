import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://owona.de'

  const routes = [
    '',
    '/shop',
    '/blog',
    '/ueber-uns',
    '/service',
    '/downloads',
    '/impressum',
    '/datenschutz',
    '/agb',
    '/widerruf',
    '/widerruf-dienstleistungen',
    '/versand',
    '/cookie-richtlinie',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }))
} 