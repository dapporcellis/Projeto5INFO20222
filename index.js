const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

const usuarioRoute = require("./routes/usuarioRoute")
const postRoute = require("./routes/postRoute")
const publicRoute = require("./routes/publicRoute")

app.use('/admin',usuarioRoute);
app.use('/admin',postRoute);
app.use('/',publicRoute);

app.listen(3000, function(){
  console.log("Servidor funcionando na porta 3000")
});
