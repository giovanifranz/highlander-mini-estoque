import { Container } from "./styles";
import { Summary } from "../../components/Summary";
import { ProductsTable } from "../../components/ProductsTable";
import { useState } from "react";
import { Header } from "../../components/Header";
import { NewProductModal } from "../../components/NewProductModal";

export default function Dashboard() {
  const [isNewProductModalOpen, setIsNewProductModalOpen] = useState(false);

  function handleOpenNewProductModal() {
    setIsNewProductModalOpen(true);
  }

  function handleCloseNewProductModal() {
    setIsNewProductModalOpen(false);
  }

  function handleUpdateTable() {
    const saved = localStorage.getItem("product");
    console.log(saved);
  }
  return (
    <>
      <Header onOpenNewProductModal={handleOpenNewProductModal} />
      <NewProductModal
        isOpen={isNewProductModalOpen}
        onRequestClose={handleCloseNewProductModal}
        onRequestUpdateTable={handleUpdateTable}
      />
      <Container>
        <Summary />
        <ProductsTable />
      </Container>
    </>
  );
}
