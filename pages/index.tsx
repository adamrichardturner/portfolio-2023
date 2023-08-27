import Header from '@/components/Header/Header'
import Hero from '@/components/Hero/Hero'
import Projects from '@/components/Projects/Projects'
import Media from '@/components/Media/Media'
import Contact from '@/components/Contact/Contact'

import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: ['400', '500', '700', '900'],
  subsets: ['latin'],
})

export default function Home() {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${roboto.style.fontFamily};
        }
      `}</style>
      <Header />
      <main>
        <Hero />
        <Projects />
        <Media />
        <Contact />
      </main>
    </>
  )
}
