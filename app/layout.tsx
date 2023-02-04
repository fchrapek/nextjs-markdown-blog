import '../styles/globals.scss'
import { Space_Grotesk } from "@next/font/google";
import NoiseFilter from '@/components/NoiseFilter';
import { Header } from 'components';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin', 'latin-ext'] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl">
      <head />
      <body className={spaceGrotesk.className}>
        <Header />
        {children}
        {/* <NoiseFilter /> */}
      </body>
    </html>
  )
}
