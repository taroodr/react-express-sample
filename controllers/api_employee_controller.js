const models = require('../models');

exports.index = (req, res, next) => {
  models.Employee.all().then(employees => {
    res.json({ employees: employees });
  });
};

exports.show = (req, res ,next) => {
  models.Employee.findById(req.params.id).then(employee => {
    res.json({ employee:employee });
  });
};

exports.create = (req, res, next) => {
  const properties = ['name', 'department', 'gender', 'birth', 'joined_date', 'payment', 'note'];
  const new_values = {};
  properties.forEach((prop) => {
    new_values[prop] = req.body[prop];
  });
  models.Employee.create(
    new_values
  ).then(new_employee => {
    res.redirect(302, '/employees');
  });
};

exports.update = (req, res, next) => {
  console.log('exports.update is executed');
  models.Employee.findById(req.params.id).then(employee => {
    const properties = ["name", "department", "gender", "birth", "joined_date", "payment", "note"];
    const update_values = {};
    properties.forEach(prop => {
      update_values[prop] = req.body[prop];    
    });
    employee.update(update_values);
    res.redirect(302, `/employees/${employee.id}`);
  });
};

exports.destroy = (req, res, next) => {
  models.Employee.destroy
    ({
      where: { id: req.params.id }
    }).then(employee => {
      res.redirect(302, "/employees");
    });
};
