const { createUserService } = require("../services/users.sr");
const AppError = require("../utils/appError.ut");

async function createUser(req, res, next) {
  const { name, phone } = req.body;
  if (!name || !phone) {
    throw new AppError("Name and Phone are Required!", 400);
  }
  const data = await createUserService(req.body);
  res.data = {
    statusCode: 201,
    message: "User created Successfully!",
    data,
  };
  next();
}

module.exports = {
  createUser,
};
