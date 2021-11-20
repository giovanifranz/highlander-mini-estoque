import Modal from "react-modal";
import { Container } from "./styles";
import { RiCloseCircleFill } from "react-icons/ri";
import { useFormik } from "formik";
import { setProductsInDatabase } from "../../services/setDatabase";
import { useAuth } from "../../hooks/useAuth";

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
  const { user } = useAuth();
  const uid = user?.uid;

  const formik = useFormik({
    initialValues: {
      sku: "",
      category: "",
      productName: "",
      providerName: "",
      value: 0,
    },
    onSubmit: async (values) => {
      if (uid !== undefined) {
        const data = { uid, ...values };
        await setProductsInDatabase(data);
        onRequestUpdateTable();
        onRequestClose();
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

        <input
          placeholder="Código do Produto"
          id="sku"
          name="sku"
          onChange={formik.handleChange}
          value={formik.values.sku}
          required={true}
        />
        <input
          placeholder="Categoria do Produto"
          id="category"
          name="category"
          onChange={formik.handleChange}
          value={formik.values.category}
          required={true}
        />
        <input
          placeholder="Nome do Produto"
          id="productName"
          name="productName"
          onChange={formik.handleChange}
          value={formik.values.productName}
          required={true}
        />
        <input
          placeholder="Nome do Fornecedor	"
          id="providerName"
          name="providerName"
          onChange={formik.handleChange}
          value={formik.values.providerName}
          required={true}
        />
        <input
          placeholder="Valor do Produto"
          id="value"
          name="value"
          onChange={formik.handleChange}
          value={formik.values.value}
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
