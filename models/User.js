const mongoose = require ('mongoose');
const Schema = mongoose.Schema;


let userSchema = new Schema({
   name: {type: String, required:true, lowercase:true},
   staffNumber: {typr:String, required:true, unique:true, lowercase:true},
   location: {type: String, required:true, lowercase:true},
   manager: {type: String, required:true, lowercase:true},
   userName: {type: String, required:true, unique:true, lowercase:true},
   password: {type: String, required:true},
   KPIs: {type:Arrays, default:[]},
   image: {type: String, default: ""}
})

let User = mongoose.model('User', userSchema)

module.exports = User;