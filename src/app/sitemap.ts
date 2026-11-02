import { readdirSync } from 'fs'
import { join } from 'path'
import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'

const BASE_URL = 'https://amoraschi.github.io'

export default function sitemap (): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
    { url: `${BASE_URL}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/blog`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE_URL}/projects`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 }
  ]

  const postsDir = join(process.cwd(), 'public/posts')
  const posts = readdirSync(postsDir)
    .filter((file) => file.endsWith('.md'))
    .map((file) => ({
      url: `${BASE_URL}/blog/${file.replace('.md', '')}`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.6
    }))

  return [...staticRoutes, ...posts]
}
