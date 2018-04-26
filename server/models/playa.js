/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  const Playa =   sequelize.define('Playa', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    nombre: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ubicacion: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'playa'
  });
  return Playa;
};
