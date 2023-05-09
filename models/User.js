const mongoose = require ('mongoose');
const bcrypt = require ("bcrypt")
//const Schema = mongoose.Schema;


let userSchema = new mongoose.Schema({
   name: {type: String, required:true, lowercase:true},
   staffNumber: {type:String, required:true, unique:true, lowercase:true},
   
   userName: {type: String, required:true, unique:true, lowercase:true},
   password: {type: String, required:true},
   
})

userSchema.pre('save', async function(next){
   this.password = await bcrypt.hash(this.password, 13);
   next()
})

let User = mongoose.model('User', userSchema)

module.exports = User;

//location: {type: String, required:true, lowercase:true},
//manager: {type: String, required:true, lowercase:true},

//KPIs: {type:Array, default:[]},
//image: {type: String, default: ""}