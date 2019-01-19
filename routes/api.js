const express = require('express');
const router = express.Router();
const controllers = require('../controllers');

/* GET users listing. */
router.get('/employees', controllers.api_employee_controller.index);
router.get('/employees/:id(\\d+)', controllers.api_employee_controller.show);
router.post('/employees/', controllers.api_employee_controller.create);
router.put('/employees/:id(\\d+)', controllers.api_employee_controller.update);
router.delete('/employees/:id(\\d+)', controllers.api_employee_controller.destroy);

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
