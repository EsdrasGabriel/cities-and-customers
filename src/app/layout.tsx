import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/default/Header'
import AsideBar from '@/components/default/AsideBar'
import { SearchHomeProvider } from '@/contexts/homeContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Listing of Cities and Customers',
  description: 'App for listing of cities and customers',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      <body className={`${inter.className} overflow-hidden h-screen`}>
          <Header />
          <section className='flex h-full'>
            <AsideBar />
            <SearchHomeProvider>
              {children}
            </SearchHomeProvider>
          </section>
      </body>
    </html>
  )
}
