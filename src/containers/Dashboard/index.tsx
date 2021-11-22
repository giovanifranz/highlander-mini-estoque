import { Container } from "./styles";
import { Summary } from "../../components/Summary";
import { ProductsTable } from "../../components/ProductsTable";
import { useState } from "react";
import { Header } from "../../components/Header";
import { NewProductModal } from "../../components/NewProductModal";
import Modal from "react-modal";

Modal.setAppElement("#__next");

export default function Dashboard() {
  const [isNewProductModalOpen, setIsNewProductModalOpen] = useState(false);
  const [update, setUpdate] = useState(false);
  function handleOpenNewProductModal() {
    setIsNewProductModalOpen(true);
  }

  function handleCloseNewProductModal() {
    setIsNewProductModalOpen(false);
  }

  async function handleUpdateTable() {
    setUpdate(!update);
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
        <ProductsTable updateTable={update} onRequestUpdateTable={handleUpdateTable}/>
      </Container>
    </>
  );
}
