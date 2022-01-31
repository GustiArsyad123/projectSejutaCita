const router = require("express").Router(); //router function of //express
const controller = require("../controllers/controller");
//API HOME
router.get("/", (req, res) => {
  res.send("API WORKING");
});
// Smartphone routes
router.route("/user").get(controller.index).post(controller.add);
router
  .route("/user/:id")
  .get(controller.view)
  .patch(controller.update)
  .put(controller.update)
  .delete(controller.delete);
module.exports = router;
