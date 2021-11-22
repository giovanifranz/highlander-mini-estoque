import sgMail from "@sendgrid/mail";

interface Data {
  email: string;
  name: string;
  qrCode: string;
  inventory: string;
}

export async function sendEmail(
  accountID: string,
  { email, name, qrCode, inventory }: Data
) {
  if (process.env.NEXT_API_SENDGRID_API_KEY !== undefined && process.env.NEXT_PUBLIC_EMAIL !== undefined) {
    sgMail.setApiKey(process.env.NEXT_API_SENDGRID_API_KEY);

    const msg = {
      to: email,
      from: process.env.NEXT_PUBLIC_EMAIL,
      subject: `Parabéns ${name}, criou o estoque: ${inventory}`,
      html: `O código do seu estoque é: ${accountID}
      <br><img src=${qrCode} alt="qrCode"/><br> 
      Lembre-se, para acessar seu dashboard é necessário estar previamente Logado.`,
    };

    await sgMail.send(msg).then(
      () => {},
      (error) => {
        console.error(error);

        if (error.response) {
          console.error(error.response.body);
        }
      }
    );
  }
}
