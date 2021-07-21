'use strict';
module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define('Event', {
    hostId: {
      type: DataTypes.INTEGER,
    },
    venueId: {
      type: DataTypes.INTEGER,
    },
    categoryId: {
      type: DataTypes.INTEGER,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    start_time: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    end_time: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    image: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  }, {});
  Event.associate = function (models) {
    Event.belongsTo(models.User, { foreignKey: 'hostId' });
    Event.hasMany(models.Registration, { foreignKey: 'eventId' });
  };
  Event.prototype.toSafeObject = function () {
    const { id, hostId, venueId, categoryId, name } = this;
    return { id, hostId, venueId, categoryId, name };
  };
  Event.createEvent = async function ({ hostId, venueId, categoryId, name, date, start_time, end_time, description, image }) {
    const event = await Event.create({
      hostId,
      venueId,
      categoryId,
      name,
      date,
      start_time,
      end_time,
      description,
      image,
    });
    return await Event.findByPk(event.id);
  };
  return Event;
};
