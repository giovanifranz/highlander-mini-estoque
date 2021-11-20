import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { GetStaticPaths } from "next";

export const DynamicHome = dynamic(() => import("../containers/Home"), {
  loading: () => <p>Loading...</p>,
});

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      {
        params: {
          slug: "login",
        },
      },
      {
        params: {
          slug: "create-account",
        },
      },
    ],
    fallback: false,
  };
};

export default function Home() {
  const route = useRouter().query.slug;

  return (
    <>
      {route === "login" || route === "create-account" ? <DynamicHome /> : null}
    </>
  );
}
