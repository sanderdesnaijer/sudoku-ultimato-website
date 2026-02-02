import { MetadataRoute } from 'next'

export const dynamic = 'force-static'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://sudokuultimato.metsander.com'
  
  // Note: English (en) uses root URLs (/) not /en/ paths
  // hreflang uses 'x-default' pointing to root for English
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
      alternates: {
        languages: {
          'x-default': `${baseUrl}/`,
          nl: `${baseUrl}/nl/`,
          th: `${baseUrl}/th/`,
        },
      },
    },
    {
      url: `${baseUrl}/nl/`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/th/`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/privacy/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
      alternates: {
        languages: {
          'x-default': `${baseUrl}/privacy/`,
          nl: `${baseUrl}/nl/privacy/`,
          th: `${baseUrl}/th/privacy/`,
        },
      },
    },
    {
      url: `${baseUrl}/nl/privacy/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/th/privacy/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/support/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
      alternates: {
        languages: {
          'x-default': `${baseUrl}/support/`,
          nl: `${baseUrl}/nl/support/`,
          th: `${baseUrl}/th/support/`,
        },
      },
    },
    {
      url: `${baseUrl}/nl/support/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/th/support/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ]
}
