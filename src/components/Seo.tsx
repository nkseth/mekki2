import React from 'react';
import Head from 'next/head';
interface metatype {
    name: string
    content: string
}
interface Props {
    discription: string,
    title: string,
    author: string,
    meta: metatype
}

const SEO: React.FC<Props> = (props) => {
    const metaData = [
        {
            name: `description`,
            content: "",
        },
        {
            property: `og:title`,
            content: props.title,
        },
        {
            property: `og:description`,
            content: props.discription,
        },
        {
            property: `og:type`,
            content: `website`,
        },
        {
            name: `twitter:card`,
            content: `summary`,
        },
        {
            name: `twitter:creator`,
            content: props.author,
        },
        {
            name: `twitter:title`,
            content: props.title,
        },
        {
            name: `twitter:description`,
            content: props.discription,
        },
    ].concat(props.meta);
    return (
        <Head>
            <title>{props.title}</title>
            {metaData.map(({ name, content }, i) => (
                <meta key={i} name={name} content={content} />
            ))}
        </Head>
    );
}

export default SEO