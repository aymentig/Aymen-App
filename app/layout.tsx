import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://YOUR-DOMAIN.vercel.app'),
  title: { default: 'Aymen Tiguite — Data Science @ BU', template: '%s | Aymen Tiguite' },
  description: 'BU Data Science senior. Building AI tools (WeeklyBuddy), data quality pipelines, and A* experiments.',
  openGraph: { title: 'Aymen Tiguite — Data Science @ BU', description: 'AI tools, data quality, algorithms. Case studies + blog.', url: '/', siteName: 'Aymen Tiguite', type: 'website' },
  robots: { index: true, follow: true },
  twitter: { card: 'summary_large_image' }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
