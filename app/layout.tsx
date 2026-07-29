import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Документация Takt',
  description:
    'Русскоязычная документация Takt: руководства, администрирование, эксплуатация, интеграции, API и безопасность.',
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
