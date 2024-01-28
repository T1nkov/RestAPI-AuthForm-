const {
  createUserDB,
  getUserByEmail,
  updateUserPathDB,
  deleteUserByIdDB,
  getAllUserDB,
  getUserByIdDB,
  updateUserByIdDB,
} = require("../repository/repositiry");


async function deleteUserById(id) {
  const data = await deleteUserByIdDB(id);

  if (!data.length) throw new Error("Array is empty");
  return data;
}
async function updateUserPath(id, body) {
  const user = await updateUserPathDB(id, body);
  if (id < 0) throw new Error("id is not valid");
  if (!user.length) throw new Error("data does not create");
  return user;
}
async function getAllUser() {
  const user = await getAllUserDB();
  return user;
}
const getUserById = async (id) => {
  const user = await getUserByIdDB(id);
  return user;
};
async function updateUserById(id, username, email, phone, pwd) {
  const user = await updateUserByIdDB(id, username, email, phone, pwd);
  return user;
}



module.exports = {
  createUser,
  updateUserPath,
  deleteUserById,
  getAllUser,
  getUserById,
  updateUserById,
  authUser,
};
