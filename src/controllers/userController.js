import Queue from "../lib/queue";
import Mail from "../lib/mail";

export default {
  async store(req, res) {
    const { name, email, password } = req.body;

    const createUser = {
      name,
      email,
      password
    };

    await Queue.add({ createUser });

    return createUser;
  }
};
