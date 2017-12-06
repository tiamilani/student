'use strict';
module.exports = function(app) {
	const student = require('../controllers/student');
	;

	app.route('/assignment')
		.post(student.addStudent)
		.put(student.modifyStudent);
};
