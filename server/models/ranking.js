/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ranking', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    anio: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    puntuacion: {
      type: DataTypes.DECIMAL,
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
    categoria_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'categoria',
        key: 'id'
      }
    }
  }, {
    tableName: 'ranking'
  });
};
