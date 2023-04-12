const express = require('express'); 

// 1.
const router  = express.Router(); 
// 2.
const teaController = require('../controllers/tea'); 
// 3.
router.post('/tea', teaController.newTea); 
// 4. 
module.exports = router; 