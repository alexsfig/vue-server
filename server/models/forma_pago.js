/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('forma_pago', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    descripcion: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    nombre: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'forma_pago'
  });
};
