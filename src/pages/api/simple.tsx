/* eslint-disable @next/next/no-head-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
// https://play.tailwindcss.com/aILnvoyNiN
import { withOGImage } from "next-api-og-image";

import { GeneralQueryEnum } from "./base";

export default withOGImage<"query", keyof typeof GeneralQueryEnum>({
  strategy: "query",
  template: {
    react: ({
      logo,
      siteName,
      theme,
      templateTitle,
      logoWidth,
      logoHeight,
    }: any) => {
      const query = {
        logo:
          logo ??
          "https://res.cloudinary.com/yehez/image/upload/v1646486254/yehez_avatar_yvlxbo.svg",
        siteName: siteName ?? "siteName",
        theme: theme ?? "dark",
        templateTitle: templateTitle ?? "Template Title",
        logoWidth: logoWidth ?? 100,
        logoHeight,
      };
      return (
        <>
          <head>
            <link
              href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"
              rel="stylesheet"
            />
          </head>
          <body>
            <div
              className="flex h-screen w-screen items-center px-8"
              style={{
                background: query.theme === "dark" ? "#222" : "#fff",
                color: query.theme === "dark" ? "white" : "black",
              }}
            >
              <div className="flex w-full items-center justify-between gap-4 px-16">
                <div className="space-y-3 text-left">
                  <h1 className="text-5xl font-bold">{query.templateTitle}</h1>
                  <h5 className="text-2xl font-semibold">{query.siteName}</h5>
                </div>
                <img
                  src={query.logo}
                  alt="logo-image"
                  style={{
                    width: `${query.logoWidth}px`,
                    height: `${
                      query.logoHeight ? `${query.logoHeight}px` : "auto"
                    }`,
                  }}
                />
              </div>
            </div>
          </body>
        </>
      );
    },
  },
});
