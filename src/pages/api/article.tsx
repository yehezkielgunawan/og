/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
// https://play.tailwindcss.com/i3kYVT5F0m
import { withOGImage } from "next-api-og-image";

import { GeneralQueryEnum } from "./base";

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
        logo:
          logo ??
          "https://res.cloudinary.com/yehez/image/upload/v1636202181/peep_amkhuu.svg",
        description: description ?? "An Article by",
        siteName: siteName ?? "yehezgun.com",
        theme: theme ?? "dark",
        templateTitle: templateTitle ?? "The Title of The Article",
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
              className="flex h-screen w-screen flex-col items-center justify-center gap-3 bg-gray-200 px-8 text-center"
              style={{
                background: query.theme === "dark" ? "#222" : "#fff",
                color: query.theme === "dark" ? "white" : "black",
              }}
            >
              <div className="flex items-center justify-center gap-4">
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
                <div className="space-y-3 text-left">
                  <h3 className="text-3xl font-semibold">
                    {query.description}
                  </h3>
                  <h3 className="bg-gradient-to-r from-slate-300 to-zinc-400 px-1 text-3xl font-bold">
                    Yehezkiel Gunawan
                  </h3>
                </div>
              </div>
              <h1 className="mt-8 text-5xl font-bold">{query.templateTitle}</h1>
              <h5 className="mt-10 text-lg font-semibold">{query.siteName}</h5>
            </div>
          </body>
        </>
      );
    },
  },
});
