export default {
  async store(req, res) {
    const { name, email, password } = req.body;

    const createUser = {
      name,
      email,
      password
    };

    return createUser;
  }
};
