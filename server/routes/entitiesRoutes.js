// Import necessary modules
const express = require('express');
const router = express.Router();
const EntityController = require('../controllers/entitiyController');

// Define routes for entity management
router.post('/create-entity', EntityController.createEntity); // Route to create a new entity
router.delete('/delete-entity/:entityName', EntityController.deleteEntity); // Route to delete an entity
router.get('/get-all-entities', EntityController.getAllEntities); // Route to get all entities
router.get('/get-entity/:entityName', EntityController.getEntity); // Route to get a specific entity
router.put('/update-entity-name/:entityName', EntityController.updateEntityName); // Route to update the name of an entity

// Export the router
module.exports = router;
