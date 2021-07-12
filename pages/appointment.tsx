import React from 'react';
import Header from '../src/components/header'
import SEO from '../src/components/Seo'
import CardHolder from '../src/sections/Appointment/appcardholder'
import Banner from '../src/sections/Appointment/appointmentbanner'
import Subbanner from '../src/sections/Appointment/appointmentsub'
import Customerreview from '../src/sections/customerreview'
import Footer from '../src/sections/footer'
import Tech from '../src/sections/tech'

const Appointment:React.FC = () => {
  return (
    <div style={{ background: '#EBEBEB' }}>
      <SEO
        title="this is Degataliseauto"
        author="mekki"
        discription="this is Degataliseauto"
        meta={{ name: 'og:title', content: 'hello' }}
      />
      <Header navcolor="#000B4F" />
      <Banner />
      <Subbanner />

      <CardHolder />

      <Customerreview />

      <Tech />
      <Footer />
    </div>
  )
}

export default Appointment
