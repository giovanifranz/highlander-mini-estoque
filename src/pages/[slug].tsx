import dynamic from "next/dynamic";
import { useRouter } from "next/router";

export const DynamicHome = dynamic(() => import("../containers/Home"), {
  loading: () => <p>Loading...</p>,
});

export default function Home() {
  const route = useRouter().query.slug;
  
  return (
    <>
      {route === "login" || route === "create-account" ? (
        <DynamicHome />
      ) : null}
    </>
  );
}
