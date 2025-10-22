﻿import type { MetadataRoute } from 'next'
import { site } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString()
  return [
    { url: site.url + '/',          lastModified: now, changeFrequency: 'weekly',  priority: 1 },
    { url: site.url + '/features',  lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: site.url + '/pricing',   lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: site.url + '/about',     lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: site.url + '/contact',   lastModified: now, changeFrequency: 'yearly',  priority: 0.3 }
  ]
}
