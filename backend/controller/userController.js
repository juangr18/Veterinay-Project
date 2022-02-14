import user from "../models/user.js";

const registerUser = async (req, res) => {
  if (!req.body.name || !req.body.email || !req.body.password || !req.body.pet)
    return res.status(400).send({ menssage: "Incomplete data." });
  let schema = new user({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    dbStatus: true,
    pet: req.body.pet,
  });
  let result = await schema.save();
  if (!result) return res.status(500).send({ menssage: "Failed to register" });
  res.status(200).send({ result });
};

export default { registerUser };