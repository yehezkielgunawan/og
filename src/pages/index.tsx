import type { NextPage } from "next";

import Button from "@/components/buttons/Button";
import UnstyledInput from "@/components/forms/UnstyledInput";
import NextImage from "@/components/NextImage";
import Layout from "@/layouts/Layout";
import clsxm from "@/lib/helpers/clsxm";

const Home: NextPage = () => {
  return (
    <Layout>
      <main className="flex items-center justify-between gap-3">
        <div className="my-4 flex w-full flex-col gap-3">
          <UnstyledInput labelName="Site Name" type="text" />
          <UnstyledInput labelName="Description" type="text" />
          <UnstyledInput labelName="Image URL" type="text" />
          <Button
            variant="outline"
            className={clsxm(
              "items-center justify-center",
              "hover:bg-gray-300 dark:text-white dark:hover:bg-gray-600"
            )}
          >
            Generate
          </Button>
        </div>
        <div className="flex w-full items-center justify-center">
          <NextImage
            useSkeleton
            className="w-32 md:w-40"
            src="https://assets.vercel.com/image/upload/v1607554385/repositories/next-js/next-logo.png"
            width={140}
            height={140}
            alt="Icon example"
          />
        </div>
      </main>
    </Layout>
  );
};

export default Home;
