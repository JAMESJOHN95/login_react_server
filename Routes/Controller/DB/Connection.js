const mongoose = require('mongoose')

mongoose.connect(process.env.DBConnection).then(
    result=>{
console.log("MongoDB connecter With server");
    }
).catch(err=>{
    console.log('Conection Failed');
    console.log(err);
})