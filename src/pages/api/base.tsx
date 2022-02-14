/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { withOGImage } from "next-api-og-image";

export enum GeneralQueryEnum {
  "logo",
  "description",
  "siteName",
  "theme",
  "templateTitle",
  "logoWidth",
  "logoHeight",
}

export default withOGImage<"query", keyof typeof GeneralQueryEnum>({
  strategy: "query",
  template: {
    react: ({
      logo,
      description,
      siteName,
      theme,
      templateTitle,
      logoWidth,
      logoHeight,
    }: any) => {
      const query = {
        logo: logo ?? "https://res.cloudinary.com/yehez/image/upload/v1636202181/peep_amkhuu.svg",
        description: description ?? "description",
        siteName: siteName ?? "siteName",
        theme: theme ?? "dark",
        templateTitle: templateTitle ?? "Template Title",
        logoWidth: logoWidth ?? 100,
        logoHeight,
      }
      return (
        <>
          <head>
            <link
              href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"
              rel="stylesheet"
            />
            {getStyle(query)}
          </head>
          <body>
            <div className="flex min-h-screen flex-col items-center justify-center gap-3 container-custom">
              <img src={logo} alt="logo-image" />
              <h1 className="mt-2 text-4xl font-semibold">{query.templateTitle}</h1>
              <p className="text-2xl leading-6 description">{query.description}</p>
              <h3 className="mt-0.5 text-xl">{query.siteName}</h3>
            </div>
          </body>
        </>
      );
    },
  },
});

const getStyle = (
  query: Record<keyof typeof GeneralQueryEnum, string | string[]>
) => `
<style>
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 100 900;
    font-display: optional;
    src: url('/fonts/inter-var-latin.woff2') format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
      U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212,
      U+2215, U+FEFF, U+FFFD;
  }

  body {
    font-family: 'Inter', sans-serif;
  }

  .container-custom {
    background: ${query.theme === "dark" ? "#222" : "#fff"};
    color: ${query.theme === "dark" ? "white" : "black"};

    text-align: center;
    padding: 0 5rem;
  }

  img {
    width: ${query.logoWidth}px;
    ${query.logoHeight && `height: ${query.logoHeight}px`}
  }

  h3 {
    color: ${query.theme === "dark" ? "#E5E7EB" : "#374151"};
  }
  
  .description {
    color: ${query.theme === "dark" ? "#D1D5DB" : "#1F2937"};
  }
</style>
`;
