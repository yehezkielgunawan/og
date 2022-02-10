/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import Button from "@/components/buttons/Button";
import UnstyledInput from "@/components/forms/UnstyledInput";
import Layout from "@/layouts/Layout";
import clsxm from "@/lib/helpers/clsxm";
import { SubmitFormType } from "@/types/submitForm";

const Home: NextPage = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<SubmitFormType>({
    mode: "all",
  });
  const [link, setLink] = useState<string>("https://og.yehezgun.com/api/base");
  const onSubmitForm: SubmitHandler<SubmitFormType> = (data) => {
    alert(JSON.stringify(data));
    setLink(
      "https://og.yehezgun.com/api/base/" +
        `?theme=dark&templateTitle=${encodeURIComponent(data.template_title)}${
          data.image_url && `&logo=${data.image_url}`
        }${data.description && `&description=${encodeURIComponent(data.description)}`}`
    );
  };

  return (
    <Layout>
      <main className="flex flex-wrap items-center justify-between gap-3 md:flex-nowrap">
        <form
          onSubmit={handleSubmit(onSubmitForm)}
          className="my-4 flex w-full flex-col gap-3"
        >
          <UnstyledInput
            labelName="Site Name"
            required
            type="text"
            errorMsg={
              errors.template_title?.type === "required"
                ? "First name is required"
                : errors.template_title?.type === "minLength"
                ? "Too short. The site name should be at least 3 characters."
                : undefined
            }
            {...register("template_title", { required: true, minLength: 3 })}
          />
          <UnstyledInput
            labelName="Description"
            type="text"
            {...register("description")}
          />
          <UnstyledInput
            labelName="Image URL"
            type="text"
            {...register("image_url")}
          />
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
            src={link}
            className="w-full bg-gray-500"
            alt=""
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
