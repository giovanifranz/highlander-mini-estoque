import { Container } from "./styles";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getProductsFromDatabase } from "../../services/database";

interface ProductsTableProps {
  updateTable: boolean;
  onRequestUpdateTable: () => void;
}

interface ProductsTable {
  products: Array<Products>;
}

interface Products {
  id: number;
  sku: string;
  productName: string;
  providerName: string;
  value: number;
  qtd: number;
}

export function ProductsTable({
  updateTable,
  onRequestUpdateTable,
}: ProductsTableProps) {
  const [products, setProducts] = useState<Array<Products>>();

  const accountID = useRouter().query.id;

  useEffect(() => {
    (async () => {
      if (!updateTable) {
        if (typeof accountID === "string") {
          const data = await getProductsFromDatabase(accountID);
          setProducts(data);
        } else {
          throw new Error("Account ID does not exist");
        }
      } else {
        onRequestUpdateTable();
      }
    })();
  }, [accountID, updateTable, onRequestUpdateTable]);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Código do Produto</th>
            <th>Nome do Produto</th>
            <th>Nome do Fornecedor</th>
            <th>Valor do Produto</th>
            <th>Qtd</th>
          </tr>
        </thead>
        <tbody>
          {products && products.length > 0
            ? products.map((product) => {
                return (
                  <tr key={product.id}>
                    <td>{product.sku}</td>
                    <td>{product.productName}</td>
                    <td>{product.providerName}</td>
                    <td>{product.value}</td>
                    <td>{product.qtd}</td>
                  </tr>
                );
              })
            : null}
        </tbody>
      </table>
    </Container>
  );
}
