import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'

const font = Roboto({ weight: "400", subsets: ["latin", "cyrillic"] })

export const metadata: Metadata = {
  title: 'Кошелёк',
  description: 'Кошелёк',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className={font.className}>{children}</body>
    </html>
  )
}
