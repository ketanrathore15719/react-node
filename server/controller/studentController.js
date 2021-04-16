const Student = require('../models/Student')

function studentController() {
	return {
		async index(req, res) {
			Student.find({}, (err, result) => {
				if (err) {
					res.send(err)
				}
				res.send(result);
			})
			
		},
		async create(req, res){
			const roll_number = req.body.rollnumber
			const name = req.body.name
			const stdclass = req.body.stdclass
			const dob = req.body.dob
			const mobile = req.body.mobile
			const city = req.body.city

			const student = new Student({roll_number:roll_number,name:name,class:stdclass,dob:dob,mobile:mobile,city:city})

			try{
				console.log('data stored')
				var studentCreated = await student.save();
				console.log(studentCreated)
				return res.send(studentCreated)
			} catch(err) {
				console.log(err)
			}
			
		},
		async edit(req, res) {
			const student = await Student.findById(req.params.id)
			try{
				console.log('data fetch')
				console.log(student)
				return res.send(student);
			} catch(err) {
				console.log(err)
			}
		},
		async update(req, res) {
			const name = req.body.name
			const stdclass = req.body.stdclass
			const mobile = req.body.mobile
			const city = req.body.city
			const data = await Student.update({_id:req.params.id},{name:name,class:stdclass,mobile:mobile,city:city},(err, data)=>{
				if (err) {
					return res.send(err)
				}
				console.log('updated')
			})
			return res.send(data)
		},
		async delete(req, res) {
			const data = await Student.deleteOne({_id:req.params.id},(err)=>{
				if (err) {
					console.log(err)
				}
				console.log('deleted')
			})
			return res.send(data)
		},
		async search(req, res) {
			var regex = new RegExp(req.params.name, 'i');
			Student.find({$or:[{name:regex},{city:regex},{class:regex}]}).then((result)=>{
				res.status(200).json(result)
			})
		}
	}
}

module.exports = studentController