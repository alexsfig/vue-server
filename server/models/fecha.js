/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('fecha', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    fecha: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    nombre: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    playa_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'playa',
        key: 'id'
      }
    }
  }, {
    tableName: 'fecha'
  });
};
