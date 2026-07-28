import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Техкаталист ИИ — документация программного обеспечения',
  description:
    'Документация правообладателя на программное обеспечение «Техкаталист ИИ»: функциональные характеристики, установка, эксплуатация, архитектура, жизненный цикл и правовой статус.',
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
