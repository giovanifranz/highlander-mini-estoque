import { Container } from "./styles";

export function ProductsTable() {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Código do Produto</th>
            <th>Categoria do Produto</th>
            <th>Nome do Produto</th>
            <th>Nome do Fornecedor</th>
            <th>Valor do Produto</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>FUJ92485</td>
            <td>Cuidado Pessoal</td>
            <td>Aparador de Cabelo</td>
            <td>Fujioka</td>
            <td>R$199,70</td>
          </tr>
          <tr>
            <td>FUJ92485</td>
            <td>Cuidado Pessoal</td>
            <td>Aparador de Cabelo</td>
            <td>Fujioka</td>
            <td>R$199,70</td>
          </tr>
          <tr>
            <td>FUJ92485</td>
            <td>Cuidado Pessoal</td>
            <td>Aparador de Cabelo</td>
            <td>Fujioka</td>
            <td>R$199,70</td>
          </tr>
          <tr>
            <td>FUJ92485</td>
            <td>Cuidado Pessoal</td>
            <td>Aparador de Cabelo</td>
            <td>Fujioka</td>
            <td>R$199,70</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
