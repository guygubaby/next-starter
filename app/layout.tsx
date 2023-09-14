import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Infocare DevOps',
  description: 'Infocare DevOps Platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
