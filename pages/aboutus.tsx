// index.tsx
import { FC } from 'react'
import SEO from '@src/components/Seo'
import Footer from '@src/sections/footer'
import Header from '../src/components/header'
import Banner from '../src/sections/About/aboutbanner'
import Aboutcontent from '../src/sections/About/aboutcontent'
import Abouthistory from '../src/sections/About/abouthistory'
import Aboutteam from '../src/sections/About/aboutteams'
import Tech from '../src/sections/tech'

const Home: FC = () => {
  return (
    <div style={{ background: '#EBEBEB', padding: '0px' }}>
      <SEO
        title="this is Degataliseauto"
        author="mekki"
        discription="this is Degataliseauto"
        meta={{ name: 'og:title', content: 'hello' }}
      />
      <Header navcolor="white" />
      <Banner />
      <Aboutcontent />

      <Abouthistory />
      <Aboutteam />
      <Tech />
      <Footer />
    </div>
  )
}

export default Home
