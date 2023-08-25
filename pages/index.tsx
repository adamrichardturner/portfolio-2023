import Header from '@/components/Header/Header'
import Hero from '@/components/Hero/Hero'
import Projects from '@/components/Projects/Projects'
// import Media from '@/components/Media/Media'
// import Contact from '@/components/Contact/Contact'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Projects />
      </main>
    </>
  )
}
