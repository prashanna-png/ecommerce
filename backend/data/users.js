import bcrypt from "bcryptjs";

const users = [
  {
    fullName: "admin",
    email: "admin@example.com",
    password: bcrypt.hashSync("password", 10),
    isAdmin: true,
  },
  {
    fullName: "John Doe",
    email: "john.doe@example.com",
    password: bcrypt.hashSync("password", 10),
    isAdmin: false,
  },
  {
    fullName: "Jane Doe",
    email: "jane.doe@example.com",
    password: bcrypt.hashSync("password", 10),
    isAdmin: false,
  },
];

export default users;
