// index.tsx
import Banner from '@src/sections/Home/banner';
import { useState } from 'react';
import Footer from '@src/sections/footer';
import Ourservicees from '@src/sections/ouersevices';

import { FC } from 'react';
import Header from '@src/components/header';
import CardHolder from '@src/sections/Home/cardholder';
import Tech from '@src/sections/tech';
import Pooper from '../src/components/popup'
import { useEffect } from 'react';
import Servicebox from '@src/sections/servicesBox';
import Bookbox from '@src/sections/bookbox';
import Coachingcall from '@src/sections/coachingcallbox';
import Review from '@src/sections/customerreview';


const Home: FC = () => {
  const [cookies, setcookies] = useState(false)
  useEffect(() => {
    setcookies(true)
  }, [])
  const cookiesclose = () => {
    setcookies(false)
  }
  return (
    <div style={{ overflowX: 'hidden', background: '#EBEBEB', padding: '0px' }}>
      <Pooper open={cookies} close={cookiesclose} />
      <Header navcolor="white" />
      <Banner />
      <Servicebox />
      <Ourservicees />
      <CardHolder />
      <Coachingcall />
      <Review />
      <Bookbox />
      <Tech />
      <Footer />
    </div>
  )
}

export default Home
