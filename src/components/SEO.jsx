import { Helmet } from "react-helmet-async";

const SEO = ({
  title = "Dot92 - Drones, Electronic Warfare & RF Solutions",
  description = "We provide UAVs, electronic warfare systems, RF & microwave components, signal jammers, and defense technology for government and private sectors.",
  keywords = "drones, UAVs, unmanned aerial vehicles, electronic warfare, RF components, microwave technology, signal jammers, PGK, anti-drone systems, laser gun system, EW software, defense technology, MW components, Pakistan defense industry",
  image = "https://www.dot92.com/seo-preview.jpg",
  url = "https://www.dot92.com",
}) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Dot92 Technologies",
    url,
    logo: image,
    sameAs: [
      "https://www.facebook.com/dot92",
      "https://www.linkedin.com/company/dot92",
      "https://x.com/dot92",
    ],
    description,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Islamabad",
      addressLocality: "Islamabad",
      addressCountry: "PK",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+92-300-0000000",
      contactType: "Customer Support",
      areaServed: "PK",
      availableLanguage: ["English", "Urdu"],
    },
  };

  return (
    <Helmet>
      {/* Primary Meta */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Dot92 Technologies" />
      <link rel="canonical" href={url} />

      {/* Favicons */}
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

export default SEO;
