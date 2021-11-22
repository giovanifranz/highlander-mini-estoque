import Image from "next/image";
import logoImg from "../../assets/Logo-Highlander-RGB.svg";
import illustrationImg from "../../assets/loginImage.svg";
import { Container, Content } from "./styles";
import { DynamicLogin } from "../../components/Login";
import { DynamicCreateAccount } from "../../components/CreateAccount";
import { useRouter } from "next/router";

export default function Home() {
  const route = useRouter().query.slug;

  return (
    <Container>
      <aside>
        <Image
          src={illustrationImg}
          alt="Ilustração de Produtos"
          layout="intrinsic"
        />
        <strong>Mini Estoque Highlander</strong>
        <p>Gerencie seus produtos e indicadores com nossa ferramenta.</p>
      </aside>
      <section>
        <Content>
          <Image
            src={logoImg}
            alt="Highlander Mini Estoque"
            layout="intrinsic"
          />
          {route === "login" ? <DynamicLogin /> : null}
          {route === "create-account" ? <DynamicCreateAccount /> : null}
        </Content>
      </section>
    </Container>
  );
}
