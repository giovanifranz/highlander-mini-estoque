import { useFormik } from "formik";
import { Container } from "./styles";
import { useAuth } from "../../hooks/useAuth";
import { setAccountInDatabase } from "../../services/database";
import { useRouter } from "next/router";

export default function CreateAccount() {
  const { user, signOutGoogle } = useAuth();
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      inventory: "",
      email: "",
    },
    onSubmit: async (values) => {
      if (user !== undefined) {
        const { uid, displayName, photoURL } = user;
        const account = {
          providerID: uid,
          name: displayName,
          photoURL,
          ...values,
        };
        const accountID = await setAccountInDatabase(account);
        router.push(`/dashboard/${accountID}`);
      }
    },
  });

  async function HandleSignOutGoogle() {
    await signOutGoogle();
    router.push("/");
  }
  return (
    <Container>
      <h2>Crie seu estoque: {user ? user.displayName : null}</h2>
      <form onSubmit={formik.handleSubmit}>
        <input
          type="email"
          placeholder="E-mail"
          id="email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          required={true}
        />
        <input
          type="text"
          placeholder="Nome do estoque"
          id="inventory"
          name="inventory"
          onChange={formik.handleChange}
          value={formik.values.inventory}
          required={true}
        />
        <button
          type="submit"
          disabled={
            formik.values.inventory.trim() === "" ||
            formik.values.email.trim() === ""
          }
          className="button"
        >
          Criar estoque
        </button>
      </form>
      <p>
        Não quer criar estoque? <a onClick={HandleSignOutGoogle}>Clique Aqui</a>
      </p>
    </Container>
  );
}
