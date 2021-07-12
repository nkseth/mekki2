// index.tsx
import { FC } from 'react';
import Footer from '@src/sections/footer'
import Header from '../src/components/header'
import Tech from '../src/sections/tech'
import Contactbanner from '../src/sections/Contact/contactbanner'
import SEO from '@src/components/Seo'

const Contact: FC = () => {
    return (
        <div style={{ background: '#EBEBEB', padding: "0px" }}>
            <SEO title="this is Degataliseauto" author="mekki" discription="this is Degataliseauto" meta={{ name: 'og:title', content: 'hello' }} />
            <Header navcolor="#000B4F" />




            <Contactbanner />

            <Tech />
            <Footer />
        </div>
    );
};

export default Contact;
