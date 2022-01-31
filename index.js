// dependencies
const apiRoutes = require("./routes/routes");
const app = require("express")(); // the () inits express
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

//Connect to DB
const dbPath = 'mongodb://localhost/UserApp';
const options = {useNewUrlParser: true, useUnifiedTopology: true}
const mongo = mongoose.connect(dbPath, options).then(console.log('Connected')).catch(e=>console.log(e));
let db = mongoose.connection;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/", apiRoutes);


//Indicate the port to associate to the server, in this case 8000
let port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
