'use strict';
module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define('Event', {
    hostId: DataTypes.INTEGER,
    venueId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    date: DataTypes.DATE,
    start_time: DataTypes.TIME,
    end_time: DataTypes.TIME,
    description: DataTypes.TEXT,
    image: DataTypes.TEXT
  }, {});
  Event.associate = function (models) {
    Event.belongsTo(models.User, { foreignKey: 'hostId' });
    Event.hasMany(models.Registration, { foreignKey: 'eventId' });
  };
  return Event;
};
