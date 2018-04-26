/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('jueces_heat', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    heat_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'heat',
        key: 'id'
      }
    },
    juez_circuito_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'juez_circuito',
        key: 'id'
      }
    },
    rol: {
      type: DataTypes.STRING(200),
      allowNull: false,
      defaultValue: 'Evaluador'
    }
  }, {
    tableName: 'jueces_heat'
  });
};
