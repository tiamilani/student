'use strict';
module.exports = function(app) {
	const student = require('../controllers/student');

	app.route('/assignment')
		.get(student.getStudent)
		.post(student.addStudent)
		.put(student.modifyStudent)
		.delete(student.deleteStudent);
};
