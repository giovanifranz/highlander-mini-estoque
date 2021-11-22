import dynamic from "next/dynamic";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import { useIsAuthorized } from "../../hooks/useIsAuthorized";

export const DynamicDashboard = dynamic(
  () => import("../../containers/Dashboard"),
  {
    loading: () => <p>Loading...</p>,
  }
);

interface DashboardProps {
  id: string;
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      {
        params: {
          id: "not-authorized",
        },
      },
    ],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  const id =
    context.params?.id !== undefined ? context.params.id : "not-authorized";
  return {
    props: {
      id,
    },
  };
};

export default function Dashboard({ id }: DashboardProps) {
  const isAuthorized = useIsAuthorized(id);
    return <>{isAuthorized && <DynamicDashboard id={id} />}</>;
}
