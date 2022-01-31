let mongoose = require("mongoose"); //using mongoose
//the schema of the model, aka the structure
let UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  cellphone: {
    type: String,
    required: true,
  },
});
// Export User Model
let User = (module.exports = mongoose.model(
  "user",
  UserSchema
));
module.exports.get = function (callback, limit) {
  User.find(callback).limit(limit);
};
