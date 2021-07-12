// index.tsx
import { FC } from 'react';
import SEO from '@src/components/Seo';
import Coachingcall from '@src/sections/coachingcallbox'
import Footer from '@src/sections/footer'
import Header from '../src/components/header'
import Serviceads from '../src/sections/Services/serviceads'
import Googleads from "../src/sections/Services/servicegoogleads"
import Googlebusiness from "../src/sections/Services/servicegooglebusiness"
import Instabookprocess from '../src/sections/Services/serviceinstabooksadsflow'
import Mobileapps from "../src/sections/Services/servicemobileapps"
import Banner from "../src/sections/Services/servicesbanner"
import Seo from "../src/sections/Services/serviceseo"
import Website from "../src/sections/Services/servicewebsite"



const Services: FC = () => {
    return (
        <div style={{ background: '#EBEBEB', padding: "0px" }}>
            <SEO title="this is Degataliseauto" author="mekki" discription="this is Degataliseauto" meta={{ name: 'og:title', content: 'hello' }} />
            <Header navcolor="white" />
            <Banner />
            <Serviceads />
            <Instabookprocess />
            <Seo />
            <Website />
            <Googleads />
            <Googlebusiness />
            <Mobileapps />
            <Instabookprocess />
            <Coachingcall />



            <Footer />
        </div>
    );
};

export default Services;
