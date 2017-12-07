var assignments = []

exports.getStudent = function(req, response) {

	var esami = [];
	var i = assignments.length;
	while(i--)
		esami[i] = assignments[i];

	var student_id = req.query.student_id;

	if(student_id != null && student_id != undefined){
		i = esami.length;
		while(i--)
			if(esami[i]['studentId'] != student_id)
				esami.splice(i, 1);
	}

	var assignment_type = req.query.assignment_type;

	if(assignment_type != null && assignment_type != undefined){
		i = esami.length;
		while(i--)
			if(esami[i]['assignmentType'] != assignment_type)
				esami.splice(i, 1);
	}

	var assigment_id = req.query.assigment_id;

	if(assigment_id != null && assigment_id != undefined){
		i = esami.length;
		while(i--)
			if(esami[i]['assigmentId'] != assigment_id)
				esami.splice(i, 1);
	}

	response.writeHead(200, {"Content-Type": "application/json"});
	response.end(JSON.stringify(esami));
};

exports.addStudent = function(req, response) {
    var assignment_type = req.body.assignment_type;

	if(assignment_type == null || assignment_type == undefined){
		response.writeHead(404, {"Content-Type": "application/json"});
		response.end(JSON.stringify({
			code: "001",
			message: "assignment type not found"
		}));
		return;
	}

    var student_id  = req.body.student_id;

	if(student_id == null || student_id == undefined){
		response.writeHead(404, {"Content-Type": "application/json"});
		response.end(JSON.stringify({
			code: "002",
			message: "Student Id not found"
		}));
		return;
	}

    var assigment_id  = req.body.assigment_id

	if(assigment_id == null || assigment_id == undefined){
		response.writeHead(404, {"Content-Type": "application/json"});
		response.end(JSON.stringify({
			code: "003",
			message: "assignment Id not found"
		}));
		return;
	}

    var Content  = req.body.content;

	if(Content == null || Content == undefined){
		response.writeHead(404, {"Content-Type": "application/json"});
		response.end(JSON.stringify({
			code: "004",
			message: "Content not found"
		}));
		return;
	}

    var json ={
        assignmentType: assignment_type,
        studentId: student_id,
        assignmentId: assigment_id,
        content: Content
    };

    assignments.push(json);

	response.writeHead(200, {"Content-Type": "application/json"});
	response.end(JSON.stringify(json));
};

exports.modifyStudent = function(req, response) {
	response.writeHead(200, {"Content-Type": "application/json"});
	response.end(json);
};

exports.deleteStudent = function(req, response) {
};
