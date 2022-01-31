//Import User Model
User = require("../models/model");
//Index
exports.index = (req, res) => {
  User.get((err, user) => {
    if (err) {
      res.json({
        status: "error",
        message: err,
      });
    }
    res.json({
      status: "OK",
      message: "Successfully got Users",
      data: user,
    });
  });
};
//New User
exports.add = (req, res) => {
  let user = new User();
  user.name = req.body.name ? req.body.name : user.name;
  user.cellphone = req.body.cellphone;
  //Saving and error checking
  user.save((err) => {
    if (err) res.json(err);
    res.json({
      message: "New user Added!",
      data: user,
    });
  });
};
//Get userphone
exports.view = (req, res) => {
  user.findById(req.params.id, (err, user) => {
    if (err) res.send(err);
    res.json({
      message: "user Details",
      data: user,
    });
  });
};
//Update user
exports.update = (req, res) => {
  user.findById(req.params.id, (err, user) => {
    if (err) res.send(err);
    user.name = req.body.name ? req.body.name : user.name;
    user.cellphone = req.body.cellphone;
    //Saving and checking errors
    user.save((err) => {
      if (err) res.json(err);
      try {
        res.json({
          message: "user Updated Successfully",
          data: user,
        });
      } catch (e) {
        console.log(
          "There was an error and it couldnt send anymore headers",
          e
        );
      }
    });
  });
};
//Delete user
exports.delete = (req, res) => {
  user.deleteOne({ _id: req.params.id }, (err, contact) => {
    if (err) res.send(err);
    try {
      res.json({
        status: "OK",
        message: "user Deleted!",
      });
    } catch (e) {
      console.log("There was an error and it couldnt send anymore headers", e);
    }
  });
};
