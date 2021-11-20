import { MdProductionQuantityLimits } from "react-icons/md";
import { Container, Content } from "./styles";

interface HeaderProps {
  onOpenNewProductModal: () => void;
}

export function Header({ onOpenNewProductModal }: HeaderProps) {
  return (
    <Container>
      <Content>
        <h1>Logo</h1>
        <button type="button" onClick={onOpenNewProductModal}>
          Novo Produto <MdProductionQuantityLimits size={20}/>
        </button>
      </Content>
    </Container>
  );
}
