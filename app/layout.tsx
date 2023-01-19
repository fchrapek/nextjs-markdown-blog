import './globals.scss'
import Header from '../components/Header'
import { Space_Grotesk } from "@next/font/google"

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] })


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pl">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={spaceGrotesk.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
