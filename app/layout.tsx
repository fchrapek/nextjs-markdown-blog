import '../styles/globals.scss'
import { Space_Grotesk } from "@next/font/google";
import NoiseFilter from '@/components/NoiseFilter';
import { Header } from 'components';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin', 'latin-ext'] })

interface IRootLayout {
  children: React.ReactNode;
}

export default function RootLayout({ children }: IRootLayout) {
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
