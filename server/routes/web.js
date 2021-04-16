//Controller
const studentController = require('../controller/studentController')


function initRoutes(app) {

	app.get('/student', studentController().index)
	app.post('/student/create', studentController().create)

	app.get('/student/:id', studentController().edit)
	app.post('/student/update/:id', studentController().update)
	app.delete('/student/delete/:id', studentController().delete)

	app.get('/student/search/:name', studentController().search)
}

module.exports = initRoutes


