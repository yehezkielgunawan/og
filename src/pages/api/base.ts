/* eslint-disable @typescript-eslint/no-explicit-any */
import { withOGImage } from "next-api-og-image";

export enum GeneralQueryEnum {
  "logo",
  "siteName",
  "description",
  "theme",
  "templateTitle",
  "logoWidth",
  "logoHeight",
}

export default withOGImage<"query", keyof typeof GeneralQueryEnum>({
  template: {
    html: async ({
      siteName,
      description,
      logo,
      theme,
      templateTitle,
      logoWidth,
      logoHeight,
    }: any) => {
      const query = {
        siteName: siteName ?? "Site Name",
        description: description ?? "Description",
        logo: logo ?? "https://og.thcl.dev/images/logo.jpg",
        theme: theme ?? "dark",
        templateTitle,
        logoWidth: logoWidth ?? 100,
        logoHeight,
      };

      return `
        <html>
          <head>
          
          ${getStyle(query)}
          <script src="https://cdn.tailwindcss.com"></script>
          </head>
          <body>
          <div class="flex h-screen w-screen flex-col items-center justify-center gap-4 bg-zinc-100 p-3 text-center dark:bg-dark">
          <img
            src="https://res.cloudinary.com/yehez/image/upload/v1636202181/peep_amkhuu.svg"
            alt="favicon"
          />
          ${
            query.templateTitle
              ? `<h1>${query.templateTitle}</h1>
              <h3>${query.siteName}</h3>`
              : `<h1>${query.siteName}</h1>`
          }
          <p class="font-md mt-2 leading-6 text-dark dark:text-white">
          ${query.description}
        </p>
        </div>
          </body>
        </html>
      `;
    },
  },
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
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
  img {
    width: ${query.logoWidth}px;
    ${query.logoHeight && `height: ${query.logoHeight}px`}
  }

</style>
`;
