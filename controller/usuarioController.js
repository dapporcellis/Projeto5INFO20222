const Usuario = require("../model/Usuario");

function abreadd(req,res){
    res.render('usuario/add')
}

function add(req,res){
    let usuario = new Usuario({
        nome: req.body.nome,
        email: req.body.email,
        senha: req.body.senha,
        foto: req.file.filename
    })

    usuario.save(function(err){
        if(err){
            console.log(err);
        }else{
            res.redirect('/admin/usuario/lst')
        }
    });
}

function list(req,res){
    Usuario.find({},function(err,usuarios){
        res.render('usuario/lst',{Usuarios:usuarios})
    })
}

function filtro(req,res){
    Usuario.find({nome: new RegExp(req.body.pesquisar, 'i')},function(err,usuarios){
        res.render('usuario/lst',{Usuarios:usuarios})
    })
}

function del(req,res){
    Usuario.findByIdAndDelete(req.params.id,function(err,usuario){
        res.redirect('/admin/usuario/lst')
    })
}

function abreedt(req,res){
    Usuario.findById(req.params.id,function(err,usuario){
        res.render('usuario/edt',{'Usuario':usuario})
    })
}

function edt(req,res){
    Usuario.findByIdAndUpdate(req.params.id,{
        nome: req.body.nome,
        email: req.body.email,
        senha: req.body.senha,
        foto: req.file.filename
    },function(err,usuario){
        res.redirect('/admin/usuario/lst')
    })
}

module.exports = {
    abreadd,
    add,
    list,
    filtro,
    abreedt,
    edt,
    del
}