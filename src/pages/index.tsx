/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import queryString from "query-string";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { GeneralQueryEnum } from "./api/base";

import Button from "@/components/buttons/Button";
import UnstyledInput from "@/components/forms/UnstyledInput";
import UnstyledSelect from "@/components/forms/UnstyledSelect";
import Layout from "@/layouts/Layout";
import clsxm from "@/lib/helpers/clsxm";

type Query = Record<keyof typeof GeneralQueryEnum, string>;

const Home: NextPage = () => {
  const {
    register,
    watch,
    formState: { errors },
    handleSubmit,
  } = useForm<Query>({
    mode: "all",
  });
  const modeOptions = ["light", "dark"];
  const formData = watch();
  const [link, setLink] = useState<string>("https://og.yehezgun.com/api/base");
  const [imgLink, setImgLink] = useState<string>(
    "https://og.yehezgun.com/api/base"
  );
  const onSubmitForm: SubmitHandler<Query> = () => {
    setImgLink(link);
  };

  useEffect(() => {
    const { ...rest } = formData;
    const qurl = queryString.stringifyUrl(
      {
        url: "https://og.yehezgun.com/api/base",
        query: { ...rest },
      },
      {
        skipEmptyString: true,
      }
    );
    setLink(qurl);
  }, [formData]);

  return (
    <Layout>
      <main className="flex flex-wrap items-center justify-between gap-3 md:flex-nowrap">
        <form
          onSubmit={handleSubmit(onSubmitForm)}
          className="my-4 flex w-full flex-col gap-3"
        >
          <UnstyledSelect
            labelName="Mode"
            optionList={modeOptions}
            defaultValue="dark"
            helperText="By default, it's dark mode."
            {...register("theme")}
          />
          <UnstyledInput
            labelName="Template Title"
            required
            type="text"
            errorMsg={
              errors.templateTitle?.type === "required"
                ? "First name is required"
                : errors.templateTitle?.type === "minLength"
                ? "Too short. The site name should be at least 3 characters."
                : undefined
            }
            {...register("templateTitle", { required: true, minLength: 3 })}
          />
          <UnstyledInput
            labelName="Site Name"
            type="text"
            {...register("siteName")}
          />
          <UnstyledInput
            labelName="Description"
            type="text"
            {...register("description")}
          />
          <UnstyledInput
            labelName="Image URL"
            type="text"
            helperText="By default the image is https://og.yehezgun.com/peep_yehez.svg"
            {...register("logo")}
          />
          <div className="flex gap-2">
            <UnstyledInput
              labelName="logoWidth"
              type="number"
              {...register("logoWidth")}
            />
            <UnstyledInput
              labelName="logoHeight"
              type="number"
              {...register("logoHeight")}
            />
          </div>
          <Button
            type="submit"
            variant="outline"
            className={clsxm(
              "items-center justify-center",
              "hover:bg-gray-300 dark:text-white dark:hover:bg-gray-600"
            )}
          >
            Generate
          </Button>
        </form>
        <div className="flex w-full flex-col items-center justify-center p-5">
          <img
            src={imgLink}
            className="w-full bg-gray-500"
            alt="logo-image"
            width="1200"
            height="630"
          />
          <p className="mt-2 break-all text-sm text-gray-600">{link}</p>
        </div>
      </main>
    </Layout>
  );
};

export default Home;
