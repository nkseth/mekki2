// index.tsx
import { FC } from 'react';
import SEO from '@src/components/Seo';
import Footer from '@src/sections/footer'
import Header from '../src/components/header'
import Cvg from '../src/sections/cvg'


const Leagalm: FC = () => {
    return (
        <div style={{ background: '#EBEBEB', padding: "0px" }}>
            <SEO title="this is Degataliseauto" author="mekki" discription="this is Degataliseauto" meta={{ name: 'og:title', content: 'hello' }} />
            <Header navcolor="#000B4F" />
            <Cvg />
            <Footer />
        </div>
    );
};

export default Leagalm;
