// Import the database service
const db = require('../services/db');

// Controller function to add data to an entity
const addData = async (req, res) => {
    try {
        const { values } = req.body;
        const { entityName } = req.params;
        let sqlQuery = `INSERT INTO ${entityName} VALUES (`;

        // Iterate through each value and add it to the query
        for (const value of values) {
            // Quote string values
            sqlQuery += `'${value}',`;
        }

        // Remove the trailing comma and close the query
        sqlQuery = sqlQuery.slice(0, -1) + ');';

        // Execute the SQL query
        const queryResult = await db.query(sqlQuery);

        // Send response
        res.status(200).send({ message: "Data added successfully", queryResult });
    } catch (error) {
        // Log and send error response if an exception occurs
        console.error(error);
        res.status(400).send({ error, message: "Data couldn't be added" });
    }
}

// Controller function to get all data from an entity
const getData = async(req, res) => {
    try {
        const {entityName} = req.params;

        // Construct the SQL query to select all data from the entity
        let sqlQuery = `SELECT * FROM ${entityName}`;

        // Execute the SQL query
        const rows = await db.query(sqlQuery);

        // Send response
        res.status(200).send({ message: "Data fetched successfully", rows });
        
    } catch (error) {
        console.error(error);
        res.status(400).send({ error, message: "Data couldn't be fetched" });
    }
}

// Controller function to delete data from an entity
const deleteData = async(req, res) => {
    try {
        const {entityName, id} = req.params;

        // Construct the SQL query to delete data from the entity based on id
        let sqlQuery = `DELETE FROM ${entityName} WHERE id = ?`;

        // Execute the SQL query
        const queryResult = await db.query(sqlQuery, [id]);

        // Send response
        res.status(200).send({ message: "Data deleted successfully", queryResult });
        
    } catch (error) {
        console.error(error);
        res.status(400).send({ error, message: "Data couldn't be deleted" });
    }
}

// Controller function to update data in an entity
const updateData = async(req, res) => {
    try {
        const {entityName, id} = req.params;
        const {updateData} = req.body;

        // Construct the SQL query to update data in the entity
        let sqlQuery = `UPDATE ${entityName} SET `;
        for(const value in updateData){
            sqlQuery += `${value} = "${updateData[value]}",`;
        }
        sqlQuery = sqlQuery.slice(0, -1);
        sqlQuery += ` WHERE id = ${id}`;

        // Execute the SQL query
        const queryResult = await db.query(sqlQuery);

        // Send response
        res.status(200).send({ message: "Data updated successfully", queryResult });
        
    } catch (error) {
        console.error(error);
        res.status(400).send({ error, message: "Data couldn't be updated" });
    }
}

// Controller function to get a single data entry from an entity based on id
const getSingleData = async(req, res) => {
    try {
        const {entityName, id} = req.params;

        // Construct the SQL query to select a single data entry from the entity based on id
        let sqlQuery = `SELECT * FROM ${entityName} WHERE id = ${id}`;

        // Execute the SQL query
        const queryResult = await db.query(sqlQuery);

        // Send response
        res.status(200).send({ message: "Data fetched successfully", queryResult });
        
    } catch (error) {
        console.error(error);
        res.status(400).send({ error, message: "Data couldn't be fetched" });
    }
}

// Export controller functions
module.exports = {
   addData,
   getData,
   deleteData,
   updateData,
   getSingleData
}
