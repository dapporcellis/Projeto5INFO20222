const Post = require('../model/Post');

function abreindex(req,res){
    Post.find({}).populate('usuario').exec(function(err,posts){
        res.render('public/index',{Posts:posts})
    })
}

module.exports = {
    abreindex 
}