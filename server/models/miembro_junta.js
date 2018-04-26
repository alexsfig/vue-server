/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('miembro_junta', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    nivel_jerarquia: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'miembro_junta'
  });
};
