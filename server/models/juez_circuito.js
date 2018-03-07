/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('juez_circuito', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    circuito_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'circuito',
        key: 'id'
      }
    },
    juez_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'juez',
        key: 'id'
      }
    },
    rol_juez_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'rol_juez',
        key: 'id'
      }
    }
  }, {
    tableName: 'juez_circuito'
  });
};
