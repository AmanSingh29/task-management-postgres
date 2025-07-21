const User = require("../models/users.mo");

async function createUserService(data) {
  const { name, phone } = data || {};
  const res = await User.create({ name, phone });
  return res;
}

module.exports = {
    createUserService
}