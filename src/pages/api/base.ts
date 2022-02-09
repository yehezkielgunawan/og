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
        logo:
          logo ??
          "https://res.cloudinary.com/yehez/image/upload/v1636202181/peep_amkhuu.svg",
        theme: theme ?? "dark",
        templateTitle,
        logoWidth: logoWidth ?? "100",
        logoHeight,
      };

      return `
        <html>
        <head>
        <script src="https://cdn.tailwindcss.com"></script>
        </head>
          <body>
          <div className="flex h-screen w-screen flex-col items-center justify-center gap-4 bg-zinc-100 p-3 text-center dark:bg-dark">
          <img
            src="https://res.cloudinary.com/yehez/image/upload/v1636202181/peep_amkhuu.svg"
            alt="favicon"
            className={clsxm("w-[${query.logoWidth}px] ${
        query.logoHeight && `h-[${query.logoHeight}]`
      }")}
          />
          ${
            query.templateTitle
              ? `<h1>${query.templateTitle}</h1>
              <h3>${query.siteName}</h3>`
              : `<h1>${query.siteName}</h1>`
          }
          <p className="font-md mt-2 leading-6 text-dark dark:text-white">
            ${query.description}
          </p>
        </div>
          </body>
        </html>
      `;
    },
  },
});
