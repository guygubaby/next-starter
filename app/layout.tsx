import './globals.css'
import type { Metadata } from 'next'
import { ConfigProvider } from 'antd'
import StyledComponentsRegistry from '../lib/AntdRegistry'

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
      <body>
        <StyledComponentsRegistry>
          <ConfigProvider>{children}</ConfigProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
