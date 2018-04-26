/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ronda', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    atletas_ronda: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    circuito_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'circuito',
        key: 'id'
      }
    },
    numero: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    estado: {
      type: DataTypes.STRING(200),
      allowNull: false,
      defaultValue: 'Creado'
    }
  }, {
    tableName: 'ronda'
  });
};
