/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
  title: "Yehez-OG",
  titleTemplate: "%s | YehezGun",
  description: "Yehezkiel Gunawan's personalized OG Image Generator.",
  canonical: "https://og.yehezgun.com",
  openGraph: {
    url: "https://og.yehezgun.com",
    title: "yehez-nexttailwind-starter",
    description: "Yehezkiel Gunawan's personalized OG Image Generator.",
    type: "website",
    images: [
      {
        url: "https://og.yehezgun.com/api/base?description=This%20is%20Yehezkiel%20Gunawan%27s%20personalized%20OG%20Image%20Generator&logoHeight=200&logoWidth=200&siteName=yehezgun.com&templateTitle=OG%20Image%20Generator&theme=dark",
        alt: "og.yehezgun.com og-image",
        width: 800,
        height: 600,
      },
    ],
    site_name: "og",
  },
  twitter: {
    handle: "@handle",
    site: "@site",
    cardType: "summary_large_image",
  },
  additionalLinkTags: [
    {
      rel: "icon",
      href: "https://assets.vercel.com/image/upload/v1607554385/repositories/next-js/next-logo.png",
    },
  ],
};

export default defaultSEOConfig;
