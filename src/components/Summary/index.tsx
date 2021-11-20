import { SiDropbox } from "react-icons/si";
import { FaDivide } from "react-icons/fa";
import { ImPriceTag } from "react-icons/im";
import { Container } from "./styles";

export function Summary() {
  const sizeIcon = 25;
  
  return (
    <Container>
      <div>
        <header>
          <p>Produtos</p>
          <SiDropbox size={sizeIcon} />
        </header>
        <strong>20 un.</strong>
      </div>
      <div>
        <header>
          <p>Ticket Médio</p>
          <FaDivide size={sizeIcon} />
        </header>
        <strong>R$ 199,90</strong>
      </div>
      <div>
        <header>
          <p>Total em Produtos</p>
          <ImPriceTag size={sizeIcon} />
        </header>
        <strong>R$ 3998,00</strong>
      </div>
    </Container>
  );
}
