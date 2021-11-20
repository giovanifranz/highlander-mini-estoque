import dynamic from "next/dynamic";
import { useRouter } from "next/router";

export const DynamicDashboard = dynamic(
  () => import("../../containers/Dashboard"),
  {
    loading: () => <p>Loading...</p>,
  }
);

export default function Dashboard() {
  const route = useRouter().query.id
  console.log(route);
  
  return <DynamicDashboard />;
}
