import dynamic from 'next/dynamic'
import Head from 'next/head'
import Sidebar from '@/components/Sidebar/Sidebar'
import Hero from '@/components/Hero/Hero'
import Projects from '@/components/Projects/Projects'
import Media from '@/components/Media/Media'
import Contact from '@/components/Contact/Contact'
import { Roboto } from 'next/font/google'

const DynamicHeader = dynamic(() => import('../components/Header/Header'), {
  ssr: false,
})

const roboto = Roboto({
  weight: ['400', '500', '700', '900'],
  subsets: ['latin'],
})

export default function Home() {
  return (
    <>
      <Head>
        <title>Adam Turner | Web Developer</title>
        <meta
          name='description'
          content='Adam Turner | Full Stack Developer | React, Next, JavaScript, TypeScript, Express and MongoDB.'
        />

        <meta property='og:url' content='https://adamrichardturner.dev/' />
        <meta property='og:type' content='website' />
        <meta
          property='og:title'
          content='Adam Turner | Full Stack Developer'
        />
        <meta
          property='og:description'
          content='Adam Turner | Full Stack Developer | React, Next, JavaScript, TypeScript Express and MongoDB.'
        />
        <meta
          property='og:image'
          content='https://adamrichardturner.dev/adamturner-social.png'
        />

        <meta name='twitter:card' content='summary_large_image' />
        <meta property='twitter:domain' content='adamrichardturner.dev' />
        <meta property='twitter:url' content='https://adamrichardturner.dev/' />
        <meta
          name='twitter:title'
          content='Adam Turner | Full Stack Developer'
        />
        <meta
          name='twitter:description'
          content='Adam Turner | Full Stack Developer | React, Next, JavaScript, TypeScript Express and MongoDB.'
        />
        <meta
          name='twitter:image'
          content='https://adamrichardturner.dev/adamturner-social.png'
        />
      </Head>
      <style jsx global>{`
        html {
          font-family: ${roboto.style.fontFamily};
        }
      `}</style>
      <DynamicHeader />
      <Sidebar />
      <main>
        <Hero />
        <Projects />
        <Media />
        <Contact />
      </main>
    </>
  )
}
