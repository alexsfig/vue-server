/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('certificacion', {
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
    lugar: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    titulo: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    juez_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'juez',
        key: 'id'
      }
    }
  }, {
    tableName: 'certificacion'
  });
};
