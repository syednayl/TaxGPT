import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import Providers from '@/components/Providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TaxGPT'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <Providers>
        <html lang='en'>
          <body className={inter.className} style={{ height: '100vh' }}>
            {children}
          </body>
          {/* <Toaster /> */}
        </html>
      </Providers>
    </ClerkProvider>
  )
}
