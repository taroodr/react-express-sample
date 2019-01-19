'use strict';
module.exports = (sequelize, DataTypes) => {
  const Employee = sequelize.define('Employee', {
    name: DataTypes.STRING,
    department: DataTypes.STRING,
    gender: DataTypes.ENUM('male', 'female', 'other'),
    birth: DataTypes.DATE,
    joined_date: DataTypes.DATE,
    pay: DataTypes.BIGINT,
    note: DataTypes.STRING
  }, {
    underscored: true,
  });
  Employee.associate = function(models) {
    // associations can be defined here
  };
  return Employee;
};