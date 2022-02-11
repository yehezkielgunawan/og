import clsx from "clsx";
import React, { useEffect, useState } from "react";
import { ImGithub } from "react-icons/im";

import ButtonLink from "./buttons/ButtonLink";

const HeaderComponent = () => {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <header className="fixed top-0 z-50 w-full bg-gray-300 p-0.5 opacity-90 dark:bg-gray-800">
      <div
        className={clsx(
          "layout flex items-center justify-between",
          "mx-auto h-14 max-w-4xl px-2 md:px-1"
        )}
      >
        <h5 className="font-bold text-black dark:text-white">
          Open Graph Image Generator
        </h5>
        <ButtonLink
          href="https://github.com/yehezkielgunawan/og"
          variant="ghost"
          className="text-md md:text-lg"
        >
          <ImGithub className="mr-2" size={20} />
          See The Repository
        </ButtonLink>
      </div>
    </header>
  );
};

export default HeaderComponent;
