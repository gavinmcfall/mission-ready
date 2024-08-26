const bcrypt = require("bcrypt");

const userEnteredPlainPassword = "password123";

// Hash a password with a salt
bcrypt.hash(userEnteredPlainPassword, 10, (err, hashedPassword) => {
  console.log(hashedPassword);
});

const hashedPassword =
  "$2b$10$2mY61j0PrQrxBxzTfVithuwQWazuaYv8J343gxXxPw7TcHU.peb4C";
bcrypt.compare(userEnteredPlainPassword, hashedPassword, (err, result) => {
  console.log(result);
});
