/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('heat', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    ronda_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'ronda',
        key: 'id'
      }
    },
    numero: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    estado: {
      type: DataTypes.STRING(250),
      allowNull: false,
      defaultValue: 'Sin comenzar'
    }
  }, {
    tableName: 'heat'
  });
};
