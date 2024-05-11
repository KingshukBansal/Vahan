// Import necessary modules
const express = require('express');
const router = express.Router();
const DataController = require('../controllers/dataController');

// Define routes for data management
router.post('/add-data/:entityName', DataController.addData); // Route to add data to a specific entity
router.get('/get-data/:entityName', DataController.getData); // Route to get all data from a specific entity
router.get('/get-single-data/:entityName/:id', DataController.getSingleData); // Route to get a single data entry from a specific entity
router.delete('/delete-data/:entityName/:id', DataController.deleteData); // Route to delete data from a specific entity
router.put('/update-data/:entityName/:id', DataController.updateData); // Route to update data in a specific entity

// Export the router
module.exports = router;
