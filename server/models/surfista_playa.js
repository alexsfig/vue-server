/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('surfista_playa', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    atleta_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'atleta',
        key: 'id'
      }
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
    tableName: 'surfista_playa'
  });
};
