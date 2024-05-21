import type { Metadata } from 'next'
import { APP_NAME } from '@/lib/constants'
import './globals.css'
import Header from '@/components/navigation/header'
import Footer from '@/components/navigation/footer'


export const metadata: Metadata = {
  title: `${APP_NAME}`,
  description: 'We spearhead the revolution from subsistence farming to agricultural business in Africa.',
  icons: { icon: "/favicon.ico"}
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='flex flex-col overflow-x-hidden overflow-y min-h-max '>
        <Header />
        <main className='h-max flex flex-col overflow-hidden  min-h-max '>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
