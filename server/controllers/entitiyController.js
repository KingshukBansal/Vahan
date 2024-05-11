// Import the database service
const db = require('../services/db');

// Controller function to create a new entity
const createEntity = async (req, res) => {
  try {
    const { entityName, attributes } = req.body;

    // Construct the SQL query to create the table
    let sqlQuery = `CREATE TABLE IF NOT EXISTS ${entityName} (`;

    // Iterate through each attribute and add it to the query
    for (const attr of attributes) {
      sqlQuery += `${attr.name} ${attr.type}, `;
    }

    // Remove the extra comma and add the closing parenthesis
    sqlQuery = sqlQuery.slice(0, -2) + ');';

    // Execute the SQL query
    const queryResult = await db.query(sqlQuery);

    // Send response
    res.status(200).send({ message: "Entity added successfully", queryResult });
  } catch (error) {
    console.log(error);
    res.status(400).send({ error: error, message: "Entity could not be created" });
  }
}

// Controller function to delete an entity
const deleteEntity = async (req, res) => {
  try {
    const { entityName } = req.params;

    // Construct the SQL query to drop the table
    const sqlQuery = `DROP TABLE IF EXISTS ${entityName}`;

    // Execute the SQL query
    const queryResult = await db.query(sqlQuery);

    // Send response
    res.status(200).send({ message: "Entity deleted successfully", queryResult });
  } catch (error) {
    console.log(error);
    res.status(400).send({ error: error, message: "Entity could not be deleted" });
  }
}

// Controller function to get all entities
const getAllEntities = async(req, res) => {
  try {
    // Construct the SQL query to show all tables
    const sqlQuery = 'SHOW TABLES';

    // Execute the SQL query
    const queryResult = await db.query(sqlQuery);

    // Send response
    res.status(200).send(queryResult);
  } catch (error) {
    console.log(error);
    res.status(400).send({ error: error, message: "Entities could not be fetched from database" });
  }
}

// Controller function to get details of a specific entity
const getEntity = async (req, res) => {
  try {
    const { entityName } = req.params;

    // Construct the SQL query to describe the table
    const sqlQuery = `DESC ${entityName}`;

    // Execute the SQL query
    const queryResult = await db.query(sqlQuery);

    // Check if the table exists
    if (queryResult.length === 0) {
      return res.status(404).send({ message: "Entity not found in the database" });
    }

    // Send response
    res.status(200).send(queryResult);
  } catch (error) {
    console.log(error);
    res.status(400).send({ error: error, message: "Entity could not be fetched from database" });
  }
}

// Controller function to update the name of an entity
const updateEntityName = async(req, res) => {
  try {
    const { entityName } = req.params;
    const { newEntityName } = req.body;

    // If newEntityName is provided, rename the table
    if (newEntityName) {
      // Construct the SQL query to rename the table
      const renameQuery = `RENAME TABLE ${entityName} TO ${newEntityName}`;

      // Execute the SQL query to rename the table
      await db.query(renameQuery);

      // Send response
      res.status(200).send({ message: `Table ${entityName} renamed to ${newEntityName}` });
    }
  } catch (error) {
    console.log(error);
    res.status(400).send({ error: error, message: "Entity name could not be updated" });
  }
}

// Export controller functions
module.exports = {
  createEntity,
  deleteEntity,
  getAllEntities,
  getEntity,
  updateEntityName
}
