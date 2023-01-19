import "../styles/globals.scss";
import { Space_Grotesk } from "@next/font/google"

// importing the Work Sans font with
// the Next.js 13 Font Optimization Feature
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] })

function MyApp({ Component, pageProps }) {
  return <div className={spaceGrotesk.className}>
    <Component {...pageProps} />
  </div>
}

export default MyApp
