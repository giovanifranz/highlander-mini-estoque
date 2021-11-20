import { useFormik } from "formik";
import { Container } from "./styles";
import { useAuth } from "../../hooks/useAuth";
import { setAccountInDatabase } from "../../services/setDatabase";
import { useRouter } from "next/router";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

export default function CreateAccount() {
  const { user, signOutGoogle } = useAuth();
  const [confirmPsw, setConfirmPsw] = useState("");
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      inventoryName: "",
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      if (user !== undefined) {
        const { uid, displayName, photoURL } = user;
        const inventoryId = uuidv4();
        const data = {
          uid,
          displayName,
          photoURL,
          inventoryId,
          ...values,
        };        
        await setAccountInDatabase(data);
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
          type="password"
          placeholder="Senha"
          id="password"
          name="password"
          onChange={formik.handleChange}
          value={formik.values.password}
          required={true}
        />
        <input
          type="password"
          placeholder="Confirme a senha"
          id="confirmPassword"
          name="confirmPassword"
          onChange={(e) => setConfirmPsw(e.target.value)}
          value={confirmPsw}
          required={true}
        />
        <input
          type="text"
          placeholder="Nome do estoque"
          id="inventoryName"
          name="inventoryName"
          onChange={formik.handleChange}
          value={formik.values.inventoryName}
          required={true}
        />
        <button
          type="submit"
          disabled={
            formik.values.email.trim() === "" ||
            formik.values.password.trim() === "" ||
            formik.values.inventoryName.trim() === "" ||
            formik.values.password !== confirmPsw
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
