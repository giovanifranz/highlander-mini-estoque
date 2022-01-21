import { Container } from './styles'
import { Summary } from '../../components/Summary'
import { ProductsTable } from '../../components/ProductsTable'
import { Header } from '../../components/Header'
import { DashboardProvider } from '../../providers/DashboardContext'

interface DashboardProps {
  id: string
}
export default function Dashboard({ id }: DashboardProps) {
  return (
    <DashboardProvider id={id}>
      <Header />
      <Container>
        <Summary />
        <ProductsTable />
      </Container>
    </DashboardProvider>
  )
}
