import { MdProductionQuantityLimits } from 'react-icons/md'
import { Container, Content } from './styles'
import { useDashboard } from '../../hooks/useDashboard'
export function Header() {
  const { setIsOpenModal } = useDashboard()

  return (
    <Container>
      <Content>
        <h1>Logo</h1>
        <button type="button" onClick={() => setIsOpenModal(true)}>
          Novo Produto <MdProductionQuantityLimits size={20} />
        </button>
      </Content>
    </Container>
  )
}
