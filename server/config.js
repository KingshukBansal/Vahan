require('dotenv').config(); // Load environment variables from .env file

// Database configuration
const config = {
  db: {
      host: process.env.DB_HOST,                                // Database host
      user: process.env.DB_USER,                                // Database user
      password: process.env.DB_PASSWORD,                        // Database password
      database: process.env.DB_NAME,                            // Database name
      connectTimeout: process.env.DB_CONNECT_TIMEOUT,           // Connection timeout in milliseconds
      dateStrings: process.env.DB_DATE_STRINGS === 'true'       // Convert date objects to strings
  },
  listPerPage: 10                 // Number of items to display per page
};

module.exports = config;
