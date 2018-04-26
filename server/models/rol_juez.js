/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('rol_juez', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    rol: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'rol_juez'
  });
};
