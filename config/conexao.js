const mongoose = require('mongoose');
const banco = "mongodb://diego:diego@ac-pcra3vd-shard-00-00.ajiapmy.mongodb.net:27017,ac-pcra3vd-shard-00-01.ajiapmy.mongodb.net:27017,ac-pcra3vd-shard-00-02.ajiapmy.mongodb.net:27017/?ssl=true&replicaSet=atlas-14e4b2-shard-0&authSource=admin&retryWrites=true&w=majority"
//const banco = "mongodb://localhost:27017/aula"
//const banco = "mongodb+srv://diego:diego@cluster0.ajiapmy.mongodb.net/?retryWrites=true&w=majority"


mongoose.connect(banco, { useNewUrlParser: true, useUnifiedTopology: true })

module.exports = mongoose;