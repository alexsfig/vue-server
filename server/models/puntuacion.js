/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('puntuacion', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    nota: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    numero_ola: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    atletas_heat_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'atletas_heat',
        key: 'id'
      }
    },
    jueces_heat_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'jueces_heat',
        key: 'id'
      }
    }
  }, {
    tableName: 'puntuacion'
  });
};
