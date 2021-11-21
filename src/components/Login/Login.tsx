import { IoLogoGoogle } from "react-icons/io";
import { Separator, HandleCreateAccountButton } from "./styles";
import { useFormik } from "formik";
import { useAuth } from "../../hooks/useAuth";
import { useRouter } from "next/router";
import { getInventoryFromDatabase } from "../../services/database";

export default function Login() {
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      id: "",
    },
    onSubmit: async (values) => {
      const inventoryId = await getInventoryFromDatabase(values.id);
      if (inventoryId === "Inventory does not exists.") {
        alert("Inventário não encontrado");
      } else {
        router.push(`/dashboard/${inventoryId}`);
      }
    },
  });

  const { signInWithGoogle } = useAuth();
  async function handleLoginWithGoogleAccount() {
    await signInWithGoogle();
    router.push("/create-account");
  }

  return (
    <>
      <HandleCreateAccountButton onClick={handleLoginWithGoogleAccount}>
        <IoLogoGoogle size={30} id="GoogleIcon" />
        Crie seu estoque com o Google
      </HandleCreateAccountButton>
      <Separator>ou entre em sua conta</Separator>
      <form onSubmit={formik.handleSubmit}>
        <input
          type="text"
          placeholder="ID do seu estoque"
          id="id"
          name="id"
          onChange={formik.handleChange}
          value={formik.values.id}
          required={true}
        />
        <button
          type="submit"
          className="button"
          disabled={formik.values.id.trim() === ""}
        >
          Entrar no estoque
        </button>
      </form>
    </>
  );
}
