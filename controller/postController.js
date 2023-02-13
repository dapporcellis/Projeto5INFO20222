const Post = require("../model/Post");
const Usuario = require("../model/Usuario");

function abreadd(req,res){
    Usuario.find({},function(err,usuarios){
        res.render('post/add',{Usuarios:usuarios})
    })
}

function add(req,res){
    let post = new Post({
        titulo: req.body.titulo,
        texto: req.body.texto,
        data: new Date(),
        foto: req.file.filename,
        usuario: req.body.usuario
    })

    post.save(function(err){
        if(err){
            console.log(err);
        }else{
            res.redirect('/admin/post/lst')
        }
    });
}

function list(req,res){
    Post.find({},function(err,posts){
        res.render('post/lst',{Posts:posts})
    })
}

function filtro(req,res){
    Post.find({titulo: new RegExp(req.body.pesquisar, 'i')},function(err,posts){
        res.render('post/lst',{Posts:posts})
    })
}

function del(req,res){
    Post.findByIdAndDelete(req.params.id,function(err,post){
        res.redirect('/admin/post/lst')
    })
}

function abreedt(req,res){
    Post.findById(req.params.id,function(err,post){
        res.render('post/edt',{'Post':post})
    })
}

function edt(req,res){
    Post.findByIdAndUpdate(req.params.id,{
        titulo: req.body.titulo,
        texto: req.body.texto,
        data: new Date(),
        foto: req.file.filename,
        usuario:req.body.usuario
    },function(err,post){
        res.redirect('/admin/post/lst')
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