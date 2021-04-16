const express = require('express')
const app = express()
const mongoose = require('mongoose')
const PORT = 5000
const cors = require('cors')
const Student = require('./models/Student')

app.use(express.json())
app.use(cors())
//Database
mongoose.connect('mongodb+srv://rkrathod:uXo26iJx9qPHo14m@cluster0.iiwyy.mongodb.net/studentdata?retryWrites=true&w=majority',
    {
        useNewUrlParser:true,
        useUnifiedTopology:true
    }
)

const connection = mongoose.connection

connection.once('open', ()=> {
	console.log('Database connection successfully!')
}).catch(err => {
	console.log(err)
})

//Routes
require('./routes/web')(app)

app.get('/', (req, res) => {
  res.send('Hello React JS and Node JS!')
})

// app.post('/student/create', async (req, res) => {

// 	const student = new Student({roll_number:1103,name:"Karan Rathod",class:"9th",dob:"05-01-2002",mobile:6359144914,city:"Botad"})

// 	try{
// 		console.log('data stored')
// 		var studentCreated = await student.save();
// 		console.log(studentCreated)
// 	} catch(err) {
// 		console.log(err)
// 	}
// })



app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})


