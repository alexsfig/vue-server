/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('logs', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    clase: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    entrada: {
      type: DataTypes.STRING(5000),
      allowNull: true
    },
    error: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    excepcion: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    instante: {
      type: DataTypes.DATE,
      allowNull: false
    },
    metodo: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    tipo: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'logs'
  });
};
