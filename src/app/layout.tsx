import { getServerSession } from 'next-auth'
import './globals.css'
import { authOptions } from './api/auth/[...nextauth]/route'
import { NextAuthProvider } from './NextAuthProvider'
import "./forms.css"
import { Suspense } from 'react'
import LoadinPage from './loading'
import { Metadata } from 'next'
export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXTAUTH_URL as string),
  title: 'Blended Learning System (BLS)',
  description: "Blended learning system",
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions);
  return (
    <html lang="en">

      <body id='prose' >
        <Suspense fallback={<LoadinPage />}>
          <NextAuthProvider session={session}>
            {children}
          </NextAuthProvider>
        </Suspense>
      </body>
    </html>
  )
}
