/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('atletas_circuito', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    estado: {
      type: DataTypes.INTEGER(6),
      allowNull: true
    },
    atleta_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'atleta',
        key: 'id'
      }
    },
    circuito_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'circuito',
        key: 'id'
      }
    }
  }, {
    tableName: 'atletas_circuito'
  });
};
