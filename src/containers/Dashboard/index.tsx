import { Container } from "./styles";
import { Summary } from "../../components/Summary";
import { ProductsTable } from "../../components/ProductsTable";
import { Header } from "../../components/Header";
import { DashboardProvider } from "../../providers/DashboardContext";

export default function Dashboard() {
  return (
    <DashboardProvider>
      <Header/>
      <Container>
        <Summary />
        <ProductsTable/>
      </Container>
    </DashboardProvider>
  );
}
