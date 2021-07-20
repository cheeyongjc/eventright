'use strict';
module.exports = (sequelize, DataTypes) => {
  const Registration = sequelize.define('Registration', {
    eventId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  Registration.associate = function(models) {
    Registration.belongsTo(models.Event, {foeignKey: 'eventId'})
    Registration.belongsTo(models.User, {foeignKey: 'userId'})
  };
  return Registration;
};
