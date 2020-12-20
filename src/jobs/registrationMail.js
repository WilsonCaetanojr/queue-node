import Mail from "../lib/mail";

export default {
  key: "registrationMail",
  async handle({ data }) {
    const { createUser } = data;

    await Mail.sendMail({
      from: "Queue Teste <queue@teste.com",
      to: `${createUser.name} <${createUser.email}>`,
      subjec: "Teste de envio",
      html: `Olá ${createUser.name}, bem vindo ao sistema de fila com node.js :D`
    });
  }
};
