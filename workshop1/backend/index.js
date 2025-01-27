const express = require('express');
const cors = require('cors');
const { Pool } = require('pg'); // PostgreSQL client

const app = express();
app.use(cors());
app.use(express.json());

// Create a connection pool for Aurora PostgreSQL
const pool = new Pool({
  user: 'postgres', // Replace with your Aurora DB username
  host: 'workshop1-db.cluster-cfyeeo4ms01p.us-east-1.rds.amazonaws.com', // Replace with your Aurora endpoint
  database: 'workshop1', // Replace with your database name
  password: 'Aa123123$', // Replace with your Aurora DB password
  port: 5432, // Default PostgreSQL port
  ssl: {
    rejectUnauthorized: false // Optional: Accept self-signed certificates
  }
});

// Health check endpoint
app.get('/health', async (req, res) => {
  res.send('I am OK.');
});

// Fetch students from the database
app.get('/students', async (req, res) => {
  try {
    // Query the database
    const result = await pool.query('SELECT id, name, email FROM students'); // Adjust table/column names as needed
    res.json(result.rows); // Send the retrieved rows as JSON
  } catch (error) {
    console.error('Error fetching students:', error);
    res.status(500).send('Error fetching students');
  }
});

// Start the server
const port = 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));
