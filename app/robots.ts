import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/private/', '/admin/', '/api/', '/tmp/'],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/private/', '/admin/'],
        crawlDelay: 1,
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: ['/private/', '/admin/'],
        crawlDelay: 2,
      },
    ],
    sitemap: 'https://exzofor.com/sitemap.xml',
    host: 'https://exzofor.com',
  }
}
