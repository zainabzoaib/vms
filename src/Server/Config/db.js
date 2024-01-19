const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "dba",
  password: "dbadmin",
  database: "visitors_management_system",
  port: 8889,
  waitForConnections: true,
  connectionLimit: 10,
  maxIdle: 10, // max idle connections, the default value is the same as `connectionLimit`
  idleTimeout: 60000, // idle connections timeout, in milliseconds, the default value 60000
  queueLimit: 0,
  enableKeepAlive: true,
  keepAliveInitialDelay: 0,
});
db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err);
  } else {
    console.log("Database connected successfully");
  }
});
// Fetch visitor records by date
app.get("/api/todays-visitor-records", (req, res) => {
  const today = new Date().toISOString().split("T")[0];
  const query = `SELECT COUNT(*) as count FROM visitor_records WHERE DATE(entry_date) = '${today}'`;

  db.query(query, (error, results) => {
    if (error) {
      console.error("Error fetching today's visitor count from MySQL:", error);
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      res.json({ count: results[0].count });
    }
  });
});
//all visitors records
app.get("/api/visitors", (req, res) => {
  const query = "SELECT * FROM visitor_records";

  db.query(query, (error, results) => {
    if (error) {
      console.error("Error fetching visitors from MySQL:", error);
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      res.json(results);
    }
  });
});
//all user records
app.get("/api/users", (req, res) => {
  const querySelect = "SELECT * FROM users";

  db.query(querySelect, (error, results) => {
    if (error) {
      console.error("Error fetching users from MySQL:", error);
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      res.json(results);
    }
  });
});
//insert into visitors table

app.post("/api/visitor", (req, res) => {
  const { name, phone, email, purpose_of_visit, person_meeting } = req.body;

  if (!name || !phone || !email || !purpose_of_visit || !person_meeting) {
    return res.status(400).json({ error: "All fields are required" });
  }
  const insertQuery =
    "INSERT INTO `visitor_records`(`name`, `phone`, `email`, `purpose_of_visit`, `person_meeting`) VALUE (?,?,?,?,?)";
  db.query(
    insertQuery,
    [name, phone, email, purpose_of_visit, person_meeting],
    (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: "Internal Server Error" });
      } else {
        res.status(201).json({
          message: "Registration done successfully",
          //   userId: result.insertId,
        });
      }
    }
  );
});
//insert into user records
app.post("/api/user", (req, res) => {
  const { username, password, email, role } = req.body;

  if (!username || !password || !email || !role) {
    return res.status(400).json({ error: "All fields are required" });
  }
  const insertQuery =
    "INSERT INTO `users`(`username`, `password`, `email`, `role`) VALUE (?,?,?,?)";
  db.query(insertQuery, [username, password, email, role], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      res.status(201).json({
        message: "user added done successfully",
        //   userId: result.insertId,
      });
    }
  });
});
//filter visitor records
app.get("/api/visitors-filter", (req, res) => {
  const { name, date } = req.query;
  let query = "SELECT * FROM visitor_records";

  if (name) {
    query += ` WHERE name LIKE '%${name}%'`;
  }

  if (date) {
    // Assuming date is in a specific format, adjust as needed
    query += ` AND DATE(entry_date) = '${date}'`;
  }

  db.query(query, (error, results) => {
    if (error) {
      console.error("Error fetching visitors from MySQL:", error);
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      res.json(results);
    }
  });
});
//visitors in a month
app.get("/api/monthly-visitors", (req, res) => {
  const today = new Date();
  const currentMonth = today.getMonth() + 1; // Months are zero-based
  const currentYear = today.getFullYear();

  const query = `
    SELECT
      COUNT(*) AS count
    FROM
      visitor_records
    WHERE
      MONTH(entry_date) = ${currentMonth} AND YEAR(entry_date) = ${currentYear}
  `;

  db.query(query, (error, results) => {
    if (error) {
      console.error("Error fetching monthly visitor count from MySQL:", error);
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      res.json({ count: results[0].count });
    }
  });
});
//login code
app.post("/api/login", (req, res) => {
  const { user, pass } = req.body;

  // Query the database for the user with the provided credentials
  db.query(
    "SELECT username FROM users WHERE username = ? AND password = ?",
    [user, pass],
    (err, results) => {
      if (err) {
        console.error("Error querying the database:", err);
        res
          .status(500)
          .json({ success: false, error: "Internal Server Error" });
        return;
      }

      // Check if the query returned any results
      if (results.length > 0) {
        // If valid, send a success response with user details
        results[0].token = "abcd1234";
        res.json({ success: true, user: results[0] });
      } else {
        // If not valid, send a failure response
        res.json({ success: false, error: "Invalid credentials" });
      }
    }
  );
});
app.put('/api/users/:userId', (req, res) => {
  const { userId } = req.params;
  const updatedUser = req.body;

  db.query('UPDATE users SET ? WHERE user_id = ?', [updatedUser, userId], (err, result) => {
    if (err) {
      console.error('Error updating user:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json({ message: 'User updated successfully', result });
    }
  });
});
// Endpoint to delete a user by user_id
app.delete('/api/users/:userId', (req, res) => {
  const { userId } = req.params;

  db.query('DELETE FROM users WHERE user_id = ?', userId, (err, result) => {
    if (err) {
      console.error('Error deleting user:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json({ message: 'User deleted successfully', result });
    }
  });
});
//calender filter
app.get('/api/entries', (req, res) => {
  const { date } = req.query;

  // Check if the date parameter is provided
  if (!date) {
    return res.status(400).json({ error: 'Date parameter is required.' });
  }

  // Perform the query to fetch entries for the given date
  const query = 'SELECT * FROM visitor_records WHERE DATE(entry_date) = ?';
  db.query(query, [date], (err, results) => {
    if (err) {
      console.error('Error executing MySQL query:', err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }

    res.json(results);
  });
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
