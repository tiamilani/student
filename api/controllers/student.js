var assignments = []

exports.addStudent = function(req, response) {
	console.log("Request handler list_all_tasks was called.");
	response.writeHead(200, {"Content-Type": "application/json"});

    var assignment_type = req.body.assignment_type;
    var student_id  = req.body.student_id;
    var assigment_id  = req.body.assigment_id
    var content  = req.body.content;

    var json ={
        assignmentType: assignment_type,
        studentId: student_id,
        assignmentId: assigment_id,
        Content: content
    };

    assignment.push(json);

	response.end(json);
};

exports.modifyStudent = function(req, response) {
	console.log("Request handler list_all_tasks was called.");
	response.writeHead(200, {"Content-Type": "application/json"});
	response.end(json);
};
