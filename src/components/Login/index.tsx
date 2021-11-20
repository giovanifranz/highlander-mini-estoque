import dynamic from "next/dynamic";

export const DynamicLogin = dynamic(() => import("./Login"), {
  loading: () => <p>Loading...</p>,
});
