import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Takt Docs — документация платформы',
  description:
    'Русскоязычная пользовательская и техническая документация Takt и Techcatalyst Guard: что где находится, как работает и как проверить.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  )
}
