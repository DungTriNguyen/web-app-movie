const DATA_SEO_DEFAULT = {
  title: {
    default: "MarketMovie | Digital Transformation Solutions for Businesses",
    template: "%s | MarketMovie",
  },
  description:
    "Engaged in the development, production, and provision of information technology products, services, or solutions.",
  keywords: ["MarketMovie", "Digital Transformation Solutions for Businesses"],
  alternates: {
    canonical: "https://marketmovie.tech/",
  },
  openGraph: {
    title: "MarketMovie - Digital Transformation Solutions for Businesses",
    description:
      "Engaged in the development, production, and provision of information technology products, services, or solutions.",
    url: "https://marketmovie.tech/",
    type: "website",
    images: [
      {
        url: "/seo-open-graph/seo_graph.webp",
        width: 2759,
        height: 1552,
        alt: "MarketMovie - Digital Transformation Solutions for Businesses",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MarketMovie - Digital Transformation Solutions for Businesses",
    description:
      "Operating in the field of developing, manufacturing, and providing information technology products, services, or solutions.",
    images: ["/seo-open-graph/seo_graph.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default DATA_SEO_DEFAULT;
