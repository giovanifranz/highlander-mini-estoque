import Modal from "react-modal";
import { Container } from "./styles";
import { RiCloseCircleFill } from "react-icons/ri";
import { useFormik } from "formik";
import { setProductsInDatabase } from "../../services/database";
import { useAuth } from "../../hooks/useAuth";
import { useRouter } from "next/router";

interface NewProductModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  onRequestUpdateTable: () => void;
}

export function NewProductModal({
  isOpen,
  onRequestClose,
  onRequestUpdateTable,
}: NewProductModalProps) {
  const user = useAuth();
  const accountID = useRouter().query.id;

  const formik = useFormik({
    initialValues: {
      sku: "",
      category: "",
      productName: "",
      providerName: "",
      value: 0,
      qtd: 0,
    },
    onSubmit: async (values) => {
      if (user) {
        if (typeof accountID === "string") {
          const data = {
            accountID,
            ...values,
          };
          await setProductsInDatabase(data);
          onRequestUpdateTable();
          onRequestClose();
        } else {
          throw new Error("Account ID does not exist");
        }
      } else {
        alert("Você precisa estar logado para cadastrar um produto");
      }
    },
  });

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <RiCloseCircleFill />
      </button>
      <Container onSubmit={formik.handleSubmit}>
        <h2>Cadastrar Produto</h2>

        <p>Código do Produto</p>
        <input
          placeholder="SKU"
          id="sku"
          name="sku"
          onChange={formik.handleChange}
          value={formik.values.sku}
          required={true}
        />
        <p>Nome do Produto</p>
        <input
          placeholder="Produto"
          id="productName"
          name="productName"
          onChange={formik.handleChange}
          value={formik.values.productName}
          required={true}
        />
        <p>Nome do Fornecedor</p>
        <input
          placeholder="Fornecedor"
          id="providerName"
          name="providerName"
          onChange={formik.handleChange}
          value={formik.values.providerName}
          required={true}
        />
        <p>Valor do Produto</p>
        <input
          placeholder="0,00"
          id="value"
          name="value"
          onChange={formik.handleChange}
          value={formik.values.value}
          type="number"
          required={true}
          min={0}
          step="any"
        />
        <p>Quantidade</p>
        <input
          placeholder="Qtd"
          id="qtd"
          name="qtd"
          onChange={formik.handleChange}
          value={formik.values.qtd}
          type="number"
          required={true}
          min={0}
        />
        <button type="submit" className="button">
          Cadastrar
        </button>
      </Container>
    </Modal>
  );
}
