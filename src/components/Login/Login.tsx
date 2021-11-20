import { IoLogoGoogle } from "react-icons/io";
import { Separator, HandleCreateAccountButton } from "./styles";
import { useFormik } from "formik";
import { useAuth } from "../../hooks/useAuth";
import { useRouter } from "next/dist/client/router";

export default function Login() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      console.log(values);
    },
  });

  const router = useRouter();
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
        <button type="submit" className="button">
          Entrar no estoque
        </button>
      </form>
    </>
  );
}
