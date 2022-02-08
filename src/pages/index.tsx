import type { NextPage } from "next";
import { SubmitHandler, useForm } from "react-hook-form";

import Button from "@/components/buttons/Button";
import UnstyledInput from "@/components/forms/UnstyledInput";
import NextImage from "@/components/NextImage";
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
  const onSubmitForm: SubmitHandler<SubmitFormType> = (data) =>
    alert(JSON.stringify(data));
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
              errors.site_name?.type === "required"
                ? "First name is required"
                : errors.site_name?.type === "minLength"
                ? "Too short. The site name should be at least 3 characters."
                : undefined
            }
            {...register("site_name", { required: true, minLength: 3 })}
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
