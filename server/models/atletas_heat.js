/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('atletas_heat', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    color: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    nota_mayor: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: '0.00'
    },
    nota_menor: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: '0.00'
    },
    promedio: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: '0.00'
    },
    heat_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'heat',
        key: 'id'
      }
    },
    atleta_circuito_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'atletas_circuito',
        key: 'id'
      }
    },
    ronda_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'ronda',
        key: 'id'
      }
    }
  }, {
    tableName: 'atletas_heat'
  });
};
