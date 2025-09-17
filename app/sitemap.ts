import type { MetadataRoute } from 'next'
export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://YOUR-DOMAIN.vercel.app'
  const now = new Date()
  return [
    { url: `${base}/`, lastModified: now },
    { url: `${base}/blog`, lastModified: now },
  ]
}
