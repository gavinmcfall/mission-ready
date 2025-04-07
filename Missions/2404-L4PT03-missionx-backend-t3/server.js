const express = require("express");
const mysql = require("mysql2");
const app = express();
const cors = require("cors");
app.use(cors("http://localhost:5173"));
require("dotenv").config();
app.use(express.json());

// Database Config
const pool = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  port: process.env.MYSQL_PORT,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

//Endpoints
app.get("/", (req, res) => {
  res.send("Backend is Connected JSX Wizards!");
});

app.get("/api/v1/projects", (req, res) => {
  pool.query("SELECT * FROM project", (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
});

app.get("/api/v1/student_projects", (req, res) => {
  pool.query("SELECT * FROM student_projects", (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
});

app.get("/api/v1/teacher-dashboard/project-submissions", (req, res) => { //Use INNER JOIN to connect two tables together. Use AS as Alias for long table or column names. 
  console.log("end point hit for project submissions")
  pool.query( `SELECT 
    s.student_id, 
    s.name, 
    s.profile_pic, 
    sp.date_submitted, 
    sp.submission, 
    sp.project_id
    FROM  student AS s
    INNER JOIN student_projects AS sp ON s.student_id = sp.student_id 
  WHERE 
    sp.date_submitted IS NOT NULL
    AND sp.date_completed IS NULL
`,  (err, result) => {
    if (err) {
      console.log(err);
      }
      console.log(result);
      res.send(result);
    }
  );
});

app.post("/api/v1/student-dashboard/submit-project", (req, res) => {// post endpoint for new user and updated database once project submitted.
  console.log(req.body);
  const { student_id, project_id, submission } = req.body;
  pool.query(
    `Update student_projects
Set submission = "${submission}", date_submitted = now()
Where student_id = ${student_id} and project_id = ${project_id};`,
    (err, result) => {
      if (err) {
        console.log(err);
      }
      res.send(result);
    }
  );
});

app.get("/api/v1/student/:id", (req, res) => {
  const studentId = req.params.id; // Extract the ID from the URL
  pool.query(
    "SELECT * FROM student WHERE student_id = ?",
    [studentId], // Corrected placeholder for MySQL
    (err, result) => {
      if (err) {
        console.log(err);
        res
          .status(500)
          .send("An error occurred while retrieving the student data.");
      } else if (result.length === 0) {
        res.status(404).send("Student not found"); // Handle case where no student is found
      } else {
        res.send(result[0]); // Return the single student's data
      }
    }
  );
});

app.get("/api/v1/teacher-profile", (req, res) => {
  const teacherId = req.params.id; 
  pool.query(
    "SELECT * FROM teacher WHERE teacher_id = 1",
    [teacherId], 
    (err, result) => {
      if (err) {
        console.log(err);
        res
          .status(500)
          .send("An error occurred while retrieving the teacher data.");
      } else if (result.length === 0) {
        res.status(404).send("Teacher not found"); 
      } else {
        res.send(result[0]); 
      }
    }
  );
});

app.get("/api/v1/teacher-dashboard/help-requests", (req, res) => {
  
  pool.query(
    
    `SELECT student.student_id, student.profile_pic, student.name, help_request.date_created, help_request.done, help_request.request_id
FROM help_request LEFT JOIN student ON help_request.student_id = student.student_id WHERE help_request.done = 0;`,

    (err, result) => {
      if (err) {
        console.log(err);
        res
          .status(500)
          .send("An error occurred while retrieving the teacher data.");
      } else if (result.length === 0) {
        res.status(404).send("help request not found"); 
      } else {
        res.send(result); 
      }
    }
  );
});

app.post("/api/v1/teacher-dashboard/mark-complete", (req, res) => {
  const { student_id, project_id } = req.body;
  console.log(student_id)
  console.log(project_id)
  pool.query(
    `UPDATE student_projects
     SET date_completed = NOW()
     WHERE student_id IN (${student_id}) AND project_id IN (${project_id})`,
    (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send('Error marking project as complete');
      } else {
        res.send('Project marked as complete');
      }
    }
  );
});

app.get("/api/v1/teacher-profile", (req, res) => {
  pool.query("SELECT name, profile_pic from teacher;", (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
});

app.patch('/api/v1/teacher-dashboard/help-requests/complete', (req, res) => {
  const requestIds = req.body.ids
  console.log(requestIds)

  // SQL Query to mark the help request as "done"
  const query = `UPDATE help_request SET done = 1 WHERE request_id IN (?)`;

  
  pool.query(query, [requestIds], (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Failed to mark as done' });
    }
    res.status(200).json({ message: 'Help request marked as done' });
  });
});



const PORT = process.env.PORT;

app
  .listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  })
  .on("error", (error) => {
    console.log("Server error: ", error);
  });
