// Import the mysql module
const mysql = require('mysql2/promise');

// Import the database configuration
const config = require('../config');

// Function to execute SQL queries
const query = async (sql, params) => {
    // Create a connection to the database
    const connection = await mysql.createConnection(config.db);

    // Execute the SQL query with the provided parameters
    const [results, ] = await connection.execute(sql, params);

    // Close the database connection
    await connection.end();

    // Return the query results
    return results;
};

// Export the query function
module.exports = {
    query
};
