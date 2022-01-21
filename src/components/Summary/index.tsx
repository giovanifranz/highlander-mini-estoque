import { SiDropbox } from 'react-icons/si'
import { FaDivide } from 'react-icons/fa'
import { ImPriceTag } from 'react-icons/im'
import { Container } from './styles'
import { useDashboard } from '../../hooks/useDashboard'

export function Summary() {
  const sizeIcon = 25
  const { summary } = useDashboard()
  const { qtdProducts, ticketAverage, totalValueProducts } = summary

  return (
    <Container>
      <div>
        <header>
          <p>Produtos</p>
          <SiDropbox size={sizeIcon} />
        </header>
        <strong>{qtdProducts ?? 0} un.</strong>
      </div>
      <div>
        <header>
          <p>Ticket Médio</p>
          <FaDivide size={sizeIcon} />
        </header>
        <strong>R$ {ticketAverage ? ticketAverage.toFixed(2) : 0.0}</strong>
      </div>
      <div>
        <header>
          <p>Total em Produtos</p>
          <ImPriceTag size={sizeIcon} />
        </header>
        <strong>
          R$ {totalValueProducts ? totalValueProducts.toFixed(2) : 0.0}
        </strong>
      </div>
    </Container>
  )
}
