import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({
    title = "Terapia Quantica Atlantis | Denise - Harmonização Energética",
    description = "Transforme sua vida com Terapia Quantica Atlantis e Multidimensional. Desbloqueie sua energia, cure traumas e eleve sua frequência vibracional. Atendimento online e presencial.",
    image = "/og-image.jpg",
    url = "https://terapiaquantica.com"
}) => {
    const siteTitle = title.includes("Terapia") ? title : `${title} | Terapia Quantica Atlantis`;

    return (
        <Helmet>
            {/* Standard Meta Tags */}
            <title>{siteTitle}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={url} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={siteTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={url} />
            <meta property="twitter:title" content={siteTitle} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={image} />

            {/* Theme Color for Browser Chrome */}
            <meta name="theme-color" content="#FAFAF9" />
        </Helmet>
    );
};

export default SEO;
