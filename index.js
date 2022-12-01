const express = require("express");
const app = express();
const path = require("path");
const Usuario = require("./model/Usuario");

app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.get('/admin/usuario/add',function(req,res){
  res.render('usuario/add')
})

app.post('/admin/usuario/add',function(req,res){
  let usuario = new Usuario(req.body)

  usuario.save(function(err){
    if(err){
      console.log(err);
    }else{
      res.send("Adicionado com sucesso!")
    }
  });
})

app.get('/admin/usuario/lst',function(req,res){
  Usuario.find({},function(err,usuarios){
    res.render('usuario/lst',{Usuarios:usuarios})
  })
})

app.post('/admin/usuario/lst',function(req,res){
  Usuario.find({nome: new RegExp(req.body.pesquisar, 'i')},function(err,usuarios){
    res.render('usuario/lst',{Usuarios:usuarios})
  })
})

app.listen(3000, function(){
  console.log("Servidor funcionando na porta 3000")
});
