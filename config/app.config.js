require("dotenv").config();
const {
  APP_PORT,
  BCRYPT,
  JWT_SECRET,
  JWT_EXPIRED,
  EPOCH_EXPIRED,
  BACKEND_SECRET,
} = process.env;

module.exports = {
  port: APP_PORT,
  bcrypt: Number(BCRYPT),
  jwt_secret: JWT_SECRET,
  jwt_expired: JWT_EXPIRED,
  in_millis_expired: EPOCH_EXPIRED,
  backend_secret: BACKEND_SECRET,
};
