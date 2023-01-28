import '../styles/globals.scss'
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
        {/* <Header /> */}
        <main>
          {children}
        </main>
        <svg className='background-gradient' viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'>
          <filter id='noiseFilter'>
            <feTurbulence
              type='fractalNoise'
              baseFrequency='2.8'
              numOctaves='1'
              stitchTiles='stitch' />
          </filter>

          <rect width='100%' height='100%' filter='url(#noiseFilter)' />
        </svg>
      </body>
    </html>
  )
}
