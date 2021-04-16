const mongoose = require('mongoose')

const StudentSchema = new mongoose.Schema({
	roll_number : { type:Number, required:true, unique:true },
	name : { type:String, required:true },
	class:{ type:String },
	dob: { type:String },
	mobile: { type:Number },
	city:{ type:String }
},{timestamps:true})

module.exports = mongoose.model('Student', StudentSchema);